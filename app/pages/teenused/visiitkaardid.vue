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
  title: "Visiitkaardid – Primastella trükikoda Tallinnas | Kujundus ja trükk",

  description:
    "Primastella trükikoda Tallinnas pakub kvaliteetset visiitkaartide kujundust ja trükki. Valikus matt, läikiv, lamineeritud ja eriviimistlusega visiitkaardid kiire teostusega.",

  ogTitle: "Visiitkaardid – Primastella trükikoda Tallinnas",

  ogDescription:
    "Kvaliteetsed visiitkaardid: matt, läikiv, lamineeritud ja eriviimistlused. Kiire teostus.",

  ogType: "website",
  ogUrl: "https://primastella.ee/visiitkaardid",

  ogLocale: "et_EE",
});

useHead({
  link: [
    { rel: "canonical", href: "https://primastella.ee/visiitkaardid" },
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
