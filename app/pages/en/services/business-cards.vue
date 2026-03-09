<template>
  <div>
    <ServicesHero />

    <main class="service-page">
      <section class="service-content">
        <div class="service-text">
          <h1>{{ t("servicePages.businessCards.title") }}</h1>

          <p>{{ t("servicePages.businessCards.intro") }}</p>
          <p>{{ t("servicePages.businessCards.text1") }}</p>
          <p>{{ t("servicePages.businessCards.text2") }}</p>
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
