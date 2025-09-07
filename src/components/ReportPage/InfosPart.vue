<template>
  <section class="bg-[#f3f4f6]  p-4">
    <div class=" py-2 px-4 border flex border-[#d0e0f6] bg-[#eef2ff] rounded-xl flex-1 ">
      <div class="mt-2 mr-1">
        <IconInfo/>
      </div>
      <div>
        <h3 class="text-[#364f98] font-semibold">{{ $t('draft_mode.title') }}</h3>
        <p class="text-[#4971e0] break-words">{{ $t('draft_mode.description') }}</p>
      </div>
    </div>
  </section>
</template>

<script setup>
  import IconInfo from './icons/IconInfo.vue';
</script>
