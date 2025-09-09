<template>
  <section class="bg-[#f3f4f6] text-gray-700 min-h-screen flex justify-center items-start py-10 px-1">
    <div class="max-w-lg w-full flex flex-col items-center gap-6">
      <div class="flex justify-center items-center">
        <img :src="logo" alt="Company Logo" class="w-40 rounded-full object-cover border shadow-md" loading="lazy" decoding="async">
      </div>

      <GetDate/>
      <BasicInformation />
      <EngineerInformation />
      <ActionDetailsInspection/>
      <SpareParts/>
      <CustomerInformation />
      <SignaturesPart />

      <div class="flex justify-center w-full pt-6">
        <button
        @click="submitReport"
        class="w-[90%] flex items-center justify-center gap-2 text-xl font-semibold px-6 py-4 bg-[#2652c3] text-white rounded-xl shadow hover:bg-blue-800 transition"
        >
          <IconSend/> Submit Report
        </button>
      </div>

      <PdfActions :reportData="reportStore.actionDetails" />

    </div>
  </section>
</template>

<script setup>
import logo from '@/assets/images/logo.jpg'
import { useReportStore } from '@/store/reportStore'
import BasicInformation from '@/components/ReportPage/BasicInformation.vue'
import CustomerInformation from '@/components/ReportPage/CustomerInformation.vue'
import EngineerInformation from '@/components/ReportPage/EngineerInformation.vue'
import SpareParts from '@/components/ReportPage/SpareParts.vue'
import SignaturesPart from '@/components/ReportPage/SignaturesPart.vue'
import ActionDetailsInspection from '@/components/ReportPage/ActionDetailsInspection.vue'
import GetDate from '@/components/ReportPage/GetDate.vue'
import PdfActions from '@/components/ReportPage/PdfActions.vue'


const reportStore = useReportStore()

function submitReport() {
  console.log("Report Submitted:\n" + JSON.stringify(reportStore.$state, null, 2))
}
</script>
