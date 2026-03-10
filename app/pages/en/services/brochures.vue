<template>
  <div>
    <ServicesHero />

    <main class="service-page">
      <section class="service-content">
        <div class="service-text">
          <h1>{{ t("servicePages.brochures.title") }}</h1>

          <p v-html="t('servicePages.brochures.intro')"></p>
          <p v-html="t('servicePages.brochures.text1')"></p>
          <p v-html="t('servicePages.brochures.text2')"></p>
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
    "Brochures – Primastella printing house in Tallinn | Design and printing",

  description:
    "Primastella printing house in Tallinn produces brochures in various formats and paper weights. We offer folding, lamination and high-quality printing on glossy or matte paper.",

  ogTitle: "Brochures – Primastella printing house in Tallinn",

  ogDescription:
    "Brochures in different formats and paper types. Folding, lamination and high-quality printing with fast turnaround.",

  ogType: "website",
  ogUrl: "https://primastella.ee/en/brochures",

  ogLocale: "en_US",
});

useHead({
  link: [
    { rel: "canonical", href: "https://primastella.ee/en/brochures" },
    {
      rel: "alternate",
      href: "https://primastella.ee/voldikud",
      hreflang: "et",
    },
    {
      rel: "alternate",
      href: "https://primastella.ee/en/brochures",
      hreflang: "en",
    },
    {
      rel: "alternate",
      href: "https://primastella.ee/voldikud",
      hreflang: "x-default",
    },
  ],
});

const { t } = useLocale();

const galleryImages = [
  {
    src: "/images/naidis_voldikud.jpg",
    alt: "voldikud",
  },
];
</script>
