<template>
  <ul class="px-2 w-[90%] m-auto pb-4">
    <li
      v-for="activity in activities"
      :key="activity.id"
      class="flex items-center justify-between p-4 mb-3 bg-white rounded-xl shadow-sm hover:shadow-md transition"
    >
      <component :is="activity.icon" class="w-6 h-6 text-blue-500"/>
      <div class="flex-1 ml-4">
        <p class="font-bold text-gray-800 mb-1">{{ $t(activity.title) }}</p>
        <p class="text-sm text-gray-400">{{ $t(activity.subtitle) }}</p>
      </div>
      <div class="flex flex-col justify-end">
        <span
          :class="{
            'text-green-600 bg-green-100 rounded-xl py-1 px-3': $t(activity.status).toLowerCase() === 'active' || $t(activity.status).toLowerCase() === 'aktiv' || $t(activity.status).toLowerCase() === 'attivo',
            'text-orange-600 bg-orange-100 rounded-xl py-1 px-3': $t(activity.status).toLowerCase() === 'maintenance' || $t(activity.status).toLowerCase() === 'wartung' || $t(activity.status).toLowerCase() === 'manutenzione'
          }"
          class="font-semibold text-sm mr-4"
        >
          {{ $t(activity.status) }}
        </span>
      </div>
    </li>
  </ul>
</template>

<script setup>
defineProps({
  activities: {
    type: Array,
    required: true
  }
})
</script>

<style scoped>
</style>
