<template>
  <div>
    <ServicesHero />

    <main class="service-page">
      <section class="service-content">
        <div class="service-text">
          <h1>{{ t("servicePages.brochures.title") }}</h1>

          <p v-html="t('servicePages.brochures.intro')"></p>
          <p v-html="t('servicePages.brochures.text1')"></p>
          <p v-html="t('servicePages.brochures.text2')"></p>
        </div>
        <ServiceGallery :images="galleryImages" />
      </section>
    </main>

    <Footer />
  </div>
</template>

<script setup>
useSeoMeta({
  title: "Voldikud – Primastella trükikoda Tallinnas | Kujundus ja trükk",

  description:
    "Primastella trükikoda Tallinnas valmistab voldikuid erinevas formaadis ja paberi paksuses. Pakume voltimist, lamineerimist ja kvaliteetset trükki läikivale või matile paberile.",

  ogTitle: "Voldikud – Primastella trükikoda Tallinnas",

  ogDescription:
    "Voldikud erinevates formaatides ja paberitel. Voltimine, lamineerimine ja kvaliteetne trükk kiire teostusega.",

  ogType: "website",
  ogUrl: "https://primastella.ee/voldikud",

  ogLocale: "et_EE",
});

useHead({
  link: [
    { rel: "canonical", href: "https://primastella.ee/voldikud" },
    {
      rel: "alternate",
      href: "https://primastella.ee/voldikud",
      hreflang: "et",
    },
    {
      rel: "alternate",
      href: "https://primastella.ee/en/brochures",
      hreflang: "en",
    },
    {
      rel: "alternate",
      href: "https://primastella.ee/voldikud",
      hreflang: "x-default",
    },
  ],
});

const { t } = useLocale();

const galleryImages = [
  {
    src: "/images/naidis_voldikud.jpg",
    alt: "voldikud",
  },
];
</script>
