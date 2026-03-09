<template>
  <div>
    <ServicesHero />

    <main class="service-page">
      <section class="service-content">
        <div class="service-text">
          <h1>{{ t("servicePages.businessCards.title") }}</h1>

          <p>{{ t("servicePages.businessCards.intro") }}</p>
          <p>{{ t("servicePages.businessCards.text1") }}</p>
          <p>{{ t("servicePages.businessCards.text2") }}</p>
        </div>

        <div class="service-gallery-placeholder" aria-hidden="true">
          Gallery placeholder
        </div>
      </section>
    </main>

    <Footer />
  </div>
</template>

<script setup>
const { t } = useLocale();
</script>
