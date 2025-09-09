<template>
  <div class="mobile-box pb-4">
    <h2 class="text-xl font-bold mb-4 px-5 ">{{ t("tickets.title") }}</h2>

    <div class="flex items-center justify-between px-4 mb-8">
      <div>
        <select
          v-model="selectedTicketFilter"
          class="border bg-white border-gray-300 rounded px-3 py-2"
        >
          <option value="all">{{ t("tickets.filters.all") }}</option>
          <option value="open">{{ t("tickets.filters.open") }}</option>
          <option value="closed">{{ t("tickets.filters.closed") }}</option>
          <option value="inProgress">{{ t("tickets.filters.inProgress") }}</option>
        </select>
      </div>

      <div>
        <button
          @click="toggleTicketSort"
          class="flex bg-white items-center gap-1 px-3 py-2 border border-gray-300 rounded hover:bg-gray-100 transition"
        >
          {{ t("tickets.sort") }}
          <svg
            v-if="ticketSortAsc"
            xmlns="http://www.w3.org/2000/svg"
            class="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 15l7-7 7 7" />
          </svg>
          <svg
            v-else
            xmlns="http://www.w3.org/2000/svg"
            class="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
          </svg>
        </button>
      </div>
    </div>

    <div class="space-y-3">
      <TicketsItemComponent
        v-for="ticket in filteredAndSortedTickets"
        :key="ticket.id"
        :title="ticket.title"
        :status="ticket.status"
        :text="ticket.text"
        :date="ticket.date"
        :Ticket="ticket.Ticket"
      />
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue"
import { useI18n } from "vue-i18n"
import TicketsItemComponent from "./TicketsItemComponent.vue"

const { t } = useI18n()

const selectedTicketFilter = ref("all")
const ticketSortAsc = ref(true)
const toggleTicketSort = () => (ticketSortAsc.value = !ticketSortAsc.value)

const tickets = ref([
  {
    id: 1,
    title: "Login authentication failed",
    status: "open", // کلید خام
    text: "I can't log in to my account...",
    date: "2025-08-20",
    Ticket: 341212
  },
  {
    id: 2,
    title: "Feature request: Dark mode",
    status: "closed",
    text: "Would it be possible to add dark mode?",
    date: "2025-08-18",
    Ticket: 341213
  },
  {
    id: 3,
    title: "Payment issue with subscription",
    status: "inProgress",
    text: "I'm having trouble with my monthly payment...",
    date: "2025-08-15",
    Ticket: 341214
  }
])

const filteredAndSortedTickets = computed(() => {
  let result = tickets.value
  if (selectedTicketFilter.value !== "all") {
    result = result.filter((t) => t.status === selectedTicketFilter.value)
  }
  return [...result].sort((a, b) =>
    ticketSortAsc.value ? new Date(a.date) - new Date(b.date) : new Date(b.date) - new Date(a.date)
  )
})
</script>
