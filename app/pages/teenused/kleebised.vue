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
    "Kleebised – Primastella trükikoda Tallinnas | Paber- ja PVC-kleebised",

  description:
    "Primastella trükikoda Tallinnas valmistab kvaliteetseid paber- ja PVC-kleebiseid. Sobivad sise- ja välitingimustesse ning saadaval A3 ja laiformaadis trükis.",

  ogTitle: "Kleebised – Primastella trükikoda Tallinnas",

  ogDescription:
    "Paber- ja PVC-kleebised sise- ja välitingimustesse. A3 ning laiformaadis trükk kiire teostusega.",

  ogType: "website",
  ogUrl: "https://primastella.ee/kleebised",

  ogLocale: "et_EE",
});

useHead({
  link: [
    { rel: "canonical", href: "https://primastella.ee/kleebised" },
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
