<template>
  <div class="w-[90%] bg-white px-6 py-8 rounded-xl mb-6">

    <div class="flex items-center gap-4 mb-4">
      <div class="bg-blue-200 p-2 rounded-xl w-10">
        <IconCompany class="w-full h-auto"/>
      </div>
      <h2 class="text-xl font-bold">{{ $t('company_info.title') }}</h2>
    </div>

    <Form ref="formRef" @submit="onSubmit" class="flex-1 space-y-4">

      <div class="flex flex-col">
        <span class="text-xl font-semibold text-gray-700 my-2">{{ $t('company_info.name') }}</span>
        <select
          v-model="selectedCompany"
          @change="fillCompanyInfo"
          class="border w-full border-gray-300 bg-gray-100 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          <option value="">{{ $t('company_info.select_company') }}</option>
          <option
            v-for="company in companies"
            :key="company.name"
            :value="company.name"
          >
            {{ $t(`company_info.companies.${company.name}`) }}
          </option>
        </select>
        <ErrorMessage class="text-red-500 text-xs mt-1" name="companyName"/>
      </div>

      <div class="flex flex-col">
        <span class="text-xl font-semibold text-gray-700 my-2">{{ $t('company_info.address') }}</span>
        <Field
          v-model="reportStore.companyInfo.address"
          :placeholder="$t('company_info.address')"
          name="companyAddress"
          rules="required"
          class="border w-full border-gray-300 bg-gray-100 rounded-lg px-3 pb-8 pt-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <ErrorMessage class="text-red-500 text-xs mt-1" name="companyAddress"/>
      </div>

      <div class="flex flex-col">
        <span class="text-xl font-semibold text-gray-700 my-2">{{ $t('company_info.phone') }}</span>
        <Field
          v-model="reportStore.companyInfo.phone"
          placeholder="(555) 123-4567"
          name="companyPhone"
          class="border w-full border-gray-300 bg-gray-100 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>

    </Form>
  </div>
</template>

<script setup>
import { Form, Field, ErrorMessage, defineRule } from 'vee-validate'
import { required } from '@vee-validate/rules'
import IconCompany from './icons/IconCompany.vue'
import { ref } from 'vue'
import { useReportStore } from '@/store/reportStore'

defineRule('required', required)
const reportStore = useReportStore()

const companies = [
  { name: 'TechCrap Industries', address: '123 Main St, Tech City', phone: '(555) 111-2222' },
  { name: 'MegaCorp Solutions', address: '456 Elm St, Business Town', phone: '(555) 333-4444' },
  { name: 'AlphaBeta Co.', address: '789 Oak St, Startup Ville', phone: '(555) 555-6666' },
  { name: 'FutureWorks Ltd.', address: '321 Pine St, Innovation City', phone: '(555) 777-8888' },
  { name: 'GammaTech LLC', address: '654 Maple St, Tech Hub', phone: '(555) 999-0000' },
]

const selectedCompany = ref('')

function fillCompanyInfo() {
  const company = companies.find(c => c.name === selectedCompany.value)
  if (company) {
    reportStore.companyInfo.name = company.name
    reportStore.companyInfo.address = company.address
    reportStore.companyInfo.phone = company.phone
  } else {
    reportStore.companyInfo.name = ''
    reportStore.companyInfo.address = ''
    reportStore.companyInfo.phone = ''
  }
}

function onSubmit() {
  console.log('Submitted:', reportStore.companyInfo)
}
</script>
