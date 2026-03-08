<template>
  <section class="hero">
    <div class="hero-top">
      <nav class="hero-nav">
        <a href="#about">{{ t("nav.about") }}</a>
        <a href="#services">{{ t("nav.services") }}</a>
        <a href="#contact">{{ t("nav.contact") }}</a>
      </nav>

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
    </div>

    <div class="hero-content">
      <PrimastellaTitle />
      <p class="hero-subtitle">
        {{ t("hero.subtitle") }}
      </p>
      <p class="hero-anno">...anno 1999</p>
    </div>
  </section>
</template>
<script setup>
const { t, setLocale, locale } = useLocale();

const changeLocale = (newLocale) => {
  setLocale(newLocale);
  sessionStorage.setItem("locale", newLocale);
};

onMounted(() => {
  const savedLocale = sessionStorage.getItem("locale");
  if (savedLocale) {
    setLocale(savedLocale);
  }
});
</script>
