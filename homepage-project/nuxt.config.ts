// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  ssr: true,
  nitro: {
    preset: "vercel",
  },
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss"],
});
