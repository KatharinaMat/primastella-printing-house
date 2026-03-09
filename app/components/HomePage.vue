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
          @click="goToEt"
        >
          ET
        </button>
        <button
          type="button"
          :class="{ active: locale === 'en' }"
          @click="goToEn"
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

  <section
    id="about"
    ref="aboutSection"
    class="about-printing"
    :class="{ 'is-visible': aboutVisible }"
    aria-labelledby="about-printing-title"
  >
    <div class="about-printing-inner">
      <p id="about-printing-title" class="about-printing-intro reveal reveal-1">
        {{ t("about.intro") }}
      </p>

      <p class="about-printing-text reveal reveal-2">
        {{ t("about.text1") }}
      </p>

      <p class="about-printing-text reveal reveal-3">
        {{ t("about.text2") }}
      </p>
    </div>
  </section>

  <ServicesSection />
  <ContactSection />
  <Footer />
</template>

<script setup>
const { t, locale } = useLocale();
const router = useRouter();

const aboutSection = ref(null);
const aboutVisible = ref(false);

const goToEt = () => {
  router.push("/");
};

const goToEn = () => {
  router.push("/en");
};

let observer;

onMounted(() => {
  observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        aboutVisible.value = true;
        observer.disconnect();
      }
    },
    { threshold: 0.2 },
  );

  if (aboutSection.value) {
    observer.observe(aboutSection.value);
  }
});

onBeforeUnmount(() => {
  if (observer) {
    observer.disconnect();
  }
});
</script>
