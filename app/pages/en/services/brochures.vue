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
const { t } = useLocale();

const galleryImages = [
  {
    src: "/images/naidis_voldikud.jpg",
    alt: "voldikud",
  },
];
</script>
