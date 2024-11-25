<template>
  <div class="min-h-screen bg-white">
    <main class="container mx-auto px-4 pb-24 pt-8">
      <div class="mb-8 space-y-4">
        <h1 class="text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
          Lorem ipsum solor der amet sol: Innowacyjne rozwiązania w branży rowerowej
        </h1>
        <div class="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
          <div class="flex items-center gap-2">
            <Icon
              name="mdi:calendar-month-outline"
              size="18"
              class="text-muted-foreground"
            />
            <time datetime="2024-01-20">20.01.2024</time>
          </div>
        </div>
      </div>

      <div class="relative mb-8 h-[300px] overflow-hidden rounded-lg md:h-[400px] lg:h-[500px]">
        <NuxtImg
          src="/img/hero.webp"
          sizes="365px sm:640px md:320px md:800px lg:1024px xl:1280px 2xl:1536px"
          densities="x1"
          quality="80"
          alt="Innowacyjny rower elektryczny"
          class="absolute inset-0 h-full w-full object-cover"
        />
      </div>

      <div class="prose prose-gray mx-auto max-w-3xl">
        <p class="text-xl">
          W świecie, gdzie zrównoważony transport staje się coraz ważniejszy, branża rowerowa nie
          pozostaje w tyle. Najnowsze innowacje nie tylko poprawiają komfort jazdy, ale także
          przyczyniają się do ochrony środowiska.
        </p>

        <h2 class="mb-4 mt-8 text-2xl font-semibold">Rewolucja w napędach elektrycznych</h2>
        <p class="mb-4">
          Nowa generacja silników elektrycznych do rowerów oferuje niespotykaną dotąd wydajność.
          Dzięki zastosowaniu zaawansowanych algorytmów i lekkich materiałów, udało się stworzyć
          napędy, które są nie tylko mocniejsze, ale i znacznie lżejsze od swoich poprzedników.
        </p>

        <h2 class="mb-4 mt-8 text-2xl font-semibold">Inteligentne systemy bezpieczeństwa</h2>
        <p class="mb-4">
          Bezpieczeństwo rowerzystów jest priorytetem dla producentów. Najnowsze modele rowerów
          wyposażone są w inteligentne systemy wykrywania przeszkód i automatycznego hamowania, co
          znacząco zmniejsza ryzyko kolizji.
        </p>

        <h2 class="mb-4 mt-8 text-2xl font-semibold">Ekologiczne materiały przyszłości</h2>
        <p class="mb-4">
          Producenci rowerów coraz częściej sięgają po materiały biodegradowalne i pochodzące z
          recyklingu. Ramy z włókien bambusowych czy opony z odzyskanej gumy to tylko niektóre z
          przykładów, jak branża rowerowa staje się coraz bardziej przyjazna dla środowiska.
        </p>

        <h2 class="mb-4 mt-8 text-2xl font-semibold">Podsumowanie</h2>
        <p class="mb-4">
          Innowacje w branży rowerowej nie tylko poprawiają jakość jazdy, ale także przyczyniają się
          do tworzenia bardziej zrównoważonego transportu miejskiego. Z niecierpliwością czekamy na
          kolejne przełomowe rozwiązania, które zmienią sposób, w jaki poruszamy się po miastach.
        </p>
      </div>
      <CarouselSection
        :title="$t('recommendedProducts.title')"
        :description="$t('recommendedProducts.description')"
        class="mt-32"
      />
    </main>
  </div>
</template>
