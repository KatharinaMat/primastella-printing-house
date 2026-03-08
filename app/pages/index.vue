<template>
  <section class="hero">
    <div class="hero-top">
      <nav class="hero-nav">
        <a href="#about">{{ t("nav.about") }}</a>
        <a href="#services">{{ t("nav.services") }}</a>
        <a href="#contact">{{ t("nav.contact") }}</a>
      </nav>

      <div class="lang-switch">
        <button @click="setLocale('et')">ET</button>
        <button @click="setLocale('en')">EN</button>
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
</script>
