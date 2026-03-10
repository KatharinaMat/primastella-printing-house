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
useSeoMeta({
  title:
    "Stickers – Primastella printing house in Tallinn | Paper and PVC stickers",

  description:
    "Primastella printing house in Tallinn produces high-quality paper and PVC stickers for indoor and outdoor use. Available in A3 and large-format printing.",

  ogTitle: "Stickers – Primastella printing house in Tallinn",

  ogDescription:
    "Paper and PVC stickers for indoor and outdoor use. A3 and large-format printing with fast turnaround.",

  ogType: "website",
  ogUrl: "https://primastella.ee/en/stickers",

  ogLocale: "en_US",
});

useHead({
  link: [
    { rel: "canonical", href: "https://primastella.ee/en/stickers" },
    {
      rel: "alternate",
      href: "https://primastella.ee/kleebised",
      hreflang: "et",
    },
    {
      rel: "alternate",
      href: "https://primastella.ee/en/stickers",
      hreflang: "en",
    },
    {
      rel: "alternate",
      href: "https://primastella.ee/kleebised",
      hreflang: "x-default",
    },
  ],
});

const { t } = useLocale();

const galleryImages = [
  {
    src: "/images/naidis_kleebised.jpg",
    alt: "Flaier 1",
  },
];
</script>
