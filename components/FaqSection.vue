<script setup>
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

const faqSections = [
  {
    title: 'Najczęstsze pytania',
    items: [
      {
        id: 1,
        question: 'Gdzie znajduje się serwis?',
        answer: 'Na ul. Gen. Grota-Roweckiego 26 w Tomaszowie Mazowieckim',
      },
      {
        id: 2,
        question: 'Kiedy serwis jest otwarty?',
        answer:
          'Najaktualniejsze godziny otwarca sprawdzisz na naszej wizytówce w serwiswie Google',
      },
      {
        id: 3,
        question: 'Jak się mogę z wami skontaktować?',
        answer: 'Możesz skorzystać z zakładki "kontakt" lub zadzwonić pod numer "695 789 537"',
      },
      {
        id: 4,
        question: 'Czy muszę umawiać wizytę na serwis?',
        answer: 'Brak odpowiedzi',
      },
      {
        id: 5,
        question: 'Czy oferujecie naprawy na miejscu, od ręki?',
        answer: 'Brak odpowiedzi',
      },
      {
        id: 6,
        question: 'Czy akceptujecie płatności kartą?',
        answer: 'Brak odpowiedzi',
      },
    ],
  },
  {
    title: 'Konwersja rowerów na rowery elektryczne',
    items: [
      {
        id: 1,
        question: 'Czy mój rower można przerobić na elektryczny?',
        answer:
          'Większość roweru da się przerobić z uwagi na różnorodność silników oraz baterii. Przesłanie zdjęć roweru ułatwi nam odpowiedź',
      },
      {
        id: 2,
        question: 'Jaki jest koszt konwersji?',
        answer:
          'Koszt konwersji zależy od modelu roweru, jego stanu technicznego oraz wybranego zestawu. Prosimy o przesłanie zdjęć lub kontakt telefoniczny w celu przedstawienia ofert.',
      },
      {
        id: 3,
        question: 'Jaki jest zasięg przerobionego roweru?',
        answer:
          'Zasięg zależy od wielu czynników, od pojemności baterii, mocy silnika po styl jazdy użytkownika. Zwykle wynosi minimum 50km.',
      },
      {
        id: 4,
        question: 'Czy naprawiacie rowery elektryczne?',
        answer: 'Tak, naprawiamy również rowery elektryczne, w tym baterie i silniki.',
      },
      {
        id: 5,
        question: 'Czy udzielacie gwarancji na przerobiony rower?',
        answer: 'Brak odpowiedzi.',
      },
    ],
  },
  {
    title: 'Koszt serwisu roweru',
    items: [
      {
        id: 1,
        question: 'Jaki jest koszt przeglądu?',
        answer: 'Przegląd podstawowy 100-150zł. Przegląd rozszerzony 250-300zł',
      },
      {
        id: 2,
        question: 'Co zawiera przegląd podstawowy?',
        answer: 'Brak odpowiedzi',
      },
      {
        id: 3,
        question: 'Co zawiera przegląd rozszerzony?',
        answer: 'Brak odpowiedzi',
      },
      {
        id: 4,
        question: 'Jaki jest koszt przeglądu roweru elektrycznego?',
        answer:
          'Koszt przeglądu roweru elektrycznego od 200-300zł dodatkową opłata za diagnostyke oraz aktualizacje oprogramowania w rowerach na systemach Bosch, Brose, Shimano.',
      },
      {
        id: 5,
        question: 'Jaki jest koszt centrowania koła?',
        answer:
          'Koszt centrowania koła od 30-50zł. W przypadku kół karbonowych oraz zaplatanych na płaskich szprychach koszt może być wyższy.',
      },
      {
        id: 6,
        question: 'Czy wymiana części jest wliczona w koszt przeglądu?',
        answer: 'Brak odpowiedzi',
      },
      {
        id: 7,
        question: 'Czy oferujecie rabaty na regularny serwis?',
        answer: 'Brak odpowiedzi',
      },
      {
        id: 8,
        question: 'Ile kosztuje naprawa przerzutek?',
        answer: 'Brak odpowiedzi',
      },
      {
        id: 9,
        question: 'Czy wymiana części jest wliczona w koszt przeglądu?',
        answer: 'Brak odpowiedzi',
      },
    ],
  },
  {
    title: 'Usługa door to door',
    items: [
      {
        id: 1,
        question: 'Na czym polega usługa door to door?',
        answer: 'Brak odpowiedzi',
      },
      {
        id: 2,
        question: 'Jaki jest czas realizacji?',
        answer: 'Od odbioru roweru do naprawy do 5 dni roboczych',
      },
      {
        id: 3,
        question: 'Jaki jest koszt usługi?',
        answer:
          'Koszt transportu roweru w obie strony w obrębie Tomaszowa Mazowieckiego jest bezpłatny.',
      },
      {
        id: 4,
        question: 'Czy usługa door to door obejmuje wszystkie rodzaje napraw?',
        answer: 'Brak odpowiedzi.',
      },
      {
        id: 5,
        question: 'Czy mogę zamówić usługę poza standardowymi godzinami pracy?',
        answer: 'Brak odpowiedzi.',
      },
      {
        id: 6,
        question: 'Czy odbieracie rowery z innych miast?',
        answer: 'Brak odpowiedzi.',
      },
      {
        id: 7,
        question: 'Czy usługa door to door jest dostępna w weekendy?',
        answer: 'Brak odpowiedzi.',
      },
      {
        id: 8,
        question: 'Jak mogę umówić wizytę mobilnego serwisu?',
        answer: 'Skorzystaj z zakładki "Serwis" lub skontaktuj się z nami telefonicznie',
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
        Znajdź odpowiedzi na najczęściej zadawane pytania dotyczące naszych usług serwisowych. Jeśli
        nie znajdziesz potrzebnych informacji, skontaktuj się z nami – chętnie pomożemy!
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
