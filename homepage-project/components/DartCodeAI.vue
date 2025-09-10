<template>
  <section
    class="bg-[#42389E] bg-[url(/BG.jpg)] bg-cover bg-center bg-blend-soft-light flex flex-col gap-[48px] px-6 md:px-[120px] py-[60px] md:py-[120px]"
  >
    <!-- Top heading -->
    <div class="flex flex-col items-center justify-center gap-2 text-center">
      <button class="bg-[#F9A71E] px-[32px] py-[8px] rounded-3xl font-semibold">
        Coming Soon
      </button>
      <h2 class="text-white font-bold text-2xl md:text-3xl">
        DartCodeAI That Actually Changes Flagging
      </h2>
    </div>

    <!-- Features grid -->
    <div>
      <div class="w-full grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-[48px]">
        <div
          v-for="feature in features"
          :key="feature.id"
          class="flex flex-col items-center p-6 border border-neutral-400/50 shadow-lg rounded-xl"
        >
          <img
            :src="feature.img"
            :alt="feature.title"
            class="object-cover rounded"
            height="46"
            width="46"
          />
          <h3 class="mt-2 text-white text-center text-lg md:text-xl">
            {{ feature.title }}
          </h3>
          <p class="mt-1 text-[#EDECF6] text-center text-sm md:text-base">
            {{ feature.description }}
          </p>
        </div>
      </div>
      <h3
        class="text-center text-[#F9A71E] font-semibold text-xl md:text-2xl mt-6"
      >
        Enterprise Only
      </h3>
    </div>

    <!-- Bottom bar -->
    <div
      class="flex flex-col md:flex-row justify-between items-center gap-4 md:gap-0 px-[20px] md:px-[30px] py-[20px] md:py-[25px] bg-transparent backdrop-blur-[1px] border border-neutral-400/50 shadow-lg rounded-xl"
    >
      <p class="text-white text-lg md:text-2xl text-center md:text-left">
        <span class="text-[#F9A71E]"> Be The First</span> To Try Out Our New AI
        Features.
      </p>

      <!-- Email input -->
      <div
        class="w-full md:w-auto flex flex-row gap-2 md:gap-0 p-1 border-2 rounded-lg"
      >
        <input
          type="email"
          placeholder="Enter email address"
          class="flex-1 px-3 py-2 focus:outline-none bg-transparent text-white flex-1 min-w-0"
        />
        <button class="bg-[#F9A71E] px-6 py-3 rounded-sm">
          <p
            class="bg-gradient-to-b from-[#42389E] to-[#0F1026] bg-clip-text text-transparent font-bold"
          >
            Join AI Early Access
          </p>
        </button>
      </div>
    </div>
  </section>
</template>

<script setup>
const features = [
  {
    id: 1,
    img: "/flag.png",
    title: "AutoFlag AI (LLM-Assisted Flag Creation)",
    description:
      "Create new flags just by typing what you need. The AI names it, sets rules, and configures targeting for you",
  },
  {
    id: 2,
    img: "/zoom.png",
    title: "SmartRamp AI (AI-Driven Rollout Optimization)",
    description:
      "Rollouts that adjust themselves. AI expands, pauses, or rolls back based on real-time metrics.",
  },
  {
    id: 3,
    img: "/robo.png",
    title: "ExplainFlags AI (LLM Root-Cause + Insights)",
    description:
      "Understand issues instantly with AI-generated, plain-language insights tied to your flags.",
  },
  {
    id: 4,
    img: "/zigzag.png",
    title: "AutoSegment AI (Behavioral Segmentation)",
    description:
      "Target the right users automatically. AI builds segments from live behavior—no manual rules.",
  },
];
</script>
