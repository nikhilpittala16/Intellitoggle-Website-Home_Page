<script setup lang="ts">
import YellowButton from "./YellowButton.vue";
</script>

<template>
  <section
    class="w-full max-w-[1920px] mx-auto p-6 md:p-[120px] flex flex-col gap-12 items-center justify-center bg-[#EDECF6] opacity-100"
  >
    <!-- Heading -->
    <div class="w-full text-center">
      <h2
        class="text-3xl font-bold leading-snug bg-gradient-to-b from-[#42389E] to-[#0F1026] bg-clip-text text-transparent"
      >
        Plans Built For Every Stage Of Growth
      </h2>
    </div>

    <!-- Pricing Buttons (stacked vertically) -->
    <div class="flex flex-col gap-6 items-center w-full md:w-auto">
      <button
        class="bg-gradient-to-b from-[#42389E] to-[#0F1026] text-white font-semibold w-full max-w-[280px] px-6 py-3 rounded-lg shadow"
      >
        <div class="flex flex-col items-center">
          <p class="text-[20px]">Price Starts at</p>
          <p><span class="text-[48px]">$10</span> /month</p>
        </div>
      </button>
      <YellowButton>
        <p class="font-semibold text-lg">View Subscription Details</p>
      </YellowButton>
    </div>

    <!-- Sandbox Plan Section -->
    <div
      class="flex flex-col md:flex-row bg-white rounded-xl px-6 md:px-[32px] py-8 md:py-[64px] gap-6 md:gap-12 w-full items-center md:items-start justify-center"
    >
      <!-- Text -->
      <div class="flex-1 text-center md:text-left">
        <p class="text-2xl font-semibold mb-2">
          Start Your 7-Day Free Sandbox Plan
        </p>
        <p class="text-base text-[#5F5F60]">
          Join over 1,000+ startups already growing with Untitled.
        </p>
      </div>

      <!-- Buttons -->
      <div class="flex flex-col md:flex-row gap-4 md:gap-6 w-full md:w-auto">
        <YellowButton class="w-full md:w-auto">
          <p class="font-semibold text-lg">Get Started</p>
        </YellowButton>

        <button
          class="bg-white border border-gray-300 text-gray-800 font-semibold px-8 py-4 rounded-lg shadow hover:bg-gray-100 w-full md:w-auto"
        >
          Learn More
        </button>
      </div>
    </div>
  </section>
</template>
