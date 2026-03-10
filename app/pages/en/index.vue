<template>
  <HomePage />
</template>
<script setup>
useSeoMeta({
  title:
    "Primastella printing house in Tallinn – NCR forms, business cards, flyers, stickers",

  description:
    "Primastella printing house in Tallinn offers high-quality printing of NCR forms, business cards, flyers, stickers and calendars. Fast and reliable service.",

  ogTitle: "Primastella printing house – quality printing services in Tallinn",

  ogDescription:
    "Business cards, flyers, NCR forms, stickers, calendars and more. Fast and reliable service.",

  ogType: "website",
  ogUrl: "https://primastella.ee/en/",
  ogImage: "https://primastella.ee/images/og-primastella.webp",

  ogImageWidth: "1200",
  ogImageHeight: "630",

  ogSiteName: "Primastella",

  twitterCard: "summary_large_image",
  twitterImage: "https://primastella.ee/images/og-primastella.webp",

  ogLocale: "en_US",
});

useHead({
  link: [
    { rel: "canonical", href: "https://primastella.ee/en/" },
    { rel: "alternate", href: "https://primastella.ee/", hreflang: "et" },
    { rel: "alternate", href: "https://primastella.ee/en/", hreflang: "en" },
    {
      rel: "alternate",
      href: "https://primastella.ee/",
      hreflang: "x-default",
    },
  ],
});
</script>
