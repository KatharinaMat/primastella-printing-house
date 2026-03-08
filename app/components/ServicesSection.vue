<template>
  <section id="services" class="services-section">
    <div class="services-container">
      <h2 class="services-title">
        {{ t("services.title") }}
      </h2>

      <div class="services-grid">
        <a
          v-for="item in services"
          :key="item.key"
          :href="item.href"
          class="service-card"
        >
          <span
            class="service-icon"
            aria-hidden="true"
            v-html="item.icon"
          ></span>

          <h3 class="service-title">
            {{ t(`services.items.${item.key}.title`) }}
          </h3>

          <p class="service-description">
            {{ t(`services.items.${item.key}.description`) }}
          </p>
        </a>
      </div>
    </div>
  </section>
</template>

<script setup>
const { t } = useLocale();

const services = [
  {
    key: "forms",
    href: "#",
    icon: `
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
        <rect x="9" y="9" width="13" height="13" rx="2"></rect>
        <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
      </svg>
    `,
  },
  {
    key: "businessCards",
    href: "#",
    icon: `
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
        <rect x="1.5" y="4" width="21" height="16" rx="2"></rect>
        <circle cx="8.5" cy="11" r="2.2"></circle>
        <path d="M14 9h5M14 13h5"></path>
      </svg>
    `,
  },
  {
    key: "flyers",
    href: "#",
    icon: `
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
        <path d="M14 2v6h6"></path>
        <path d="M8 13h8M8 17h8"></path>
      </svg>
    `,
  },
  {
    key: "brochures",
    href: "#",
    icon: `
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
        <path d="M21 6v13a2 2 0 0 1-2 2H13a4 4 0 0 0-4-4H5a2 2 0 0 1-2-2V6"></path>
        <path d="M3 6a2 2 0 0 1 2-2h7a4 4 0 0 1 4 4v11"></path>
      </svg>
    `,
  },
  {
    key: "stickers",
    href: "#",
    icon: `
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
        <path d="M21 15V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v13l4-3h11a2 2 0 0 0 2-2z"></path>
      </svg>
    `,
  },
  {
    key: "calendars",
    href: "#",
    icon: `
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
        <rect x="3" y="4" width="18" height="18" rx="2"></rect>
        <path d="M16 2v4M8 2v4M3 10h18"></path>
      </svg>
    `,
  },
  {
    key: "posters",
    href: "#",
    icon: `
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2"></rect>
        <path d="M21 15l-5-5-7 7"></path>
        <circle cx="8.5" cy="8.5" r="1.5"></circle>
      </svg>
    `,
  },
  {
    key: "envelopes",
    href: "#",
    icon: `
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
        <path d="M4 4h16v16H4z"></path>
        <path d="M22 6l-10 7L2 6"></path>
      </svg>
    `,
  },
];
</script>
