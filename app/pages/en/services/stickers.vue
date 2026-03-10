<template>
  <div>
    <ServicesHero />

    <main class="service-page">
      <section class="service-content">
        <div class="service-text">
          <h1>{{ t("servicePages.stickers.title") }}</h1>

          <p v-html="t('servicePages.stickers.intro')"></p>
          <p v-html="t('servicePages.stickers.text1')"></p>
          <p v-html="t('servicePages.stickers.text2')"></p>
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
    src: "/images/naidis_kleebised.jpg",
    alt: "Flaier 1",
  },
];
</script>
