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
