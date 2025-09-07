<template>
  <div>
    <h2 class="text-xl font-bold mb-4 ml-5">{{ $t('my_report') }}</h2>

    <div class="flex items-center justify-between px-4 mb-8">
      <div>
        <select v-model="selectedReportFilter" class="border bg-white border-gray-300 rounded px-3 py-2">
          <option value="all">{{ $t('tickets.filters.all') }}</option>
          <option value="open">{{ $t('tickets.filters.open') }}</option>
          <option value="closed">{{ $t('tickets.filters.closed') }}</option>
          <option value="inProgress">{{ $t('tickets.filters.inProgress') }}</option>
        </select>
      </div>

      <div>
        <button @click="toggleReportSort" class="flex bg-white items-center gap-1 px-3 py-2 border border-gray-300 rounded hover:bg-gray-100 transition">
          {{ $t('sort') }}
          <svg v-if="reportSortAsc" xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 15l7-7 7 7"/>
          </svg>
          <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
          </svg>
        </button>
      </div>
    </div>

    <div class="space-y-3">
      <ReportsItemComponent
        v-for="report in filteredAndSortedReports"
        :key="report.id"
        :title="report.reportTitle"
        :status="mapStatus(report.status)"
        :text="report.reportText"
        :date="report.date"
        :Ticket="report.reportId"
      />
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useI18n } from 'vue-i18n'
import ReportsItemComponent from './ReportsItemComponent.vue'

const { t } = useI18n()

const selectedReportFilter = ref('all')
const reportSortAsc = ref(true)
const toggleReportSort = () => reportSortAsc.value = !reportSortAsc.value

function mapStatus(value){
  switch(value){
    case 'open': return t('tickets.filters.open')
    case 'closed': return t('tickets.filters.closed')
    case 'inProgress': return t('tickets.filters.inProgress')
    default: return value
  }
}

const reports = ref([
  { id: 1, reportTitle: 'Server downtime report', status: 'open', reportText: 'Server went down for 2 hours last night.', date: '2025-08-20', reportId: 501 },
  { id: 2, reportTitle: 'Monthly sales report', status: 'closed', reportText: 'Sales increased by 15% this month.', date: '2025-08-18', reportId: 502 },
  { id: 3, reportTitle: 'Bug report: Login error', status: 'inProgress', reportText: 'Some users are unable to log in via mobile app.', date: '2025-08-16', reportId: 503 }
])

const filteredAndSortedReports = computed(() => {
  let result = reports.value
  if (selectedReportFilter.value !== 'all') {
    result = result.filter(r => selectedReportFilter.value === r.status)
  }
  return [...result].sort((a,b) => reportSortAsc.value ? new Date(a.date) - new Date(b.date) : new Date(b.date) - new Date(a.date))
})
</script>
