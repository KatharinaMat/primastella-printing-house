<template>
  <NuxtPage />
</template>

<script setup>
useSeoMeta({
  ogImage: "https://primastella.ee/images/og-primastella.webp",
  ogImageWidth: "1200",
  ogImageHeight: "630",

  ogSiteName: "Primastella",

  twitterCard: "summary_large_image",
  twitterImage: "https://primastella.ee/images/og-primastella.webp",
});

useHead({
  link: [
    { rel: "preconnect", href: "https://fonts.googleapis.com" },
    { rel: "preconnect", href: "https://fonts.gstatic.com", crossorigin: "" },
    {
      rel: "stylesheet",
      href: "https://fonts.googleapis.com/css2?family=Monoton&family=Dancing+Script:wght@400&family=Playfair+Display:ital@1&display=swap",
    },
  ],
});
</script>
