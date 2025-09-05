<template>
  <div>
    <h2 class="text-xl font-bold mb-4 ml-5">{{ $t("orders.title") }}</h2>

    <div class="flex items-center justify-between px-4 mb-8">
      <!-- فیلتر -->
      <div>
        <select v-model="selectedOrderFilter" class="border bg-white border-gray-300 rounded px-3 py-2">
          <option value="all">{{ $t("orders.filters.all") }}</option>
          <option value="open">{{ $t("orders.filters.open") }}</option>
          <option value="closed">{{ $t("orders.filters.closed") }}</option>
          <option value="inProgress">{{ $t("orders.filters.inProgress") }}</option>
        </select>
      </div>

      <!-- دکمه sort -->
      <div>
        <button @click="toggleOrderSort" class="flex bg-white items-center gap-1 px-3 py-2 border border-gray-300 rounded hover:bg-gray-100 transition">
          {{ $t("orders.sort") }}
          <svg v-if="orderSortAsc" xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 15l7-7 7 7"/>
          </svg>
          <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
          </svg>
        </button>
      </div>
    </div>

    <!-- لیست سفارش‌ها -->
    <div class="space-y-3">
      <OrdersItemComponent
        v-for="order in filteredAndSortedOrders"
        :key="order.id"
        :title="order.orderName"
        :status="order.status"
        :text="order.description"
        :date="order.date"
        :Ticket="order.orderId"
      />
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import OrdersItemComponent from './OrdersItemComponent.vue'

const selectedOrderFilter = ref('all')
const orderSortAsc = ref(true)
const toggleOrderSort = () => orderSortAsc.value = !orderSortAsc.value

function mapStatus(value){
  switch(value){
    case 'open': return 'Open'
    case 'closed': return 'Closed'
    case 'inProgress': return 'In Progress'
    default: return value
  }
}

const orders = ref([
  { id: 1, orderName: 'Order #1001', status: 'Open', description: '2x Laptops, 3x Keyboards', date: '2025-08-19', orderId: 1001 },
  { id: 2, orderName: 'Order #1002', status: 'Closed', description: '1x Monitor, 5x Mouse', date: '2025-08-17', orderId: 1002 },
  { id: 3, orderName: 'Order #1003', status: 'In Progress', description: '3x USB-C Cables', date: '2025-08-15', orderId: 1003 }
])

const filteredAndSortedOrders = computed(() => {
  let result = orders.value
  if (selectedOrderFilter.value !== 'all') {
    result = result.filter(o => mapStatus(selectedOrderFilter.value) === o.status)
  }
  return [...result].sort((a,b) => orderSortAsc.value ? new Date(a.date) - new Date(b.date) : new Date(b.date) - new Date(a.date))
})
</script>
