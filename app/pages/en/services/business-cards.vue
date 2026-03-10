<template>
  <div>
    <ServicesHero />

    <main class="service-page">
      <section class="service-content">
        <div class="service-text">
          <h1>{{ t("servicePages.businessCards.title") }}</h1>

          <p v-html="t('servicePages.businessCards.intro')"></p>
          <p v-html="t('servicePages.businessCards.text1')"></p>
          <p v-html="t('servicePages.businessCards.text2')"></p>
        </div>
        <ServiceGallery :images="galleryImages" />
      </section>
    </main>

    <Footer />
  </div>
</template>

<script setup>
useSeoMeta({
  title:
    "Business cards – Primastella printing house in Tallinn | Design and printing",

  description:
    "Primastella printing house in Tallinn offers high-quality business card design and printing. Choose from matte, glossy, laminated and specialty finishes with fast turnaround.",

  ogTitle: "Business cards – Primastella printing house in Tallinn",

  ogDescription:
    "High-quality business cards: matte, glossy, laminated and special finishes. Fast and reliable printing service.",

  ogType: "website",
  ogUrl: "https://primastella.ee/en/business-cards",

  ogLocale: "en_US",
});

useHead({
  link: [
    { rel: "canonical", href: "https://primastella.ee/en/business-cards" },
    {
      rel: "alternate",
      href: "https://primastella.ee/visiitkaardid",
      hreflang: "et",
    },
    {
      rel: "alternate",
      href: "https://primastella.ee/en/business-cards",
      hreflang: "en",
    },
    {
      rel: "alternate",
      href: "https://primastella.ee/visiitkaardid",
      hreflang: "x-default",
    },
  ],
});

const { t } = useLocale();

const galleryImages = [
  {
    src: "/images/visiitkaart_1.webp",
    alt: "Business card sample 1",
  },
  {
    src: "/images/visiitkaart_2.webp",
    alt: "Business card sample 2",
  },
  {
    src: "/images/visiitkaart_3.webp",
    alt: "Business card sample 3",
  },
];
</script>
