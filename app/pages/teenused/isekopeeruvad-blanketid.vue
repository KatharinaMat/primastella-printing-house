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
useSeoMeta({
  title:
    "Isekopeeruvad blanketid – Primastella trükikoda Tallinnas | Trükk ja kujundus",

  description:
    "Primastella trükikoda Tallinnas trükib kvaliteetseid isekopeeruvaid blankette formaatides A6, A65, A5 ja A4. Võimalik numereerimine ning 2–4-leheküljelised komplektid.",

  ogTitle: "Isekopeeruvad blanketid – Primastella trükikoda Tallinnas",

  ogDescription:
    "Isekopeeruvad blanketid formaatides A6, A65, A5 ja A4. Võimalik numereerimine ja 2–4-leheküljelised komplektid.",

  ogType: "website",
  ogUrl: "https://primastella.ee/isekopeeruvad-blanketid",

  ogLocale: "et_EE",
});

useHead({
  link: [
    {
      rel: "canonical",
      href: "https://primastella.ee/isekopeeruvad-blanketid",
    },
    {
      rel: "alternate",
      href: "https://primastella.ee/isekopeeruvad-blanketid",
      hreflang: "et",
    },
    {
      rel: "alternate",
      href: "https://primastella.ee/en/ncr-forms",
      hreflang: "en",
    },
    {
      rel: "alternate",
      href: "https://primastella.ee/isekopeeruvad-blanketid",
      hreflang: "x-default",
    },
  ],
});

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
