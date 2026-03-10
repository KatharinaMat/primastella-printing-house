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
    "Plakatid ja laiformaattrükk – Primastella trükikoda Tallinnas | Kujundus ja tootmine",

  description:
    "Primastella trükikoda Tallinnas trükib plakateid ja laiformaadis trükiseid nii sise- kui välitingimustesse. Lai valik materjale, viimistlusi ja mõõte alates A4-st kuni A0 ja erimõõtudeni.",

  ogTitle: "Plakatid ja laiformaattrükk – Primastella trükikoda Tallinnas",

  ogDescription:
    "Plakatid A3–A0 ja erimõõtudes, siseruumidesse ja välitingimustesse. Lamineerimine, UV-tindid ja kvaliteetne laiformaattrükk.",

  ogType: "website",
  ogUrl: "https://primastella.ee/plakatid",

  ogLocale: "et_EE",
});

useHead({
  link: [
    { rel: "canonical", href: "https://primastella.ee/plakatid" },
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
