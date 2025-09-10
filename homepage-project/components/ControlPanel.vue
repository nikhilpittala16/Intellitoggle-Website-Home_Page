<template>
  <section
    class="w-full flex flex-col gap-[48px] px-8 md:px-[70px] py-[60px] md:py-[120px]"
  >
    <!-- Heading -->
    <div class="text-center">
      <h2 class="text-2xl md:text-4xl font-bold">What Is IntelliToggle</h2>
    </div>

    <!-- Content section -->
    <div
      class="flex flex-col md:flex-row justify-between items-center gap-[30px] md:gap-[50px]"
    >
      <!-- Left text -->
      <div class="flex-1 flex flex-col">
        <h3 class="font-semibold text-2xl md:text-3xl text-[#0E121B]">
          Your AI Dart App’s Control Panel For Feature Releases
        </h3>
        <p class="mt-4 text-sm md:text-md text-[#5F5F60]">
          IntelliToggle is a “Dart-Powered” feature flag that lets you turn
          features on/off instantly in your application without redeploying
          code. It allows you control roll-outs, run experiments, and fix bugs
          faster.
        </p>
        <h4 class="mt-4 text-lg md:text-xl font-semibold text-[#0E121B]">
          Benefits
        </h4>
        <ul class="mt-2 pl-4 text-[#5F5F60] list-disc text-sm md:text-base">
          <li>Toggle new features without app updates</li>
          <li>Roll out to specific users or regions</li>
          <li>Instantly rollback when needed</li>
        </ul>
      </div>

      <!-- Right image -->
      <div class="flex-1 flex justify-center md:justify-start">
        <img
          src="/public/ControlPanel.png"
          alt="Control Panel"
          loading="lazy"
          class="w-full max-w-[500px] md:max-w-[830px] h-auto rounded-lg"
        />
      </div>
    </div>
  </section>
</template>
