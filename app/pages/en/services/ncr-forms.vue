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
    "NCR forms – Primastella printing house in Tallinn | Printing and design",

  description:
    "Primastella printing house in Tallinn produces high-quality NCR forms in A6, A65, A5 and A4 formats. Numbering available and sets of 2–4 sheets.",

  ogTitle: "NCR forms – Primastella printing house in Tallinn",

  ogDescription:
    "NCR (carbonless) forms in A6, A65, A5 and A4 formats. Numbering and 2–4 sheet sets available.",

  ogType: "website",
  ogUrl: "https://primastella.ee/en/ncr-forms",

  ogLocale: "en_US",
});

useHead({
  link: [
    { rel: "canonical", href: "https://primastella.ee/en/ncr-forms" },
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
    src: "/images/isekopeeruv arvesaateleht.png",
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
