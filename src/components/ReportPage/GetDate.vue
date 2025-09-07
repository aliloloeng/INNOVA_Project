<template>
  <div class="flex items-center justify-center w-[90%] bg-gray-100">
    <div class="mobile-box bg-white px-6 py-8 rounded-xl ">

      <label for="date-input" class="block text-gray-700 font-medium mb-2">
        <div class="flex items-center gap-4 mb-4">
          <div class="bg-blue-200 p-2 rounded-xl w-10">
            <IconBaceInfo class="w-full h-auto" />
          </div>
          <h2 class="text-xl font-bold">{{ $t('select_date') }}</h2>
        </div>
      </label>


      <div class="relative">
        <input
          type="date"
          id="date-input"
          v-model="reportStore.basicInfo.date"
          class="w-full border border-gray-300 rounded-lg px-3 py-2
                 focus:outline-none focus:ring-2 focus:ring-blue-500
                 bg-gray-50 text-gray-700 pr-10 "
        />

        <span
          class="absolute right-3 top-1/2 -translate-y-1/2 text-blue-500 pointer-events-none"
        >
          <IconCalender class="w-5 h-5" />
        </span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useReportStore } from '@/store/reportStore'
import IconBaceInfo from './icons/IconBaceInfo.vue'
import IconCalender from './icons/IconCalender.vue'

const reportStore = useReportStore()
</script>
