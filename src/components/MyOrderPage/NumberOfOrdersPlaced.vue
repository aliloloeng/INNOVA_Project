<template>
  <div class="mobile-box bg-[#f3f4f6] p-4 pb-8">
    <div class="flex justify-between items-center gap-4">
      <div
        v-for="(item,index) in OrderState"
        :key="index"
        class="w-full flex flex-col items-center bg-white rounded-xl p-4 shadow-sm"
      >
        <h1 :class="item.colorClass" class="text-xl font-semibold">{{ item.number }}</h1>
        <p class="text-xs text-gray-500 ">{{ $t(item.titleKey) }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive } from 'vue'

const OrderState = reactive([
  {
    titleKey: 'total_order',
    number: 12,
    colorClass: 'text-purple-600',
  },
  {
    titleKey: 'completed',
    number: 8,
    colorClass: 'text-green-600',
  },
  {
    titleKey: 'in_progress',
    number: 4,
    colorClass: 'text-orange-500',
  },
])
</script>
