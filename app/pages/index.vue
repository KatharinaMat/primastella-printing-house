<template>
  <HomePage />
</template>

<script setup>
useSeoMeta({
  title:
    "Primastella trükikoda Tallinnas – isekopeeruvad blanketid, visiitkaardid, flaierid, kleebised",

  description:
    "Primastella trükikoda Tallinnas pakub kvaliteetsete isekopeeruvate blankettide, visiitkaartide, flaierite, kleebiste ja kalendrite trükki. Kiire ja usaldusväärne teenus.",

  ogTitle: "Primastella trükikoda – kvaliteetsed trükiteenused Tallinnas",

  ogDescription:
    "Visiitkaardid, flaierid, isekopeeruvad blanketid, kleebised, kalendrid jpm. Kiire ja usaldusväärne teenus.",

  ogType: "website",
  ogUrl: "https://primastella.ee/",
  ogImage: "https://primastella.ee/images/og-primastella.webp",

  ogImageWidth: "1200",
  ogImageHeight: "630",

  ogSiteName: "Primastella",

  twitterCard: "summary_large_image",
  twitterImage: "https://primastella.ee/images/og-primastella.webp",

  ogLocale: "et_EE",
});

useHead({
  link: [
    { rel: "canonical", href: "https://primastella.ee/" },
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
