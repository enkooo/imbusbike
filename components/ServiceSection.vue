<script setup lang="ts">
import { toast } from '@/components/ui/toast'
import { toTypedSchema } from '@vee-validate/zod'
import { useForm } from 'vee-validate'
import * as z from 'zod'
import { DateFormatter, getLocalTimeZone, parseDate, today } from '@internationalized/date'
import { cn } from '@/lib/utils'
import { toDate } from 'radix-vue/date'
import { Calendar as CalendarIcon } from 'lucide-vue-next'

interface FileAttachment {
  name: string
  size: number
  type: string
  content: string
}

const { t } = useI18n()
const phoneRegex = new RegExp(/^(\+48)?[ ]?(\d{3}[ -]?){2}\d{3}$/)
const df = new DateFormatter('pl-PL', {
  dateStyle: 'long',
})

const formSchema = toTypedSchema(
  z.object({
    name: z
      .string({
        required_error: t('serviceForm.messages.nameRequired'),
      })
      .min(2, {
        message: t('serviceForm.messages.nameMin'),
      }),
    email: z
      .string({
        required_error: t('serviceForm.messages.emailRequired'),
      })
      .email(t('serviceForm.messages.invalidEmail')),
    phone: z
      .string({
        required_error: t('serviceForm.messages.phoneRequired'),
      })
      .regex(phoneRegex, t('serviceForm.messages.invalidNumber')),
    messageTitle: z
      .string({
        required_error: t('serviceForm.messages.messageTitleRequired'),
      })
      .min(2, {
        message: t('serviceForm.messages.messageTitleMin'),
      }),
    messageContent: z
      .string({
        required_error: t('serviceForm.messages.messageContentRequired'),
      })
      .min(10, {
        message: t('serviceForm.messages.messageContentMin'),
      })
      .max(2000, {
        message: t('serviceForm.messages.messageContentMax'),
      }),
    acceptTerms: z
      .boolean({
        required_error: t('serviceForm.messages.acceptTermsRequired'),
      })
      .refine((val) => val === true, {
        message: t('serviceForm.messages.acceptTerms'),
      }),
    images: z
      .array(z.instanceof(File))
      .refine((files) => files.reduce((total, file) => total + file.size, 0) <= 5 * 1024 * 1024, {
        message: `${t('serviceForm.messages.imagesSize')} 5MB`,
      })
      .optional(),
    serviceDate: z
      .string({
        required_error: t('serviceForm.messages.serviceDateRequired'),
      })
      .refine((v) => v, { message: t('serviceForm.messages.serviceDateRequired') }),
  }),
)

const mail = useMail()
const { handleSubmit, setFieldValue, values, resetForm } = useForm({
  validationSchema: formSchema,
})

const onSubmit = handleSubmit(async (values) => {
  try {
    const files = values.images?.map(
      (file) =>
        new Promise<FileAttachment>((resolve, reject) => {
          const reader = new FileReader()
          reader.onload = () => {
            if (reader.result) {
              resolve({
                name: file.name,
                size: file.size,
                type: file.type,
                content: (reader.result as string).split(',')[1],
              })
            } else {
              reject(new Error('FileReader result is null'))
            }
          }
          reader.onerror = reject
          reader.readAsDataURL(file)
        }),
    )

    const attachments: FileAttachment[] = files ? await Promise.all(files) : []

    await mail.send({
      from: values.email,
      subject: values.messageTitle,
      text: `
        Name: ${values.name}
        Email: ${values.email}
        Phone: ${values.phone}
        Message Title: ${values.messageTitle}
        Message Content: ${values.messageContent}
      `,
      attachments: attachments.map((attachment) => ({
        filename: attachment.name,
        content: attachment.content,
        encoding: 'base64',
      })),
    })

    toast({
      description: t('contactForm.messages.messageSuccessSent'),
    })

    resetForm()
  } catch (error) {
    console.error('Error processing files or sending mail:', error)
    toast({
      description: t('contactForm.messages.messageErrorSent'),
    })
  }
})

const serviceDateValue = computed({
  get: () => (values.serviceDate ? parseDate(values.serviceDate) : undefined),
  set: (val) => val,
})
</script>

