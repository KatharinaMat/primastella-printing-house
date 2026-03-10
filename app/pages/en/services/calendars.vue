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
