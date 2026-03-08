<template>
  <svg
    class="primastella-svg"
    viewBox="-40 0 1345 220"
    xmlns="http://www.w3.org/2000/svg"
    aria-label="Primastella"
  >
    <defs>
      <mask id="text-mask">
        <rect width="100%" height="100%" fill="black" />
        <text
          x="50%"
          y="50%"
          text-anchor="middle"
          dominant-baseline="middle"
          class="primastella-mask-text"
        >
          PRIMASTELLA
        </text>
      </mask>
    </defs>

    <!-- Fading gallery inside letters -->
    <g mask="url(#text-mask)">
      <image
        href="/images/hero/1.webp"
        x="0"
        y="0"
        width="1265"
        height="220"
        preserveAspectRatio="xMidYMid slice"
        class="gallery-img gallery-img-1"
      />
      <image
        href="/images/hero/2.webp"
        x="0"
        y="0"
        width="1265"
        height="220"
        preserveAspectRatio="xMidYMid slice"
        class="gallery-img gallery-img-2"
      />
      <image
        href="/images/hero/3.webp"
        x="0"
        y="0"
        width="1265"
        height="220"
        preserveAspectRatio="xMidYMid slice"
        class="gallery-img gallery-img-3"
      />
      <image
        href="/images/hero/4.webp"
        x="0"
        y="0"
        width="1265"
        height="220"
        preserveAspectRatio="xMidYMid slice"
        class="gallery-img gallery-img-4"
      />
      <image
        href="/images/hero/5.webp"
        x="0"
        y="0"
        width="1265"
        height="220"
        preserveAspectRatio="xMidYMid slice"
        class="gallery-img gallery-img-5"
      />
      <image
        href="/images/hero/6.webp"
        x="0"
        y="0"
        width="1265"
        height="220"
        preserveAspectRatio="xMidYMid slice"
        class="gallery-img gallery-img-6"
      />
      <image
        href="/images/hero/7.webp"
        x="0"
        y="0"
        width="1265"
        height="220"
        preserveAspectRatio="xMidYMid slice"
        class="gallery-img gallery-img-7"
      />
    </g>

    <!-- Outline always visible -->
    <text
      x="50%"
      y="50%"
      text-anchor="middle"
      dominant-baseline="middle"
      class="primastella-outline-text"
    >
      PRIMASTELLA
    </text>
  </svg>
</template>