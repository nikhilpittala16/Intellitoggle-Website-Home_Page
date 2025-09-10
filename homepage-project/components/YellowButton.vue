<template>
  <button class="bg-[#F9A71E] px-6 py-3 rounded-lg" :class="$attrs.class">
    <p
      class="bg-gradient-to-b from-[#42389E] to-[#0F1026] bg-clip-text text-transparent text-center"
    >
      <slot />
    </p>
  </button>
</template>
