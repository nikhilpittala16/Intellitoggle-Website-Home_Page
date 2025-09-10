<template>
  <section class="w-full px-4 md:px-[240px] pb-[100px]">
    <div class="flex flex-col gap-2 md:gap-[48px] mb-8">
      <!-- Title -->
      <h2
        class="w-full text-center text-3xl bg-gradient-to-b from-[#42389E] to-[#0F1026] bg-clip-text text-transparent"
      >
        Dart-Powered Feature Flag
      </h2>

      <!-- Subtitle -->
      <div class="flex flex-col items-start md:items-center">
        <h3 class="font-semibold text-xl md:text-lg text-[#1A1C3D]">
          Not Another Generic Feature Flag Tool
        </h3>
        <p class="mt-2 text-left md:px-[250px] md:text-center text-[#5F5F60]">
          Most tools are built for every language, which means extra layers and
          slower toggles. IntelliToggle is built in Dart, for Dart — so it’s
          faster, safer, and built for your stack.
        </p>
      </div>
    </div>

    <!-- Desktop Table -->
    <div
      class="hidden md:block rounded-lg border border-gray-300 overflow-hidden"
    >
      <table class="w-full text-left">
        <!-- Header -->
        <thead
          class="bg-gradient-to-b from-[#42389E] to-[#0F1026] text-xl font-semibold text-white"
        >
          <tr>
            <th class="px-4 py-2">Features</th>
            <th class="px-4 py-2 text-center">IntelliToggle</th>
            <th class="px-4 py-2 text-center">Other Feature Flag</th>
          </tr>
        </thead>

        <!-- Body -->
        <tbody class="bg-[#EDECF6] text-base font-semibold text-[#5F5F60]">
          <tr
            v-for="(feature, index) in features"
            :key="index"
            class="border-b border-gray-300"
          >
            <td class="px-4 py-2">{{ feature.name }}</td>
            <td class="px-4 py-2 text-center">
              {{ feature.intelliToggle ? "✔" : "✖" }}
            </td>
            <td class="px-4 py-2 text-center">
              {{ feature.otherFlag ? "✔" : "✖" }}
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- Mobile Cards -->
    <div class="md:hidden flex flex-col gap-4">
      <div
        v-for="(feature, index) in features"
        :key="index"
        class="bg-purple-50 border border-gray-300 rounded-lg p-4"
      >
        <p class="font-semibold text-gray-800 mb-2 text-left">
          {{ feature.name }}
        </p>
        <div class="flex justify-between text-gray-700">
          <span>IntelliToggle:</span>
          <span>{{ feature.intelliToggle ? "✔" : "✖" }}</span>
        </div>
        <div class="flex justify-between text-gray-700">
          <span>Other Feature Flag:</span>
          <span>{{ feature.otherFlag ? "✔" : "✖" }}</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const features = [
  { name: "Dart-native SDK & server", intelliToggle: true, otherFlag: false },
  { name: "End-to-end type safety", intelliToggle: true, otherFlag: false },
  {
    name: "AI-assisted roll-outs & cleanup",
    intelliToggle: true,
    otherFlag: false,
  },
  { name: "A/B testing built-in", intelliToggle: true, otherFlag: false },
  { name: "Dart-Powered SDKs", intelliToggle: true, otherFlag: false },
];
</script>
