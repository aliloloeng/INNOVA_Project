<template>
  <div
    class="flex flex-col justify-between items-center bg-white p-3 rounded-lg border-l-5 border-gray-200 hover:shadow-md transition w-[90%] mobile-box "
    :class="borderColor(status)"
  >
    <div class="flex justify-center items-center gap-[180px] mb-5">
      <p class="font-semibold text-sm text-gray-800">{{ orderName }}</p>
      <span
        :class="statusColor(status)"
        class="px-3 py-1 rounded-full text-sm font-semibold"
      >
        {{ status }}
      </span>
    </div>

    <div class=" text-xs ml-5 w-full mb-5">
      <p class="">{{ description }}</p>
    </div>

    <div class="flex justify-center items-center gap-[120px] text-xs text-gray-500">
      <p>Order : #{{ orderId }} </p>
      <p>updated: {{ date }}</p>
    </div>
  </div>
</template>

<script setup>
defineProps({
  orderName: String,
  status: String,
  description: String,
  date: String,
  orderId: Number,
})

function statusColor(status) {
  switch (status) {
    case 'Open':
      return 'bg-green-100 text-green-700'
    case 'Closed':
      return 'bg-red-100 text-red-700'
    case 'In Progress':
      return 'bg-yellow-100 text-yellow-700'
    default:
      return 'bg-gray-100 text-gray-700'
  }
}

function borderColor(status) {
  switch (status) {
    case 'Open':
      return 'border-l-4 border-green-500'
    case 'Closed':
      return 'border-l-4 border-red-500'
    case 'In Progress':
      return 'border-l-4 border-yellow-500'
    default:
      return 'border-l-4 border-gray-400'
  }
}
</script>
