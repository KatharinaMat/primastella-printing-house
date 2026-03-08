<template>
  <footer id="contact" class="site-footer">
    <div class="site-footer-inner">
      <div class="site-footer-info">
        <p class="site-footer-line site-footer-contact-line">
          <button
            type="button"
            class="site-footer-inline-btn"
            @click="copyEmail"
          >
            {{ t("footer.email") }}
          </button>

          <span class="site-footer-separator"> | </span>

          <a
            class="site-footer-phone mobile-only-phone"
            :href="'tel:' + t('footer.phone').replace(/\s+/g, '')"
          >
            {{ t("footer.phone") }}
          </a>

          <span class="desktop-only-phone">
            {{ t("footer.phone") }}
          </span>

          <span v-if="copiedMessageVisible" class="site-footer-copied">
            {{ t("footer.copied") }}
          </span>
        </p>

        <p class="site-footer-line">
          <strong>{{ t("footer.open") }}</strong>
        </p>

        <p class="site-footer-line">
          {{ t("footer.address") }}
        </p>

        <p class="site-footer-line">
          {{ t("footer.entrance") }}
        </p>
      </div>

      <div class="site-footer-map">
        <div v-if="!mapConsent" class="map-consent">
          {{ t("footer.mapConsent") }}
        </div>

        <iframe
          v-else
          title="Primastella location map"
          src="https://www.google.com/maps?q=Pallasti%201%20Katusepapi%2020%2C%20Tallinn&z=15&output=embed"
          loading="lazy"
          allowfullscreen
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      <div v-if="showCookieBanner" class="cookie-banner">
        <span>{{ t("footer.cookieText") }}</span>
        <button @click="acceptCookies">{{ t("footer.cookieButton") }}</button>
      </div>
    </div>

    <p class="site-footer-copy">
      {{ t("footer.copy") }}
    </p>
  </footer>
</template>

<script setup>
const { t } = useLocale();

const mapConsent = ref(false);
const showCookieBanner = ref(false);

const copiedMessageVisible = ref(false);

async function copyEmail() {
  try {
    await navigator.clipboard.writeText(t("footer.email"));
    copiedMessageVisible.value = true;

    setTimeout(() => {
      copiedMessageVisible.value = false;
    }, 1400);
  } catch (error) {
    console.error("Failed to copy email:", error);
  }
}

onMounted(() => {
  const consent = localStorage.getItem("mapConsent");

  if (consent === "true") {
    mapConsent.value = true;
  } else {
    showCookieBanner.value = true;
  }
});

function acceptCookies() {
  localStorage.setItem("mapConsent", "true");
  mapConsent.value = true;
  showCookieBanner.value = false;
}
</script>
