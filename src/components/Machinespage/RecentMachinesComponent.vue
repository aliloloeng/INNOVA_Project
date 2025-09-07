<template>
  <main class="bg-[#f3f4f6] mobile-box">
    <div class="flex justify-between mb-3 px-5">
      <h1 class="text-xl font-bold text-gray-600 ">{{ $t('recent_machines') }}</h1>
      <button @click="toggleAll" class="text-sm font-medium flex items-center gap-1 text-blue-500 hover:underline">
        <span>{{ showAll ? $t('show_less') : $t('see_all') }}</span>
      </button>
    </div>
    <RecentMachinesItemsComponent :activities="visibleActivities"/>
  </main>
</template>

<script setup>
import { ref, computed } from 'vue'
import IconChimney from './icons/IconChimney.vue'
import Icongear from './icons/IconGear.vue'
import Iconwrench from './icons/Iconwrench.vue'
import RecentMachinesItemsComponent from './RecentMachinesItemsComponent.vue'

const showAll = ref(false)

const UserActivities = ref([
  {
    id:1,
    title:"machines_activities.maintenance_report",
    subtitle:"machines_activities.cnc_machine_floor",
    status:"machines_activities.active",
    icon:IconChimney,
  },
  {
    id:2,
    title:"machines_activities.parts_order",
    subtitle:"machines_activities.hydraulic_pump_replacement",
    status:"machines_activities.maintenance",
    icon:Iconwrench,
  },
  {
    id:3,
    title:"machines_activities.issue_report",
    subtitle:"machines_activities.assembly_line_b_urgent",
    status:"machines_activities.active",
    icon:Icongear,
  },
])

const visibleActivities = computed(() => {
  return showAll.value ? UserActivities.value : UserActivities.value.slice(0, 1)
})

function toggleAll(){
  showAll.value = !showAll.value
}
</script>
