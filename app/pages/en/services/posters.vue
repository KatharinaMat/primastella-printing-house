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
useSeoMeta({
  title:
    "Posters and large-format printing – Primastella printing house in Tallinn",

  description:
    "Primastella printing house in Tallinn prints posters and large-format materials for indoor and outdoor use. Wide range of materials, finishes and sizes from A4 to A0 and custom dimensions.",

  ogTitle:
    "Posters and large-format printing – Primastella printing house in Tallinn",

  ogDescription:
    "Posters from A3 to A0 and custom sizes. Indoor and outdoor printing, lamination and UV inks for durable large-format prints.",

  ogType: "website",
  ogUrl: "https://primastella.ee/en/posters",

  ogLocale: "en_US",
});

useHead({
  link: [
    { rel: "canonical", href: "https://primastella.ee/en/posters" },
    {
      rel: "alternate",
      href: "https://primastella.ee/plakatid",
      hreflang: "et",
    },
    {
      rel: "alternate",
      href: "https://primastella.ee/en/posters",
      hreflang: "en",
    },
    {
      rel: "alternate",
      href: "https://primastella.ee/plakatid",
      hreflang: "x-default",
    },
  ],
});

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
