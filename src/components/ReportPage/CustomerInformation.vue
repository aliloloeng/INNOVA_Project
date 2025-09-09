<template>
  <div class="w-[90%] bg-white px-6 py-8 rounded-xl mb-6">
    <div class="flex items-center gap-4 mb-4">
      <div class="bg-blue-200 p-2 rounded-xl w-10">
        <IconCustomerEng class="w-full h-auto"/>
      </div>
      <h2 class="text-xl font-bold">{{ $t('Customer_Information') }}</h2>
    </div>

    <Form ref="formRef" @submit="onSubmit" class="flex-1 space-y-4">

      <div class="flex flex-wrap gap-4">
        <div class="flex flex-col flex-1 min-w-[200px]">
          <span class="text-lg font-semibold text-gray-700 my-2 truncate">{{ $t('full_name') }}</span>
          <Field
            v-model="reportStore.customer.name"
            name="name"
            rules="required"
            class="border w-full border-gray-300 bg-gray-100 rounded-lg px-3 py-2 focus:outline-none "
          />
          <ErrorMessage class="text-red-500 text-xs mt-1" name="name" />
        </div>

        <div class="flex flex-col flex-1 min-w-[200px]">
          <span class="text-lg font-semibold text-gray-700 my-2 truncate">{{ $t('national_id') }}</span>
          <Field
            v-model="reportStore.customer.nationalId"
            name="nationalId"
            rules="required|numeric|length:10"
            class="border w-full border-gray-300 bg-gray-100 rounded-lg px-3 py-2 focus:outline-none "
          />
          <ErrorMessage class="text-red-500 text-xs mt-1" name="nationalId" />
        </div>
      </div>

      <div class="flex gap-4">
        <div class="flex flex-col">
          <span class="text-lg font-semibold text-gray-700 my-2">{{ $t('email') }}</span>
          <Field
            v-model="reportStore.customer.email"
            name="email"
            rules="required|email"
            class="border w-full border-gray-300 bg-gray-100 rounded-lg px-3 py-2 focus:outline-none "
          />
          <ErrorMessage class="text-red-500 text-xs mt-1" name="email" />
        </div>

        <div class="flex flex-col">
          <span class="text-lg font-semibold text-gray-700 my-2">{{ $t('phone') }}</span>
          <Field
            v-model="reportStore.customer.phone"
            name="phone"
            rules="phone"
            class="border w-full border-gray-300 bg-gray-100 rounded-lg px-3 py-2 focus:outline-none "
          />
          <ErrorMessage class="text-red-500 text-xs mt-1" name="phone" />
        </div>
      </div>

      <div class="flex flex-col">
        <span class="text-lg font-semibold text-gray-700 my-2">{{ $t('address') }}</span>
        <Field
          v-model="reportStore.customer.address"
          name="address"
          rules="required"
          class="border w-full border-gray-300 bg-gray-100 rounded-lg px-3 pb-14 pt-2 focus:outline-none "
        />
        <ErrorMessage class="text-red-500 text-xs mt-1" name="address" />
      </div>

    </Form>
  </div>
</template>


<script setup>
import { Form, Field, ErrorMessage, defineRule } from 'vee-validate'
import { required, email, numeric, length } from '@vee-validate/rules'
import IconCustomerEng from './icons/IconCustomerEng.vue'
import { useReportStore } from '@/store/reportStore'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

defineRule('required', required)
defineRule('email', email)
defineRule('numeric', numeric)
defineRule('length', length)
defineRule('phone', value => {
  if (!value) return 'Phone is required';
  const pattern = /^\+?[0-9]{10,15}$/;
  return pattern.test(value) ? true : 'Phone number is invalid';
});

const reportStore = useReportStore()

if (!reportStore.customer) {
  reportStore.customer = {
    name: '',
    nationalId: '',
    email: '',
    phone: '',
    address: ''
  }
}

function onSubmit() {
  console.log(t('customer_info_submitted_alert') + JSON.stringify(reportStore.customer, null, 2))
}

</script>
