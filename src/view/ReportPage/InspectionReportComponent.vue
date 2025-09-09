<template>
  <section class="bg-[#f3f4f6]  text-gray-700 min-h-screen flex justify-center items-start py-10 px-1">
    <div class=" mobile-box flex flex-col items-center gap-6">
      <div class="flex justify-center items-center">
        <img
          :src="logo"
          alt="Company Logo"
          class="w-40 rounded-full object-cover border shadow-md"
        >
      </div>

      <GetDate/>
      <BasicInformation />
      <ActionDetailsInspection/>
      <CheckList />
      <CustomerInformation />
      <CompanyInformationInspection />
      <EngineerInformation />
      <SpareParts/>
      <RatingPart />
      <SignaturesPart />

      <div class="flex justify-center w-full pt-6">
        <button
          @click="submitReport"
          class="w-[90%] flex items-center justify-center gap-2 text-xl font-semibold px-6 py-4 bg-[#2652c3] text-white rounded-xl shadow hover:bg-blue-800 transition"
        >
          <IconSend/>
          Submit Report
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
import CheckList from '@/components/ReportPage/CheckList.vue'
import CustomerInformation from '@/components/ReportPage/CustomerInformation.vue'
import EngineerInformation from '@/components/ReportPage/EngineerInformation.vue'
import SpareParts from '@/components/ReportPage/SpareParts.vue'
import SignaturesPart from '@/components/ReportPage/SignaturesPart.vue'
import ActionDetailsInspection from '@/components/ReportPage/ActionDetailsInspection.vue'
import CompanyInformationInspection from '@/components/ReportPage/CompanyInformationInspection.vue'
import GetDate from '@/components/ReportPage/GetDate.vue'
import RatingPart from '@/components/ReportPage/RatingPart.vue'
import PdfActions from '@/components/ReportPage/PdfActions.vue'


const reportStore = useReportStore()

function submitReport() {
    console.log("Report Submitted:\n" + JSON.stringify(reportStore.$state, null, 2))
}
</script>
