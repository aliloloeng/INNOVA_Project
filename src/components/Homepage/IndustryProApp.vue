<template>
  <section class="bg-[#f3f4f6]  flex justify-center items-center pb-4">
    <div class="w-[90%] mobile-box bg-[#2e64d5] rounded-2xl text-white p-8 relative overflow-hidden">
      <div class="flex items-center font-bold text-2xl mb-3">
        <IconSmartphone />
        <h2>{{ $t('industryApp.title') }}</h2>
      </div>
      <div class="max-w-md">
        <p class="text-sm ml-3 md:text-base leading-relaxed text-[#c3d5f8]">
          {{ $t('industryApp.description') }}
        </p>
      </div>
      <div class="flex justify-around items-center mt-5">
        <div class="flex flex-col items-center text-[#c3d5f8] z-2 ">
          <h3 class="font-bold text-white text-xl">24/7</h3>
          <p class="text-sm">{{ $t('industryApp.support') }}</p>
        </div>
        <div class="flex flex-col items-center text-[#c3d5f8] ">
          <h3 class="font-bold text-white text-xl">500+</h3>
          <p class="text-sm">{{ $t('industryApp.companies') }}</p>
        </div>
        <div class="flex flex-col items-center text-[#c3d5f8] ">
          <h3 class="font-bold text-white text-xl">99.9%</h3>
          <p class="text-sm">{{ $t('industryApp.uptime') }}</p>
        </div>
        <div class="flex flex-col items-center font-bold text-[#e3e7f6] py-3 px-4 bg-[#6581d4] rounded-2xl">
          <p>V2.1.0</p>
        </div>
      </div>
      <div class="p-10 bg-[#83aaff] w-10 rounded-full absolute -bottom-8 -left-8 z-0 opacity-25"></div>
      <div class="p-15 bg-[#80a2eb] w-15 rounded-full absolute -top-15 -right-10 z-0 opacity-50"></div>
    </div>
  </section>
</template>

<script setup>
import IconSmartphone from './Icons/IconSmartphone.vue'
</script>
