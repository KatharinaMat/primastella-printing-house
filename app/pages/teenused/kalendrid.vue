<template>
  <div>
    <ServicesHero />

    <main class="service-page">
      <section class="service-content">
        <div class="service-text">
          <h1>{{ t("servicePages.calendars.title") }}</h1>

          <p v-html="t('servicePages.calendars.intro')"></p>
          <p v-html="t('servicePages.calendars.text1')"></p>
          <p v-html="t('servicePages.calendars.text2')"></p>
          <p v-html="t('servicePages.calendars.text3')"></p>
        </div>

        <ServiceGallery :images="galleryImages" mode="contain" />
      </section>
    </main>

    <Footer />
  </div>
</template>

<script setup>
useSeoMeta({
  title:
    "Kalendrid – Primastella trükikoda Tallinnas | Seinakalendrid ja reklaamkalendrid",

  description:
    "Primastella trükikoda Tallinnas valmistab kvaliteetseid seinakalendreid – üheosaline, kolmeosaline ja reklaamribaga kalender. Kujundame kalendrid vastavalt teie ettevõtte brändile.",

  ogTitle: "Kalendrid – Primastella trükikoda Tallinnas",

  ogDescription:
    "Seinakalendrid erinevates formaatides, sh kolmeosaline ja reklaamribaga lahendused. Kujundus ja trükk.",

  ogType: "website",
  ogUrl: "https://primastella.ee/kalendrid",

  ogLocale: "et_EE",
});

useHead({
  link: [
    { rel: "canonical", href: "https://primastella.ee/kalendrid" },
    {
      rel: "alternate",
      href: "https://primastella.ee/kalendrid",
      hreflang: "et",
    },
    {
      rel: "alternate",
      href: "https://primastella.ee/en/calendars",
      hreflang: "en",
    },
    {
      rel: "alternate",
      href: "https://primastella.ee/kalendrid",
      hreflang: "x-default",
    },
  ],
});

const { t } = useLocale();

const galleryImages = [
  {
    src: "/images/naidis_kalendrid.jpg",
    alt: "Kalender 1",
  },
  {
    src: "/images/combined_wall_calendars.jpg",
    alt: "Kalender 2",
  },
];
</script>
