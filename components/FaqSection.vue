<script setup>
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

const faqSections = [
  {
    title: 'Pracownia i serwis rowerów',
    items: [
      {
        id: 1,
        question: 'Lorem ipsum solor der amet sol consectetur eiusmod?',
        answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, quibusdam.',
      },
      {
        id: 2,
        question: 'Dlaczego warto serwisować rower regularnie?',
        answer:
          'Regularny serwis przedłuża żywotność roweru i zapewnia bezpieczeństwo podczas jazdy.',
      },
      {
        id: 3,
        question: 'Jak często należy wymieniać łańcuch?',
        answer:
          'Łańcuch należy wymieniać co około 1000-2000 km w zależności od intensywności użytkowania.',
      },
      {
        id: 4,
        question: 'Czy naprawiacie rowery elektryczne?',
        answer: 'Tak, naprawiamy również rowery elektryczne, w tym baterie i silniki.',
      },
    ],
  },
  {
    title: 'Konwersja rowerów na rowery elektryczne',
    items: [
      {
        id: 1,
        question: 'Jak wygląda proces konwersji roweru na elektryczny?',
        answer: 'Proces konwersji obejmuje instalację silnika, baterii i sterownika.',
      },
      {
        id: 2,
        question: 'Ile kosztuje konwersja roweru?',
        answer: 'Koszt konwersji zależy od wybranego zestawu, zazwyczaj wynosi od 2000 do 4000 zł.',
      },
      {
        id: 3,
        question: 'Czy mogę użyć dowolnego roweru do konwersji?',
        answer: 'Nie każdy rower nadaje się do konwersji. Musi być w dobrym stanie technicznym.',
      },
    ],
  },
  {
    title: 'Inne',
    items: [
      {
        id: 1,
        question: 'Czy oferujecie naprawy na miejscu?',
        answer: 'Tak, w nagłych przypadkach oferujemy serwis mobilny.',
      },
      {
        id: 2,
        question: 'Czy sprzedajecie części zamienne?',
        answer: 'Tak, posiadamy szeroki wybór części zamiennych do różnych typów rowerów.',
      },
    ],
  },
  {
    title: 'Konwersja rowerów na rowery elektryczne2',
    items: [
      {
        id: 1,
        question: 'Jak wygląda proces konwersji roweru na elektryczny?',
        answer: 'Proces konwersji obejmuje instalację silnika, baterii i sterownika.',
      },
      {
        id: 2,
        question: 'Ile kosztuje konwersja roweru?',
        answer: 'Koszt konwersji zależy od wybranego zestawu, zazwyczaj wynosi od 2000 do 4000 zł.',
      },
      {
        id: 3,
        question: 'Czy mogę użyć dowolnego roweru do konwersji?',
        answer: 'Nie każdy rower nadaje się do konwersji. Musi być w dobrym stanie technicznym.',
      },
    ],
  },
]
</script>

<template>
  <section class="w-full px-4">
    <div class="container mx-auto">
      <h2 class="mb-4 text-center text-3xl font-bold">FAQ</h2>
      <p class="mx-auto mb-12 max-w-3xl text-center text-muted-foreground">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna aliqua. Ut enim ad minim veniam. Lorem ipsum dolor sit amet,
        consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </p>

      <div class="grid gap-8 md:grid-cols-2">
        <div
          v-for="(section, sectionIndex) in faqSections"
          :key="`section-${sectionIndex}`"
          class="space-y-4 md:col-span-1"
        >
          <h3 class="mb-4 text-xl font-semibold">{{ section.title }}</h3>
          <Accordion
            type="single"
            collapsible
            class="space-y-2"
          >
            <AccordionItem
              v-for="item in section.items"
              :key="`item-${item.id}`"
              :value="`item-${item.id}`"
              class="rounded-lg border px-4"
            >
              <AccordionTrigger>{{ item.question }}</AccordionTrigger>
              <AccordionContent>{{ item.answer }}</AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </div>
  </section>
</template>
