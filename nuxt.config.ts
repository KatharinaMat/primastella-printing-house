// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  css: ["~/assets/css/main.css"],

  app: {
    head: {
      link: [
        {
          rel: "icon",
          type: "image/x-icon",
          href: "/images/primastella_favicon.ico",
        },
      ],
    },
  },
});
