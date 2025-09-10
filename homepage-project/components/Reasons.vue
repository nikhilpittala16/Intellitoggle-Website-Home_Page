<template>
  <section
    class="w-full bg-white flex flex-col items-center gap-10 py-10 px-4 md:px-[120px]"
  >
    <!-- 1. Heading -->
    <h2
      class="text-3xl font-bold text-center leading-snug bg-gradient-to-b from-[#42389E] to-[#0F1026] bg-clip-text text-transparent"
    >
      Why Teams use IntelliToggle
    </h2>

    <!-- 2. Features grid -->
    <div
      class="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-[94px]"
    >
      <div
        v-for="feature in features"
        :key="feature.id"
        class="flex flex-col items-center md:items-start gap-6"
      >
        <img
          :src="feature.img"
          :alt="feature.title"
          class="object-cover rounded"
          width="129"
          height="118"
        />
        <div class="text-center md:text-left">
          <h3 class="text-2xl leading-snug text-[#1A1C3D]">
            {{ feature.title }}
          </h3>
          <p class="mt-2 text-lg leading-snug text-[#5F5F60]">
            {{ feature.description }}
          </p>
        </div>
      </div>
    </div>

    <!-- 3. Rounded text bar -->
    <div class="w-full">
      <div
        class="w-full flex flex-col md:flex-row justify-between items-center gap-4 bg-[#EDECF6] border border-gray-300 rounded-lg px-6 md:px-8 py-4 text-center shadow"
      >
        <h3
          class="text-lg md:text-2xl leading-snug text-[#5F5F60] text-center md:text-left"
        >
          <span class="text-[#1A1C3D] mr-2 font-bold"
            >Read a 2-min case note:</span
          >
          How a sample Flutter app shipped faster with IntelliToggle
        </h3>

        <YellowButton>
          <p class="font-semibold text-lg leading-snug">Read Now</p>
        </YellowButton>
      </div>
    </div>
  </section>
</template>

<script setup>
import YellowButton from "./YellowButton.vue";
import { ref } from "vue";

const features = ref([
  {
    id: 1,
    img: "/switch.png",
    title: "Safer, faster rollouts",
    description:
      "Control feature releases in minutes, not weeks without risking production stability",
  },
  {
    id: 2,
    img: "/Ship.png",
    title: "Confidence to ship",
    description:
      "Flip, target, and roll back. Engineers ship more often knowing they can undo mistakes",
  },
  {
    id: 3,
    img: "/AI.png",
    title: "Future-ready with AI delivery",
    description:
      "Built for Dart workflows and already prepared for AI-powered rollout automation tomorrow.",
  },
]);
</script>
