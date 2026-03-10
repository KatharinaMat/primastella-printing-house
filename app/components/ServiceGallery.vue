<template>
  <div
    class="service-gallery"
    @mouseenter="pauseAutoplay"
    @mouseleave="resumeAutoplay"
    @touchstart="onTouchStart"
    @touchend="onTouchEnd"
  >
    <div
      class="service-gallery-frame"
      :class="{
        'gallery-frame-contain': mode === 'contain',
        'gallery-frame-poster': mode === 'poster',
      }"
    >
      <transition name="gallery-fade" mode="out-in">
        <img
          :key="currentImage.src"
          :src="currentImage.src"
          :alt="currentImage.alt"
          class="service-gallery-image"
          :class="{
            'gallery-image-contain': mode === 'contain',
            'gallery-image-poster': mode === 'poster',
            'gallery-image-clickable': true,
          }"
          @click="openModal"
        />
      </transition>

      <button
        type="button"
        class="gallery-arrow gallery-arrow-left"
        aria-label="Previous image"
        @click="prevSlide"
      >
        ‹
      </button>

      <button
        type="button"
        class="gallery-arrow gallery-arrow-right"
        aria-label="Next image"
        @click="nextSlide"
      >
        ›
      </button>
    </div>

    <div class="gallery-dots" aria-label="Gallery navigation">
      <button
        v-for="(image, index) in images"
        :key="image.src"
        type="button"
        class="gallery-dot"
        :class="{ active: index === currentIndex }"
        :aria-label="`Go to image ${index + 1}`"
        @click="goToSlide(index)"
      ></button>
    </div>

    <transition name="modal-fade">
      <div
        v-if="isModalOpen"
        class="gallery-modal"
        role="dialog"
        aria-modal="true"
        :aria-label="currentImage.alt || 'Enlarged gallery image'"
        @click.self="closeModal"
      >
        <button
          type="button"
          class="gallery-modal-close"
          aria-label="Close enlarged image"
          @click="closeModal"
        >
          ×
        </button>

        <button
          v-if="images.length > 1"
          type="button"
          class="gallery-modal-arrow gallery-modal-arrow-left"
          aria-label="Previous image"
          @click.stop="prevSlide"
        >
          ‹
        </button>

        <div class="gallery-modal-content">
          <img
            :src="currentImage.src"
            :alt="currentImage.alt"
            class="gallery-modal-image"
          />
        </div>

        <button
          v-if="images.length > 1"
          type="button"
          class="gallery-modal-arrow gallery-modal-arrow-right"
          aria-label="Next image"
          @click.stop="nextSlide"
        >
          ›
        </button>
      </div>
    </transition>
  </div>
</template>

<script setup>
import { computed, onBeforeUnmount, onMounted, ref, watch } from "vue";

const props = defineProps({
  images: {
    type: Array,
    required: true,
  },
  intervalMs: {
    type: Number,
    default: 5000,
  },
  mode: {
    type: String,
    default: "cover",
  },
});

const currentIndex = ref(0);
const isPaused = ref(false);
const isModalOpen = ref(false);
const touchStartX = ref(0);
let autoplayTimer = null;

const currentImage = computed(() => {
  return props.images[currentIndex.value] || { src: "", alt: "" };
});

function nextSlide() {
  if (!props.images.length) return;
  currentIndex.value = (currentIndex.value + 1) % props.images.length;
}

function prevSlide() {
  if (!props.images.length) return;
  currentIndex.value =
    (currentIndex.value - 1 + props.images.length) % props.images.length;
}

function goToSlide(index) {
  currentIndex.value = index;
}

function startAutoplay() {
  stopAutoplay();

  if (props.images.length <= 1 || isPaused.value || isModalOpen.value) return;

  autoplayTimer = setInterval(() => {
    nextSlide();
  }, props.intervalMs);
}

function stopAutoplay() {
  if (autoplayTimer) {
    clearInterval(autoplayTimer);
    autoplayTimer = null;
  }
}

function pauseAutoplay() {
  isPaused.value = true;
  stopAutoplay();
}

function resumeAutoplay() {
  isPaused.value = false;
  startAutoplay();
}

function onTouchStart(event) {
  touchStartX.value = event.changedTouches[0].clientX;
}

function onTouchEnd(event) {
  const touchEndX = event.changedTouches[0].clientX;
  const diff = touchStartX.value - touchEndX;

  if (Math.abs(diff) < 40) return;

  if (diff > 0) {
    nextSlide();
  } else {
    prevSlide();
  }
}

function openModal() {
  isModalOpen.value = true;
  stopAutoplay();
  document.body.style.overflow = "hidden";
}

function closeModal() {
  isModalOpen.value = false;
  document.body.style.overflow = "";
  startAutoplay();
}

function handleKeydown(event) {
  if (!isModalOpen.value) return;

  if (event.key === "Escape") {
    closeModal();
  }

  if (event.key === "ArrowRight") {
    nextSlide();
  }

  if (event.key === "ArrowLeft") {
    prevSlide();
  }
}

watch(
  () => props.images,
  () => {
    currentIndex.value = 0;
    startAutoplay();
  },
  { deep: true },
);

onMounted(() => {
  startAutoplay();
  window.addEventListener("keydown", handleKeydown);
});

onBeforeUnmount(() => {
  stopAutoplay();
  window.removeEventListener("keydown", handleKeydown);
  document.body.style.overflow = "";
});
</script>

