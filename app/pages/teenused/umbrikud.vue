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
  title: "Ümbrikud – Primastella trükikoda Tallinnas | Kujundus ja trükk",

  description:
    "Primastella trükikoda Tallinnas trükib kvaliteetseid ümbrikuid teie logo ja kontaktinfoga. Saadaval C65, C5 ja C4 suurused. Minimaalne kogus 100 tk.",

  ogTitle: "Ümbrikud – Primastella trükikoda Tallinnas",

  ogDescription:
    "Kvaliteetsed ümbrikud logoga: C65, C5 ja C4 suurused. Minimaalne kogus 100 tk. Kiire teostus.",

  ogType: "website",
  ogUrl: "https://primastella.ee/umbrikud",

  ogLocale: "et_EE",
});

useHead({
  link: [
    { rel: "canonical", href: "https://primastella.ee/umbrikud" },
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
