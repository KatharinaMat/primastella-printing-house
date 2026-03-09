<template>
  <section class="section-hero">
    <div class="section-hero-inner">
      <div class="section-hero-brand">
        <NuxtLink
          :to="homePath"
          class="brand-link"
          aria-label="Primastella home"
        >
          <PrimastellaTitle />
        </NuxtLink>
      </div>

      <div class="section-hero-controls">
        <div class="lang-switch">
          <button
            type="button"
            :class="{ active: locale === 'et' }"
            @click="changeLocale('et')"
          >
            ET
          </button>
          <button
            type="button"
            :class="{ active: locale === 'en' }"
            @click="changeLocale('en')"
          >
            EN
          </button>
        </div>

        <nav class="section-hero-nav" aria-label="Main navigation">
          <NuxtLink :to="homePath">
            {{ t("nav.home") }}
          </NuxtLink>

          <div class="services-menu" ref="servicesMenuRef">
            <button
              type="button"
              class="services-toggle"
              :aria-expanded="servicesOpen ? 'true' : 'false'"
              aria-controls="services-accordion"
              @click="toggleServices"
            >
              <span class="services-label">
                {{ t("nav.services") }}
              </span>
              <span
                class="services-arrow"
                :class="{ open: servicesOpen }"
                aria-hidden="true"
              >
                ▾
              </span>
            </button>

            <div
              v-if="servicesOpen"
              id="services-accordion"
              class="services-accordion"
            >
              <NuxtLink
                :to="servicesSectionPath"
                class="services-all-link"
                @click="servicesOpen = false"
              >
                {{ locale === "et" ? "KÕIK TEENUSED" : "ALL SERVICES" }}
              </NuxtLink>

              <NuxtLink
                v-for="item in services"
                :key="item.key"
                :to="getServicePath(item)"
                @click="servicesOpen = false"
              >
                {{ t(`services.items.${item.key}.title`) }}
              </NuxtLink>
            </div>
          </div>

          <NuxtLink :to="contactPath">
            {{ t("nav.contact") }}
          </NuxtLink>
        </nav>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed, ref, onMounted, onBeforeUnmount } from "vue";
import PrimastellaTitle from "~/components/PrimastellaTitle.vue";
import { services } from "~/data/services";

const { t, locale, setLocale } = useLocale();
const servicesOpen = ref(false);
const servicesMenuRef = ref(null);

const homePath = computed(() => {
  return locale.value === "en" ? "/en" : "/";
});

const contactPath = computed(() => {
  return locale.value === "en" ? "/en#contact" : "/#contact";
});

const servicesSectionPath = computed(() => {
  return locale.value === "en" ? "/en#services" : "/#services";
});

function getServicePath(item) {
  return locale.value === "en" ? item.pathEn : item.pathEt;
}

function toggleServices() {
  servicesOpen.value = !servicesOpen.value;
}

function handleClickOutside(event) {
  if (servicesMenuRef.value && !servicesMenuRef.value.contains(event.target)) {
    servicesOpen.value = false;
  }
}

onMounted(() => {
  document.addEventListener("click", handleClickOutside);
});

onBeforeUnmount(() => {
  document.removeEventListener("click", handleClickOutside);
});

function changeLocale(lang) {
  setLocale(lang);

  if (process.client) {
    sessionStorage.setItem("primastella-locale", lang);

    const currentPath = window.location.pathname;
    const currentHash = window.location.hash;

    const matchedService = services.find((item) => {
      return currentPath === item.pathEt || currentPath === item.pathEn;
    });

    if (matchedService) {
      const targetPath =
        lang === "en" ? matchedService.pathEn : matchedService.pathEt;
      window.location.href = targetPath;
      return;
    }

    if (currentHash === "#services") {
      window.location.href = lang === "en" ? "/en#services" : "/#services";
      return;
    }

    if (currentHash === "#contact") {
      window.location.href = lang === "en" ? "/en#contact" : "/#contact";
      return;
    }

    const isEnglishHome = currentPath === "/en";
    const isEstonianHome = currentPath === "/";

    if (isEnglishHome || isEstonianHome) {
      window.location.href = lang === "en" ? "/en" : "/";
      return;
    }

    window.location.href = lang === "en" ? "/en" : "/";
  }
}
</script>
