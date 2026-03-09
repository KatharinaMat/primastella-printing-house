<template>
  <section id="services" class="services-section">
    <div class="services-container">
      <h2 class="services-title">
        {{ t("services.title") }}
      </h2>

      <div class="services-grid">
        <NuxtLink
          v-for="item in servicesWithIcons"
          :key="item.key"
          :to="getServicePath(item)"
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
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed } from "vue";
import { services } from "~/data/services";

const { t, locale } = useLocale();

const serviceIcons = {
  forms: `
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
    </svg>
  `,
  businessCards: `
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
      <rect x="1.5" y="4" width="21" height="16" rx="2"></rect>
      <circle cx="8.5" cy="11" r="2.2"></circle>
      <path d="M14 9h5M14 13h5"></path>
    </svg>
  `,
  flyers: `
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
      <path d="M14 2v6h6"></path>
      <path d="M8 13h8M8 17h8"></path>
    </svg>
  `,
  brochures: `
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
      <path d="M21 6v13a2 2 0 0 1-2 2H13a4 4 0 0 0-4-4H5a2 2 0 0 1-2-2V6"></path>
      <path d="M3 6a2 2 0 0 1 2-2h7a4 4 0 0 1 4 4v11"></path>
    </svg>
  `,
  stickers: `
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
      <path d="M21 15V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v13l4-3h11a2 2 0 0 0 2-2z"></path>
    </svg>
  `,
  calendars: `
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
      <rect x="3" y="4" width="18" height="18" rx="2"></rect>
      <path d="M16 2v4M8 2v4M3 10h18"></path>
    </svg>
  `,
  posters: `
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
      <rect x="3" y="3" width="18" height="18" rx="2"></rect>
      <path d="M21 15l-5-5-7 7"></path>
      <circle cx="8.5" cy="8.5" r="1.5"></circle>
    </svg>
  `,
  envelopes: `
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
      <path d="M4 4h16v16H4z"></path>
      <path d="M22 6l-10 7L2 6"></path>
    </svg>
  `,
};

const servicesWithIcons = computed(() =>
  services.map((item) => ({
    ...item,
    icon: serviceIcons[item.key] || "",
  })),
);

function getServicePath(item) {
  return locale.value === "en" ? item.pathEn : item.pathEt;
}
</script>
