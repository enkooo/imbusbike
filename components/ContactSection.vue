<script setup lang="ts">
import { toTypedSchema } from '@vee-validate/zod'
import { useForm } from 'vee-validate'
import * as z from 'zod'
import { Button } from '@/components/ui/button'
import { useToast } from '@/components/ui/toast/use-toast'
import emailjs from '@emailjs/browser'

const config = useRuntimeConfig()
const EMAILJS_PUBLIC_KEY = config.public.EMAILJS_PUBLIC_KEY
const EMAILJS_SERVICE_ID = config.public.EMAILJS_SERVICE_ID
const EMAILJS_TEMPLATE_ID = config.public.EMAILJS_TEMPLATE_ID

interface FormValues {
  name: string
  email: string
  phone: string
  messageType: string
  messageTitle: string
  messageContent: string
  acceptTerms: boolean
}

const { t } = useI18n()
const router = useRouter()

const Messages: [string, ...string[]] = [
  t('contactForm.messageTypes.quoteInquiry'),
  t('contactForm.messageTypes.supportRequest'),
  t('contactForm.messageTypes.generalQuestion'),
  t('contactForm.messageTypes.feedback'),
  t('contactForm.messageTypes.partnershipInquiry'),
  t('contactForm.messageTypes.technicalIssue'),
]

const phoneRegex = new RegExp(/^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/)

const schema = z.object({
  name: z
    .string({
      required_error: t('contactForm.messages.nameRequired'),
    })
    .min(2, {
      message: t('contactForm.messages.nameMin'),
    }),

  email: z
    .string({
      required_error: t('contactForm.messages.emailRequired'),
    })
    .email(t('contactForm.messages.invalidEmail')),

  phone: z
    .string({
      required_error: t('contactForm.messages.phoneRequired'),
    })
    .regex(phoneRegex, t('contactForm.messages.invalidNumber')),

  messageType: z
    .enum(Messages, {
      required_error: t('contactForm.messages.messageTypeRequired'),
    })
    .describe(t('contactForm.fields.messageType')),

  messageTitle: z
    .string({
      required_error: t('contactForm.messages.messageTitleRequired'),
    })
    .min(2, {
      message: t('contactForm.messages.messageTitleMin'),
    }),

  messageContent: z
    .string({
      required_error: t('contactForm.messages.messageContentRequired'),
    })
    .min(10, {
      message: t('contactForm.messages.messageContentMin'),
    })
    .max(2000, {
      message: t('contactForm.messages.messageContentMax'),
    }),

  acceptTerms: z
    .boolean({
      required_error: t('contactForm.messages.acceptTermsRequired'),
    })
    .refine((val) => val === true, {
      message: t('contactForm.messages.acceptTerms'),
    }),
})

const form = useForm({
  validationSchema: toTypedSchema(schema),
})

watch(
  () => router.currentRoute.value.query.q,
  (value) => {
    nextTick(() => {
      if (value === 'project') {
        form.setFieldValue('messageType', t('contactForm.messageTypes.quoteInquiry'))
      } else {
        form.resetField('messageType')
      }
    })
  },
  { immediate: true },
)

const { toast } = useToast()
const resetButton = ref<InstanceType<typeof Button> | null>(null)

function onSubmit(values: FormValues) {
  emailjs
    .send(
      EMAILJS_SERVICE_ID!,
      EMAILJS_TEMPLATE_ID!,
      {
        from_name: values.name,
        from_email: values.email,
        from_phone: values.phone,
        message_type: values.messageType,
        message_title: values.messageTitle,
        message_content: values.messageContent,
      },
      EMAILJS_PUBLIC_KEY!,
    )
    .then(() => {
      toast({
        description: t('contactForm.messages.messageSuccessSent'),
      })

      resetButton.value?.$el.click()
      form.resetField('messageType')
    })
    .catch(() => {
      console.error('Error sending message')
      toast({
        description: t('contactForm.messages.messageErrorSent'),
      })
    })
}
</script>

<template>
  <div
    :id="$t('links.contact').split('#')[1]"
    class="container pb-20 pt-20"
  >
    <section class="text-center">
      <h2 class="text-3xl font-bold">{{ $t('contactForm.heading') }}</h2>
      <p class="mx-auto mt-7 max-w-5xl text-typography-gray">{{ $t('contactForm.subheading') }}</p>
    </section>
    <div class="mt-10">
      <AutoForm
        class="auto-contact-form mx-auto max-w-5xl space-y-6 md:grid md:w-full md:grid-cols-3 md:gap-6 md:space-y-0"
        :form="form"
        :schema="schema"
        :field-config="{
          name: {
            label: $t('contactForm.fields.name'),
          },
          email: {
            label: $t('contactForm.fields.email'),
            inputProps: {
              type: 'email',
            },
          },
          phone: {
            label: $t('contactForm.fields.phone'),
          },
          messageType: {
            label: $t('contactForm.fields.messageType'),
          },
          messageTitle: {
            label: $t('contactForm.fields.messageTitle'),
          },
          messageContent: {
            label: $t('contactForm.fields.messageContent'),
            component: 'textarea',
            inputProps: {
              rows: 8,
            } as unknown as Record<string, any>,
          },
          acceptTerms: {
            label: $t('contactForm.checkbox.label'),
            inputProps: {
              required: true,
            },
          },
        }"
        @submit="onSubmit"
      >
        <template #acceptTerms="acceptTermsField">
          <div>
            <AutoFormField v-bind="acceptTermsField" />
            <div class="!mt-2 text-xs">
              {{ $t('contactForm.checkbox.text') }}
            </div>
          </div>
        </template>

        <div class="flex gap-3 md:ml-auto md:w-[450px]">
          <Button
            ref="resetButton"
            class="w-full"
            variant="secondary"
            type="reset"
          >
            {{ $t('contactForm.buttons.clear') }}
          </Button>
          <Button
            class="w-full"
            type="submit"
          >
            {{ $t('contactForm.buttons.send') }}
          </Button>
        </div>
      </AutoForm>
    </div>
  </div>
</template>

<style>
.auto-contact-form div:last-child {
  grid-column: 1 / -1;
}

.auto-contact-form div:nth-child(5) {
  grid-column: span 2 / span 2;
}

.auto-contact-form div:nth-child(6) {
  grid-column: 1 / -1;
}

.auto-contact-form div:nth-child(7) {
  grid-column: 1 / -1;
}
</style>
