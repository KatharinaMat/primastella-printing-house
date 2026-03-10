<template>
  <div>
    <ServicesHero />

    <main class="service-page">
      <section class="service-content">
        <div class="service-text">
          <h1>{{ t("servicePages.envelopes.title") }}</h1>

          <p>{{ t("servicePages.envelopes.intro") }}</p>
          <p>{{ t("servicePages.envelopes.text1") }}</p>
          <p>{{ t("servicePages.envelopes.text2") }}</p>
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
    src: "/images/naidis_umbrik.jpg",
    alt: "Envelope 1",
  },
];
</script>
