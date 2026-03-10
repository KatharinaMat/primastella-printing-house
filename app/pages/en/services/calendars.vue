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
    "Calendars – Primastella printing house in Tallinn | Wall calendars and promotional calendars",

  description:
    "Primastella printing house in Tallinn produces high-quality wall calendars including single-piece, three-piece and advertising strip calendars. Designs can be customized to match your company brand.",

  ogTitle: "Calendars – Primastella printing house in Tallinn",

  ogDescription:
    "Wall calendars in various formats including three-piece and promotional strip calendars. Design and printing services.",

  ogType: "website",
  ogUrl: "https://primastella.ee/en/calendars",

  ogLocale: "en_US",
});

useHead({
  link: [
    { rel: "canonical", href: "https://primastella.ee/en/calendars" },
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
