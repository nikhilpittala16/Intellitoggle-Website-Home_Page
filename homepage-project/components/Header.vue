<template>
  <header class="w-full bg-[#42389E] mb-0">
    <div
      class="max-w-[1920px] mx-auto flex justify-between items-center px-6 md:px-[120px] py-4 md:py-10"
    >
      <!-- Logo -->
      <div class="flex flex-row items-center text-2xl font-semibold text-white">
        <img
          src="/public/logo-white.png"
          alt="IntelliToggle logo"
          width="50"
          height="45"
        />
        <p>IntelliToggle</p>
      </div>

      <!-- Desktop Links -->
      <nav>
        <ul
          class="hidden md:flex space-x-12 text-white text-center font-light cursor-pointer md:text-[15px] lg:text-[18px]"
        >
          <li>
            <NuxtLink
              to="/"
              exact-active-class=" font-semibold"
              class="hover:text-gray-400"
            >
              Home
            </NuxtLink>
          </li>
          <li>
            <NuxtLink
              to="/about"
              exact-active-class=" font-semibold"
              class="hover:text-gray-400"
            >
              About
            </NuxtLink>
          </li>
          <li>
            <NuxtLink
              to="/services"
              exact-active-class=" font-semibold"
              class="hover:text-gray-400"
            >
              Pricing
            </NuxtLink>
          </li>
        </ul>
      </nav>

      <!-- Desktop Button -->
      <div class="hidden md:block">
        <YellowButton>
          <p class="font-semibold text-2xl leading-8">Start Sandbox</p>
        </YellowButton>
      </div>

      <!-- Mobile Hamburger -->
      <div class="md:hidden">
        <button
          @click="mobileMenuOpen = !mobileMenuOpen"
          class="text-white focus:outline-none"
        >
          <svg
            v-if="!mobileMenuOpen"
            xmlns="http://www.w3.org/2000/svg"
            class="h-8 w-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
          <svg
            v-else
            xmlns="http://www.w3.org/2000/svg"
            class="h-8 w-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
    </div>

    <!-- Mobile Menu -->
    <nav v-if="mobileMenuOpen" class="md:hidden bg-[#42389E] px-6 py-4">
      <ul class="flex flex-col space-y-4 text-white font-light">
        <li>
          <NuxtLink
            to="/"
            exact-active-class=" font-semibold"
            class="hover:text-gray-400"
          >
            Home
          </NuxtLink>
        </li>
        <li>
          <NuxtLink
            to="/about"
            exact-active-class="text-[#F9A71E] font-semibold"
            class="hover:text-gray-400"
          >
            About
          </NuxtLink>
        </li>
        <li>
          <NuxtLink
            to="/services"
            exact-active-class="text-[#F9A71E] font-semibold"
            class="hover:text-gray-400"
          >
            Pricing
          </NuxtLink>
        </li>
        <li>
          <button
            class="bg-[#F9A71E] hover:bg-blue-700 px-6 py-2 rounded w-full"
          >
            <p
              class="bg-gradient-to-b from-[#42389E] to-[#0F1026] bg-clip-text text-transparent font-semibold text-center"
            >
              Start Sandbox
            </p>
          </button>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script setup>
import { ref } from "vue";
import YellowButton from "./YellowButton.vue";

const mobileMenuOpen = ref(false);
</script>
