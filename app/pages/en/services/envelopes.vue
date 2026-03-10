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
useSeoMeta({
  title:
    "Envelopes – Primastella printing house in Tallinn | Design and printing",

  description:
    "Primastella printing house in Tallinn prints high-quality envelopes with your company logo and contact details. Available in C65, C5 and C4 sizes. Minimum order 100 pieces.",

  ogTitle: "Envelopes – Primastella printing house in Tallinn",

  ogDescription:
    "Custom printed envelopes with logo: C65, C5 and C4 sizes. Minimum order 100 pieces with fast turnaround.",

  ogType: "website",
  ogUrl: "https://primastella.ee/en/envelopes",

  ogLocale: "en_US",
});

useHead({
  link: [
    { rel: "canonical", href: "https://primastella.ee/en/envelopes" },
    {
      rel: "alternate",
      href: "https://primastella.ee/umbrikud",
      hreflang: "et",
    },
    {
      rel: "alternate",
      href: "https://primastella.ee/en/envelopes",
      hreflang: "en",
    },
    {
      rel: "alternate",
      href: "https://primastella.ee/umbrikud",
      hreflang: "x-default",
    },
  ],
});

const { t } = useLocale();

const galleryImages = [
  {
    src: "/images/naidis_umbrik.jpg",
    alt: "Envelope 1",
  },
];
</script>
