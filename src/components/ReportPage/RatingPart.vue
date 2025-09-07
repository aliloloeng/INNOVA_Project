<template>
  <div class="w-[90%] bg-white px-5 py-8 rounded-xl mb-6">
    <div class="flex items-center gap-4 mb-4">
      <div class="bg-blue-200 p-3 rounded-xl w-10">
        <IconStar/>
      </div>
      <h2 class="text-2xl font-bold">{{ $t('rating.title') }}</h2>
    </div>

    <Form ref="formRef" @submit="onSubmit" class="flex-1 space-y-4">
      <div class="flex gap-2 items-center justify-center">
        <span class="text- font-semibold text-gray-700 mt-2">{{ $t('rating.label') }}</span>

        <div class="flex gap-1 mt-2">
          <span
            v-for="star in 5"
            :key="star"
            class="cursor-pointer"
            @click="reportStore.rating = star"
          >
            <svg
              v-if="star <= reportStore.rating"
              class="w-8 h-8 text-yellow-400"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.949a1 1 0 00.95.69h4.148c.969 0 1.371 1.24.588 1.81l-3.36 2.44a1 1 0 00-.364 1.118l1.287 3.949c.3.921-.755 1.688-1.54 1.118l-3.36-2.44a1 1 0 00-1.176 0l-3.36 2.44c-.784.57-1.838-.197-1.539-1.118l1.287-3.949a1 1 0 00-.364-1.118L2.027 9.376c-.783-.57-.38-1.81.588-1.81h4.148a1 1 0 00.95-.69l1.286-3.949z"/>
            </svg>
            <svg
              v-else
              class="w-8 h-8 text-gray-300"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.949a1 1 0 00.95.69h4.148c.969 0 1.371 1.24.588 1.81l-3.36 2.44a1 1 0 00-.364 1.118l1.287 3.949c.3.921-.755 1.688-1.54 1.118l-3.36-2.44a1 1 0 00-1.176 0l-3.36 2.44c-.784.57-1.838-.197-1.539-1.118l1.287-3.949a1 1 0 00-.364-1.118L2.027 9.376c-.783-.57-.38-1.81.588-1.81h4.148a1 1 0 00.95-.69l1.286-3.949z"/>
            </svg>
          </span>
        </div>

        <ErrorMessage class="text-red-500 text-xs mt-1" name="rating">
          {{ $t('rating.error') }}
        </ErrorMessage>
      </div>
    </Form>
  </div>
</template>

<script setup>
import { Form, ErrorMessage, defineRule } from 'vee-validate'
import { required } from '@vee-validate/rules'
import IconStar from './icons/IconStar.vue'
import { useReportStore } from '@/store/reportStore'

defineRule('required', required)

const reportStore = useReportStore()

function onSubmit() {
}
</script>
