
<template>
  <div
    class="flex flex-col justify-between items-center bg-white p-3 rounded-lg border-l-5 border-gray-200 hover:shadow-md transition w-[90%] mx-auto"
    :class="borderColor(status)"
  >
    <div class="flex justify-between items-center mb-5 w-full">
      <p class="font-semibold text-sm text-gray-800">{{ title }}</p>
      <span
        :class="statusColor(status)"
        class="px-3 py-1 rounded-full text-sm font-semibold"
      >
        {{ t(`tickets.filters.${status}`) }}
      </span>
    </div>

    <div class="text-xs ml-5 w-full mb-5">
      <p>{{ text }}</p>
    </div>

    <div class="flex justify-between items-center w-full text-xs text-gray-500">
      <p>{{ t("tickets.ticket") }} : #{{ Ticket }}</p>
      <p>{{ t("tickets.updated") }}: {{ date }}</p>
    </div>
  </div>
</template>

<script setup>
  import { useI18n } from "vue-i18n"
  const { t } = useI18n()

  defineProps({
    title: String,
    status: String, // کلید خام مثل "open"
    text: String,
    date: String,
    Ticket: Number
  })

  function statusColor(status) {
    switch (status) {
      case "open":
        return "bg-green-100 text-green-700"
      case "closed":
        return "bg-red-100 text-red-700"
      case "inProgress":
        return "bg-yellow-100 text-yellow-700"
      default:
        return "bg-gray-100 text-gray-700"
    }
  }

  function borderColor(status) {
    switch (status) {
      case "open":
        return "border-l-4 border-green-500"
      case "closed":
        return "border-l-4 border-red-500"
      case "inProgress":
        return "border-l-4 border-yellow-500"
      default:
        return "border-l-4 border-gray-400"
    }
  }
  </script>
