<template>
  <div
    class="flex flex-col justify-between items-center bg-white p-3 rounded-lg border-l-5 border-gray-200 hover:shadow-md transition w-[90%] max-w-[375px] mx-auto"
    :class="borderColor(status)"
  >
    <div class="flex justify-center items-center gap-[70px] mb-5">
      <p class="font-semibold text-sm text-gray-800">{{ title }}</p>
      <span
        :class="statusColor(status)"
        class="px-3 py-1 rounded-full text-sm font-semibold"
      >
        {{ status }}
      </span>
    </div>

    <div class=" text-xs ml-5 w-full mb-5">
      <p class="">{{ text }}</p>
    </div>

    <div class="flex justify-center items-center gap-[110px] text-xs text-gray-500">
      <p>{{ $t('tickets.ticket') }} : #{{ Ticket }} </p>
      <p>{{ $t('tickets.updated') }}: {{ date }}</p>
    </div>
  </div>
</template>

<script setup>
defineProps({
  title: String,
  status: String,
  text: String,
  date: String,
  Ticket: Number,
})

import { useI18n } from 'vue-i18n'
const { t } = useI18n()

function statusColor(status) {
  switch (status) {
    case t('tickets.filters.open'): return 'bg-green-100 text-green-700'
    case t('tickets.filters.closed'): return 'bg-red-100 text-red-700'
    case t('tickets.filters.inProgress'): return 'bg-yellow-100 text-yellow-700'
    default: return 'bg-gray-100 text-gray-700'
  }
}

function borderColor(status) {
  switch (status) {
    case t('tickets.filters.open'): return 'border-l-4 border-green-500'
    case t('tickets.filters.closed'): return 'border-l-4 border-red-500'
    case t('tickets.filters.inProgress'): return 'border-l-4 border-yellow-500'
    default: return 'border-l-4 border-gray-400'
  }
}
</script>
