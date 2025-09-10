<template>
  <footer
    class="w-full bg-[#EDECF6] opacity-100 px-6 py-10 md:px-[120px] md:py-[100px]"
  >
    <div class="flex flex-col md:flex-row justify-between gap-10">
      <!-- 1. Logo + Info -->
      <div class="flex-1">
        <div class="flex flex-row items-center text-2xl font-bold mb-4">
          <img
            src="/public/logo.png"
            alt="IntelliToggle logo"
            width="50"
            height="45"
          />
          <p
            class="ml-2 bg-gradient-to-b from-[#42389E] to-[#0F1026] bg-clip-text text-transparent"
          >
            IntelliToggle
          </p>
        </div>
        <p class="text-gray-600 pr-[20px] mb-[10px]">
          IntelliToggle is built by AORTEM, a company focused on powering
          scalable, multi-platform developer tools.
        </p>
        <img src="/github.png" alt="github icon" />
      </div>

      <!-- 2. Lists -->
      <div class="flex flex-row flex-1 justify-between mb:gap-10">
        <!-- Company -->
        <div class="flex-1">
          <ul class="space-y-2">
            <li>
              <h4 class="text-gray-400 mb-4 font-semibold">Company</h4>
            </li>
            <li>
              <NuxtLink to="/" class="text-black font-semibold"
                >Pricing</NuxtLink
              >
            </li>
            <li>
              <NuxtLink to="/" class="text-black font-semibold"
                >Documentation</NuxtLink
              >
            </li>
            <li>
              <NuxtLink to="/" class="text-black font-semibold"
                >About Us</NuxtLink
              >
            </li>
          </ul>
        </div>
        <!-- Resources -->
        <div class="flex-1">
          <ul class="space-y-2">
            <li>
              <h4 class="text-gray-400 mb-4 font-semibold">Resources</h4>
            </li>
            <li>
              <NuxtLink to="/" class="text-black font-semibold"
                >Why IntelliToggle is different</NuxtLink
              >
            </li>
            <li>
              <NuxtLink to="/" class="text-black font-semibold"
                >Customer Support</NuxtLink
              >
            </li>
            <li>
              <NuxtLink to="/" class="text-black font-semibold"
                >Terms & conditions</NuxtLink
              >
            </li>
            <li>
              <NuxtLink to="/" class="text-black font-semibold"
                >Privacy policy</NuxtLink
              >
            </li>
          </ul>
        </div>
      </div>

      <!-- 3. Newsletter -->
      <div class="flex-1 flex flex-col mx-auto md:mx-0">
        <h4 class="text-black font-semibold mb-4">
          Subscribe to our Newsletter
        </h4>
        <div class="flex w-full">
          <input
            type="email"
            placeholder="Your email"
            class="flex-1 px-3 py-2 rounded-l bg-white text-black focus:outline-none"
          />
          <button class="bg-[#F9A71E] px-6 py-3 rounded-r-md">
            <p
              class="bg-gradient-to-b from-[#42389E] to-[#0F1026] bg-clip-text text-transparent font-bold"
            >
              Subscribe
            </p>
          </button>
        </div>
      </div>
    </div>
  </footer>
</template>
