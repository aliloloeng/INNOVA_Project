<template>
  <div class="w-[90%] bg-white px-6 py-8 rounded-xl mb-6">

    <div class="flex items-center gap-4 mb-4">
      <div class="bg-blue-200 p-2 rounded-xl w-10">
        <IconRepairSparePart />
      </div>
      <h2 class="text-2xl font-bold">{{ $t('spare_parts.title') }}</h2>
    </div>

    <Form ref="formRef" @submit="onSubmit" class="flex-1 space-y-4">

      <div class="flex flex-col">
        <span class="text-xl font-semibold text-gray-700 my-2">{{ $t('spare_parts.part_name') }}</span>
        <Field
          :placeholder="$t('spare_parts.placeholders.part_name')"
          v-model="part.partName"
          name="partName"
          rules="required"
          class="border w-full border-gray-300 bg-gray-100 rounded-lg px-3 py-2 focus:outline-none"
        />
        <ErrorMessage class="text-red-500 text-xs mt-1" name="partName" />
      </div>

      <div class="flex items-center gap-4">
        <div class="flex flex-col">
          <span class="text-xl font-semibold text-gray-700 my-2">{{ $t('spare_parts.quantity') }}</span>
          <Field
            type="number"
            :placeholder="$t('spare_parts.placeholders.quantity')"
            v-model="part.quantity"
            name="quantity"
            rules="required|numeric|min_value:1"
            class="border w-full border-gray-300 bg-gray-100 rounded-lg px-2 py-2 focus:outline-none"
          />
          <ErrorMessage class="text-red-500 text-xs mt-1" name="quantity" />
        </div>

        <div class="flex flex-col">
          <span class="text-xl font-semibold text-gray-700 my-2">{{ $t('spare_parts.status') }}</span>
          <Field
            as="select"
            v-model="part.status"
            name="status"
            rules="required"
            class="border w-full border-gray-300 bg-gray-100 rounded-lg px-3 py-2 focus:outline-none"
          >
            <option value="">{{ $t('spare_parts.placeholders.select_status') }}</option>
            <option value="available">{{ $t('spare_parts.options.available') }}</option>
            <option value="not-available">{{ $t('spare_parts.options.not_available') }}</option>
            <option value="ordered">{{ $t('spare_parts.options.ordered') }}</option>
          </Field>
          <ErrorMessage class="text-red-500 text-xs mt-1" name="status" />
        </div>
      </div>
    </Form>
  </div>
</template>

<script setup>
import { reactive } from 'vue'
import { Form, Field, ErrorMessage, defineRule } from 'vee-validate'
import { required, numeric, min_value } from '@vee-validate/rules'
import { useReportStore } from '@/store/reportStore'
import IconRepairSparePart from './icons/IconRepairSparePart.vue'

defineRule('required', required)
defineRule('numeric', numeric)
defineRule('min_value', min_value)

const reportStore = useReportStore()

const part = reactive({
  partName: '',
  quantity: '',
  status: ''
})

function onSubmit() {
  reportStore.addSparePart({ ...part })
  part.partName = ''
  part.quantity = ''
  part.status = ''
}
</script>