<style scoped>
.service-gallery {
  width: 100%;
}

.service-gallery-frame {
  position: relative;
  width: 100%;
  max-width: 500px;
  margin: 0 auto;
  aspect-ratio: 16 / 10;
  overflow: hidden;
  border-radius: 16px;
  background: rgba(19, 79, 92, 0.05);
  box-shadow: 0 10px 24px rgba(25, 35, 40, 0.12);
}

.service-gallery-image {
  width: 100%;
  height: 100%;
  display: block;
  object-fit: cover;
}

.gallery-image-clickable {
  cursor: zoom-in;
}

.gallery-image-contain {
  object-fit: contain;
  background: #d8d5d5;
}

.gallery-frame-contain {
  background: #e3e5e6;
  aspect-ratio: 4 / 3;
}

/* future poster mode */
.gallery-image-poster {
  object-fit: contain;
  background: #ececec;
}

.gallery-frame-poster {
  background: #e3e5e6;
  aspect-ratio: 3 / 4;
  max-width: 420px;
}

.gallery-arrow {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 2;

  width: 2rem;
  height: 2rem;
  border: none;
  border-radius: 999px;

  background: rgba(248, 246, 242, 0.88);
  color: var(--color-teal);
  font-size: 1.25rem;
  line-height: 1;
  cursor: pointer;

  box-shadow: 0 6px 16px rgba(25, 35, 40, 0.16);
  transition:
    transform 0.2s ease,
    background-color 0.2s ease,
    opacity 0.2s ease;
}

.gallery-arrow:active {
  transform: translateY(-50%) scale(0.96);
}

.gallery-arrow-left {
  left: 0.75rem;
}

.gallery-arrow-right {
  right: 0.75rem;
}

.gallery-dots {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.45rem;
  margin-top: 0.85rem;
}

.gallery-dot {
  width: 0.65rem;
  height: 0.65rem;
  border-radius: 999px;
  border: none;
  background: rgba(19, 79, 92, 0.22);
  cursor: pointer;
  transition:
    transform 0.2s ease,
    background-color 0.2s ease;
}

.gallery-dot.active {
  background: var(--color-teal);
  transform: scale(1.15);
}

.gallery-hint {
  margin-top: 0.65rem;
  text-align: center;
  font-size: 0.9rem;
  color: rgba(26, 26, 26, 0.68);
}

.gallery-modal {
  position: fixed;
  inset: 0;
  z-index: 1000;

  display: flex;
  align-items: center;
  justify-content: center;

  padding: 1rem;
  background: rgba(20, 24, 28, 0.82);
  backdrop-filter: blur(4px);
}

.gallery-modal-content {
  max-width: min(92vw, 1100px);
  max-height: 88vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

.gallery-modal-image {
  max-width: 100%;
  max-height: 88vh;
  display: block;
  border-radius: 12px;
  background: #f4f4f4;
  box-shadow: 0 18px 50px rgba(0, 0, 0, 0.28);
}

.gallery-modal-close {
  position: absolute;
  top: 1rem;
  right: 1rem;

  width: 2.5rem;
  height: 2.5rem;
  border: none;
  border-radius: 999px;

  background: rgba(255, 255, 255, 0.92);
  color: #1a1a1a;
  font-size: 1.5rem;
  line-height: 1;
  cursor: pointer;

  box-shadow: 0 10px 24px rgba(0, 0, 0, 0.18);
}

.gallery-modal-arrow {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);

  width: 2.75rem;
  height: 2.75rem;
  border: none;
  border-radius: 999px;

  background: rgba(255, 255, 255, 0.92);
  color: var(--color-teal);
  font-size: 1.6rem;
  line-height: 1;
  cursor: pointer;

  box-shadow: 0 10px 24px rgba(0, 0, 0, 0.18);
}

.gallery-modal-arrow-left {
  left: 1rem;
}

.gallery-modal-arrow-right {
  right: 1rem;
}

.gallery-fade-enter-active,
.gallery-fade-leave-active {
  transition: opacity 0.35s ease;
}

.gallery-fade-enter-from,
.gallery-fade-leave-to {
  opacity: 0;
}

.modal-fade-enter-active,
.modal-fade-leave-active {
  transition: opacity 0.25s ease;
}

.modal-fade-enter-from,
.modal-fade-leave-to {
  opacity: 0;
}

@media (min-width: 860px) {
  .gallery-arrow {
    opacity: 0;
    pointer-events: none;
  }

  .service-gallery-frame:hover .gallery-arrow {
    opacity: 1;
    pointer-events: auto;
  }

  .gallery-arrow:hover,
  .gallery-modal-arrow:hover,
  .gallery-modal-close:hover {
    background: rgba(255, 255, 255, 0.98);
  }

  .gallery-dot:hover {
    transform: scale(1.12);
  }

  .gallery-image-clickable:hover {
    transform: scale(1.01);
    transition: transform 0.2s ease;
  }
}

@media (max-width: 640px) {
  .gallery-modal {
    padding: 0.75rem;
  }

  .gallery-modal-content {
    max-width: 100%;
  }

  .gallery-modal-arrow {
    width: 2.35rem;
    height: 2.35rem;
  }

  .gallery-modal-arrow-left {
    left: 0.5rem;
  }

  .gallery-modal-arrow-right {
    right: 0.5rem;
  }

  .gallery-modal-close {
    top: 0.75rem;
    right: 0.75rem;
  }
}
</style>
