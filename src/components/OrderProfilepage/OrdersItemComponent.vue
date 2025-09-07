<template>
  <div
    class="flex flex-col justify-between items-center bg-white p-3 rounded-lg border-l-5 border-gray-200 hover:shadow-md transition w-[90%] max-w-[375px] mx-auto"
    :class="borderColor(status)"
  >
    <div class="flex justify-between items-center w-full mb-5">
      <p class="font-semibold text-sm text-gray-800">{{ title }}</p>
      <span
        :class="statusColor(status)"
        class="px-3 py-1 rounded-full text-sm font-semibold"
      >
        {{ $t(`orders.status.${statusKey(status)}`) }}
      </span>
    </div>

    <div class="text-xs ml-5 w-full mb-5">
      <p>{{ text }}</p>
    </div>

    <div class="flex justify-between items-center w-full text-xs text-gray-500">
      <p>{{ $t("orders.order") }} : #{{ Ticket }}</p>
      <p>{{ $t("orders.updated") }}: {{ date }}</p>
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

function statusColor(status) {
  switch (status) {
    case 'Open': return 'bg-green-100 text-green-700'
    case 'Closed': return 'bg-red-100 text-red-700'
    case 'In Progress': return 'bg-yellow-100 text-yellow-700'
    default: return 'bg-gray-100 text-gray-700'
  }
}

function borderColor(status) {
  switch (status) {
    case 'Open': return 'border-l-4 border-green-500'
    case 'Closed': return 'border-l-4 border-red-500'
    case 'In Progress': return 'border-l-4 border-yellow-500'
    default: return 'border-l-4 border-gray-400'
  }
}

function statusKey(status) {
  switch (status) {
    case 'Open': return 'open'
    case 'Closed': return 'closed'
    case 'In Progress': return 'inProgress'
    default: return 'unknown'
  }
}
</script>
