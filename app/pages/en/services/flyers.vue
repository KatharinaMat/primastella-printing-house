<template>
  <div>
    <ServicesHero />

    <main class="service-page">
      <section class="service-content">
        <div class="service-text">
          <h1>{{ t("servicePages.flyers.title") }}</h1>

          <p v-html="t('servicePages.flyers.intro')"></p>
          <p v-html="t('servicePages.flyers.text1')"></p>
          <p v-html="t('servicePages.flyers.text2')"></p>
          <p v-html="t('servicePages.flyers.text3')"></p>
        </div>

        <ServiceGallery :images="galleryImages" mode="poster" />
      </section>
    </main>

    <Footer />
  </div>
</template>

<script setup>
useSeoMeta({
  title: "Flyers – Primastella printing house in Tallinn | Design and printing",

  description:
    "Primastella printing house in Tallinn prints high-quality flyers and promotional leaflets on glossy or matte coated paper with weights from 100–170 gsm. Fast and professional service.",

  ogTitle: "Flyers – Primastella printing house in Tallinn",

  ogDescription:
    "Flyer design and printing on glossy or matte coated paper 100–170 gsm. Fast turnaround.",

  ogType: "website",
  ogUrl: "https://primastella.ee/en/flyers",

  ogLocale: "en_US",
});

useHead({
  link: [
    { rel: "canonical", href: "https://primastella.ee/en/flyers" },
    {
      rel: "alternate",
      href: "https://primastella.ee/flaierid",
      hreflang: "et",
    },
    {
      rel: "alternate",
      href: "https://primastella.ee/en/flyers",
      hreflang: "en",
    },
    {
      rel: "alternate",
      href: "https://primastella.ee/flaierid",
      hreflang: "x-default",
    },
  ],
});

const { t } = useLocale();

const galleryImages = [
  {
    src: "/images/naidis_flaier.jpg",
    alt: "Flaier 1",
  },
  {
    src: "/images/naidis_flaier_2.jpg",
    alt: "Flaier 2",
  },
];
</script>
