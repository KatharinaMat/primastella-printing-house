<template>
  <div>
    <ServicesHero />

    <main class="service-page">
      <section class="service-content">
        <div class="service-text">
          <h1>{{ t("servicePages.posters.title") }}</h1>

          <p v-html="t('servicePages.posters.intro')"></p>
          <p v-html="t('servicePages.posters.text1')"></p>
          <p v-html="t('servicePages.posters.text2')"></p>
          <p v-html="t('servicePages.posters.text3')"></p>
          <p v-html="t('servicePages.posters.text4')"></p>
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
    src: "/images/naidis_plakatid.jpg",
    alt: "Poster 1",
  },
  {
    src: "/images/naidis_plakatid_2.jpg",
    alt: "Poster 2",
  },
  {
    src: "/images/naidis_plakatid_3.jpg",
    alt: "Poster 3",
  },
  {
    src: "/images/naidis_plakatid_4.jpg",
    alt: "Poster 4",
  },
  {
    src: "/images/naidis_plakatid_5.jpg",
    alt: "Poster 5",
  },
];
</script>
