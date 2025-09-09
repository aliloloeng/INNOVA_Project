<template>
  <header
    class="bg-white text-gray-700 mobile-box pb-3 pt-6 flex items-center drop-shadow-md px-4"
  >
    <RouterLink to="/" class="">
      <IconArrow class="w-6 h-6" />
    </RouterLink>

    <div class="flex justify-between w-full">
      <div class="flex items-center gap-2">
        <div class="flex-shrink-0">
          <img
            :src="logo"
            alt="Company Logo"
            class="w-20 object-cover"
          >
        </div>
        <div class="leading-tight">
          <h2 class="font-bold text-xs ">{{ $t('new_report_header.new_report') }}</h2>
          <p class="text-xs text-gray-400">{{ $t('new_report_header.company_name') }}</p>
        </div>
      </div>

      <div class="flex items-center gap-2 ">
        <button class="flex gap-1 px-1 py-1 text-sm text-[#3b82f6] bg-blue-100 rounded-xl hover:shadow-blue-300 shadow-sm">
          <IconSave />
          {{ $t('new_report_header.save') }}
        </button>
        <img
          :src="user"
          alt="User Avatar"
          class="w-8 h-8 sm:w-14 sm:h-14 rounded-full border-2 border-gray-600 object-cover mr-5"
        />
      </div>
    </div>
  </header>
</template>

<script setup>
import user from "@/assets/images/user.jpg";
import IconArrow from "./icons/IconArrow.vue";
import logo from '@/assets/images/logoHome.jpg'
import IconSave from "./icons/IconSave.vue";
</script>

<style scoped></style>
