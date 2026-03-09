<template>
  <div
    class="service-gallery"
    @mouseenter="pauseAutoplay"
    @mouseleave="resumeAutoplay"
    @touchstart="onTouchStart"
    @touchend="onTouchEnd"
  >
    <div class="service-gallery-frame">
      <transition name="gallery-fade" mode="out-in">
        <img
          :key="currentImage.src"
          :src="currentImage.src"
          :alt="currentImage.alt"
          class="service-gallery-image"
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
});

const currentIndex = ref(0);
const isPaused = ref(false);
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

  if (props.images.length <= 1 || isPaused.value) return;

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
});

onBeforeUnmount(() => {
  stopAutoplay();
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

.gallery-fade-enter-active,
.gallery-fade-leave-active {
  transition: opacity 0.35s ease;
}

.gallery-fade-enter-from,
.gallery-fade-leave-to {
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

  .gallery-arrow:hover {
    background: rgba(248, 246, 242, 0.96);
  }

  .gallery-dot:hover {
    transform: scale(1.12);
  }
}
</style>
