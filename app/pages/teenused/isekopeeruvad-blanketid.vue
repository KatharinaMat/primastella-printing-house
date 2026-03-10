<template>
  <div>
    <ServicesHero />

    <main class="service-page">
      <section class="service-content">
        <div class="service-text">
          <h1>{{ t("servicePages.forms.title") }}</h1>

          <p v-html="t('servicePages.forms.intro')"></p>
          <p v-html="t('servicePages.forms.text1')"></p>
          <p v-html="t('servicePages.forms.text2')"></p>
          <p v-html="t('servicePages.forms.text3')"></p>
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
    src: "/images/isekopeeruv_1.webp",
    alt: "Isekopeeruv blankett",
  },
  {
    src: "/images/isekopeeruv_arvesaateleht.png",
    alt: "Isekopeeruv arvesaateleht",
  },
  {
    src: "/images/isekopeeruv_2.png",
    alt: "Isekopeeruv blankett 2",
  },
  {
    src: "/images/isekopeeruv_3.png",
    alt: "Isekopeeruv blankett 3",
  },
  {
    src: "/images/isikukontokaart.png",
    alt: "Isikukontokaart",
  },
];
</script>
