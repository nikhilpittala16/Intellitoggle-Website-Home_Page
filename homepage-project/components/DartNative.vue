<template>
  <main
    class="flex flex-col justify-center -mt-px items-center max-w-[1920px] mx-auto pt-[70px] gap-[32px] px-6 md:px-[120px] opacity-100 bg-[url('/Vector.png')] bg-cover bg-center"
  >
    <!-- Heading -->
    <div
      class="flex flex-col justify-center items-center text-center text-white"
    >
      <h1
        class="font-semibold px-[20px] md:px-[100px] text-3xl sm:text-4xl md:text-5xl lg:text-[64px] leading-tight"
      >
        The First
        <span class="bg-[#F9A71E] rounded-lg px-2 py-2 inline-block">
          <span
            class="bg-gradient-to-b from-[#42389E] to-[#0F1026] bg-clip-text text-transparent"
            >Dart-Native</span
          >
        </span>
        Feature Flag With DartCodeAI
      </h1>
      <p
        class="mt-4 text-lg sm:text-xl md:text-2xl lg:text-[32px] font-light md:font-semibold max-w-full sm:max-w-[600px] md:max-w-[900px]"
      >
        Feature flags built for Dart, Ship faster, roll back safely, and scale
        with AI-powered delivery
      </p>
      <p
        class="text-[#F9A71E] text-lg sm:text-xl md:text-2xl lg:text-[32px] font-semibold max-w-full sm:max-w-[600px] md:max-w-[900px]"
      >
        Starting at just $1/month
      </p>
    </div>

    <!-- Buttons and YouTube -->
    <div class="flex flex-col items-center w-full text-white">
      <div class="flex-1 text-left">
        <p>Valid till 15th September,2025</p>
      </div>

      <div
        class="flex flex-col sm:flex-row gap-4 sm:gap-6 font-semibold text-lg w-full sm:w-auto justify-center"
      >
        <button
          class="px-[44px] py-[7px] bg-[#F9A71E] rounded-lg w-full sm:w-auto"
        >
          <p
            class="bg-gradient-to-b from-[#42389E] to-[#0F1026] bg-clip-text text-transparent text-center"
          >
            Get Access
          </p>
        </button>

        <button
          class="border border-[#F9A71E] px-4 py-3 text-[#F9A71E] rounded-lg w-full sm:w-auto text-center"
        >
          Join AI Early Access
        </button>
      </div>

      <div class="mt-4 w-full flex justify-center">
        <img
          src="/YouTube.png"
          alt="YouTube"
          class="w-full max-w-[1150px] h-auto"
          loading="lazy"
        />
      </div>
    </div>
  </main>
</template>
