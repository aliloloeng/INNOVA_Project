<template>
  <main class="bg-[#f3f4f6] mobile-box pb-4">
    <div class="flex justify-between p-5">
      <h1 class="text-xl font-bold text-gray-600">{{ $t('recent_activities') }}</h1>
      <button
        @click="toggleAll"
        class="text-sm font-medium flex items-center gap-1 text-blue-500 hover:underline"
      >
        <span>{{ showAll ? $t('show_less') : $t('see_all') }}</span>
      </button>
    </div>
    <RecentActivityItemsComponent :activities="visibleActivities"/>
  </main>
</template>

<script setup>
import { ref, computed } from 'vue'
import RecentActivityItemsComponent from './RecentActivityItemsComponent.vue'
import Iconwrench from './Icons/IconWrench.vue'
import IconShoppingCart from './Icons/IconShoppingCart.vue'
import IconWarning from './Icons/IconWarning.vue'

const showAll = ref(false)

const UserActivities = ref([
  {
    id:1,
    title:"activities.maintenance_report",
    subtitle:"activities.cnc_machine_floor",
    status:"activities.completed",
    time:"activities.2h_ago",
    icon:Iconwrench,
  },
  {
    id:2,
    title:"activities.parts_order",
    subtitle:"activities.hydraulic_pump_replacement",
    status:"activities.in_progress",
    time:"activities.yesterday",
    icon:IconShoppingCart,
  },
  {
    id:3,
    title:"activities.issue_report",
    subtitle:"activities.assembly_line_b_urgent",
    status:"activities.pending",
    time:"activities.2_days_ago",
    icon:IconWarning,
  },
])

const visibleActivities = computed(() => {
  return showAll.value ? UserActivities.value : UserActivities.value.slice(0, 1)
})

function toggleAll(){
  showAll.value = !showAll.value
}
</script>
