<template>
  <section id="contact" class="contact-section">
    <div class="contact-container">
      <h2 class="contact-title">
        {{ t("contact.title") }}
      </h2>

      <form
        class="contact-form"
        @submit.prevent="handleSubmit"
        action="https://formspree.io/f/xzzkeyrr"
        method="POST"
        novalidate
      >
        <!-- Name -->
        <label for="name" class="visually-hidden">
          {{ t("contact.name") }}
        </label>

        <input
          id="name"
          name="name"
          type="text"
          :placeholder="t('contact.name')"
          autocomplete="name"
          required
          v-model="form.name"
          :class="{ 'input-error': statusMessage && !form.name.trim() }"
        />

        <!-- Email -->
        <label for="email" class="visually-hidden">
          {{ t("contact.email") }}
        </label>

        <input
          id="email"
          name="email"
          type="email"
          :placeholder="t('contact.email')"
          autocomplete="email"
          required
          v-model="form.email"
          :class="{ 'input-error': statusMessage && !form.email.trim() }"
        />>

        <!-- Message -->
        <label for="message" class="visually-hidden">
          {{ t("contact.message") }}
        </label>
        <textarea
          id="message"
          name="message"
          :placeholder="t('contact.message')"
          required
          v-model="form.message"
          :class="{ 'input-error': statusMessage && !form.message.trim() }"
        ></textarea>

        <!-- hidden subject -->
        <input
          type="hidden"
          name="_subject"
          value="Uus kontaktivorm: primastella.ee"
        />

        <!-- honeypot spam trap -->
        <input
          type="text"
          name="_gotcha"
          tabindex="-1"
          autocomplete="off"
          style="display: none"
        />

        <button type="submit">
          {{ t("contact.send") }}
        </button>

        <p class="form-status" role="status" aria-live="polite">
          {{ statusMessage }}
        </p>
      </form>
    </div>
  </section>
</template>

<script setup>
const { t } = useLocale();

const form = reactive({
  name: "",
  email: "",
  message: "",
});

const statusMessage = ref("");

async function handleSubmit(e) {
  const name = form.name.trim();
  const email = form.email.trim();
  const message = form.message.trim();

  if (!name || !email || !message) {
    statusMessage.value = t("contact.required");
    return;
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailPattern.test(email)) {
    statusMessage.value = t("contact.invalidEmail");
    return;
  }

  statusMessage.value = t("contact.sending");

  const formData = new FormData(e.target);
  formData.set("name", name);
  formData.set("email", email);
  formData.set("message", message);

  try {
    const res = await fetch(e.target.action, {
      method: "POST",
      body: formData,
      headers: {
        Accept: "application/json",
      },
    });

    if (res.ok) {
      statusMessage.value = t("contact.success");

      form.name = "";
      form.email = "";
      form.message = "";
    } else {
      statusMessage.value = t("contact.error");
    }
  } catch {
    statusMessage.value = t("contact.error");
  }
}
</script>