<template>
  <div class="container">
    <section class="text-center">
      <h2 class="text-3xl font-bold">{{ $t('serviceForm.heading') }}</h2>
      <p class="mx-auto mt-7 max-w-5xl text-muted-foreground">{{ $t('serviceForm.subheading') }}</p>
    </section>
    <form
      class="mx-auto mt-10 max-w-5xl space-y-6 md:grid md:w-full md:grid-cols-3 md:gap-6 md:space-y-0"
      @submit="onSubmit"
    >
      <FormField
        v-slot="{ componentField }"
        name="name"
      >
        <FormItem v-auto-animate>
          <FormLabel required>{{ $t('serviceForm.fields.name') }}</FormLabel>
          <FormControl>
            <Input
              type="text"
              v-bind="componentField"
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      </FormField>

      <FormField
        v-slot="{ componentField }"
        name="email"
      >
        <FormItem v-auto-animate>
          <FormLabel required>{{ $t('serviceForm.fields.email') }}</FormLabel>
          <FormControl>
            <Input
              type="email"
              v-bind="componentField"
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      </FormField>

      <FormField
        v-slot="{ componentField }"
        name="phone"
      >
        <FormItem v-auto-animate>
          <FormLabel required>{{ $t('serviceForm.fields.phone') }}</FormLabel>
          <FormControl>
            <Input
              type="text"
              v-bind="componentField"
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      </FormField>

      <FormField name="serviceDate">
        <FormItem v-auto-animate>
          <FormLabel required>{{ $t('serviceForm.fields.serviceDate') }}</FormLabel>
          <div>
            <Popover>
              <PopoverTrigger as-child>
                <FormControl>
                  <Button
                    variant="outline"
                    size="lg"
                    :class="
                      cn(
                        'w-full px-3 text-start font-normal',
                        !serviceDateValue && 'text-muted-foreground',
                      )
                    "
                  >
                    <span>{{ serviceDateValue ? df.format(toDate(serviceDateValue)) : '' }}</span>
                    <CalendarIcon class="ms-auto h-4 w-4 opacity-50" />
                  </Button>
                  <input hidden />
                </FormControl>
              </PopoverTrigger>
              <PopoverContent class="w-auto p-0">
                <Calendar
                  v-model="serviceDateValue"
                  :calendar-label="$t('serviceForm.fields.serviceDate')"
                  initial-focus
                  :min-value="today(getLocalTimeZone())"
                  @update:model-value="
                    (v) => {
                      if (v) {
                        setFieldValue('serviceDate', v.toString())
                      } else {
                        setFieldValue('serviceDate', undefined)
                      }
                    }
                  "
                />
              </PopoverContent>
            </Popover>
          </div>
          <FormMessage />
        </FormItem>
      </FormField>

      <FormField
        v-slot="{ componentField }"
        name="messageTitle"
      >
        <FormItem v-auto-animate>
          <FormLabel required>{{ $t('serviceForm.fields.messageTitle') }}</FormLabel>
          <FormControl>
            <Input
              type="messageTitle"
              v-bind="componentField"
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      </FormField>

      <FormField name="images">
        <FormItem v-auto-animate>
          <FormLabel>{{ $t('serviceForm.fields.images') }}</FormLabel>
          <FormControl>
            <Input
              type="file"
              accept="image/*"
              multiple
              @change="
                (e: Event) => {
                  const target = e.target as HTMLInputElement
                  const files = Array.from(target.files || []) as File[]

                  setFieldValue('images', files)
                }
              "
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      </FormField>

      <FormField
        v-slot="{ componentField }"
        name="messageContent"
      >
        <FormItem
          v-auto-animate
          class="col-span-3"
        >
          <FormLabel required>{{ $t('contactForm.fields.messageContent') }}</FormLabel>
          <FormControl>
            <Textarea
              class="resize-none"
              v-bind="componentField"
              rows="8"
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      </FormField>

      <FormField
        v-slot="{ value, handleChange }"
        type="checkbox"
        name="acceptTerms"
      >
        <FormItem
          v-auto-animate
          class="col-span-3 flex flex-row items-start gap-x-3 space-y-0 rounded-md"
        >
          <FormControl>
            <Checkbox
              :checked="value"
              @update:checked="handleChange"
            />
          </FormControl>
          <div
            v-auto-animate
            class="space-y-1 leading-none"
          >
            <FormLabel required>{{ $t('contactForm.checkbox.label') }}</FormLabel>
            <FormDescription class="!mt-2 text-xs text-primary">
              {{ $t('contactForm.checkbox.text') }}
            </FormDescription>
            <FormMessage />
          </div>
        </FormItem>
      </FormField>

      <div class="col-span-3 flex gap-3 md:ml-auto md:w-[450px]">
        <Button
          ref="resetButton"
          class="w-full"
          variant="secondary"
          type="reset"
        >
          {{ $t('serviceForm.buttons.clear') }}
        </Button>
        <Button
          class="w-full"
          type="submit"
        >
          {{ $t('serviceForm.buttons.send') }}
        </Button>
      </div>
    </form>
  </div>
</template>
