<script setup lang="ts">
import YellowButton from "./YellowButton.vue";
</script>

<template>
  <section
    class="w-full bg-[#EDECF6] flex flex-col md:flex-row justify-between items-center gap-8 md:gap-[200px] px-6 md:px-[120px] py-10 md:py-[120px]"
  >
    <!-- 1. Image -->
    <div class="flex-1 flex justify-center md:justify-start">
      <img
        src="/public/OpenFeature.png"
        alt="Open Feature"
        class="w-full max-w-[830px] h-auto"
      />
    </div>

    <!-- 2. Text + Button -->
    <div class="flex-1 flex flex-col text-left items-start md:items-start">
      <h2
        class="text-[#0E121B] text-[20px] sm:text-[24px] lg:text-[28px] xl:text-[36px] font-semibold font-['Merriweather Sans'] mb-4"
      >
        Seamless Feature Management with OpenFeature
      </h2>
      <p class="text-lg text-[#5F5F60] font-normal mb-6">
        Aortem now integrates with OpenFeature to provide developers with a
        powerful, standardized approach to feature flagging and dynamic
        configuration. Ship features faster, test safely, and optimize user
        experiences effortlessly.
      </p>
      <YellowButton class="w-full md:w-auto">
        <div
          class="flex flex-row items-center justify-center md:justify-start gap-2"
        >
          <span class="font-bold text-xl">Learn More</span>
          <img src="/arrow.png" alt="arrow" class="w-5 h-5" />
        </div>
      </YellowButton>
    </div>
  </section>
</template>
