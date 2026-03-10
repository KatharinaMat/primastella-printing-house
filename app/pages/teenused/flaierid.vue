<template>
  <div>
    <ServicesHero />

    <main class="service-page">
      <section class="service-content">
        <div class="service-text">
          <h1>{{ t("servicePages.flyers.title") }}</h1>

          <p v-html="t('servicePages.flyers.intro')"></p>
          <p v-html="t('servicePages.flyers.text1')"></p>
          <p v-html="t('servicePages.flyers.text2')"></p>
          <p v-html="t('servicePages.flyers.text3')"></p>
        </div>

        <ServiceGallery :images="galleryImages" mode="poster" />
      </section>
    </main>

    <Footer />
  </div>
</template>

<script setup>
useSeoMeta({
  title: "Flaierid – Primastella trükikoda Tallinnas | Kujundus ja trükk",

  description:
    "Primastella trükikoda Tallinnas trükib kvaliteetseid flaierid ja reklaamlehti läikivale või matile kriitpaberile paksusega 100–170 gsm. Kiire ja professionaalne teenus.",

  ogTitle: "Flaierid – Primastella trükikoda Tallinnas",

  ogDescription:
    "Flaierite kujundus ja trükk: läikiv või matt kriitpaber 100–170 gsm. Kiire teostus.",

  ogType: "website",
  ogUrl: "https://primastella.ee/flaierid",

  ogLocale: "et_EE",
});

useHead({
  link: [
    { rel: "canonical", href: "https://primastella.ee/flaierid" },
    {
      rel: "alternate",
      href: "https://primastella.ee/flaierid",
      hreflang: "et",
    },
    {
      rel: "alternate",
      href: "https://primastella.ee/en/flyers",
      hreflang: "en",
    },
    {
      rel: "alternate",
      href: "https://primastella.ee/flaierid",
      hreflang: "x-default",
    },
  ],
});

const { t } = useLocale();

const galleryImages = [
  {
    src: "/images/naidis_flaier.jpg",
    alt: "Flaier 1",
  },
  {
    src: "/images/naidis_flaier_2.jpg",
    alt: "Flaier 2",
  },
];
</script>
