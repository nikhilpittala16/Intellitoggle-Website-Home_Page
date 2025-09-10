<template>
  <section>
    <div
      class="w-full bg-white flex flex-col items-center gap-10 py-[120px] px-6 md:px-[120px]"
    >
      <div class="w-full text-center">
        <h2
          class="text-4xl font-semibold leading-snug bg-gradient-to-b from-[#42389E] to-[#0F1026] bg-clip-text text-transparent"
        >
          Control & Power-focused
        </h2>
      </div>
      <!-- Responsive wrapper -->
      <div class="flex flex-col md:flex-row gap-10 md:gap-[95px]">
        <div
          v-for="feature in features"
          :key="feature.id"
          class="w-full md:w-1/3 flex flex-col"
        >
          <img
            :src="feature.img"
            :alt="feature.title"
            class="object-cover rounded w-full md:w-[497px] h-auto"
          />
          <div class="mt-4">
            <h3 class="text-2xl leading-none text-[#1A1C3D]">
              {{ feature.title }}
            </h3>
            <p class="mt-2 text-lg leading-none text-[#5F5F60]">
              {{ feature.description }}
            </p>
            <button
              class="mt-[32px] border border-[#F9A71E] text-[#F9A71E] px-3 py-2 rounded-lg w-auto"
            >
              View Documentation
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";

const features = ref([
  {
    id: 1,
    img: "/connect.png",
    title: "Connect",
    description: "Install SDK in your Dart project in 2 mins.",
  },
  {
    id: 2,
    img: "/createFlags.png",
    title: "Create Flags",
    description: "Define features in IntelliToggle dashboard.",
  },
  {
    id: 3,
    img: "/Ship&Control.png",
    title: "Ship & Control",
    description: "Flip switches anytime, see instant results.",
  },
]);
</script>
