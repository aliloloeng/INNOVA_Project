<template>
  <div class="w-[90%] bg-white px-6 py-8 rounded-xl mb-6">

    <div class="flex items-center gap-4 mb-4">
      <div class="p-2 bg-purple-200 rounded-xl w-10">
        <IconCheck class="w-full h-auto"/>
      </div>
      <h2 class="text-xl font-bold">{{ $t("checklist") }}</h2>
    </div>

    <Form ref="formRef" @submit.prevent="onSubmit" class="flex-1 space-y-4">

      <!-- دکمه انتخاب AI -->
      <div class="flex justify-end mb-4">
        <button
          type="button"
          @click="useAI = !useAI"
          class="bg-purple-600 text-white w-full py-2 rounded-full hover:bg-purple-500 transition"
        >
          {{ useAI ? $t("show_less") : $t("send_to_ai") }}
        </button>
      </div>

      <!-- بخش AI فقط وقتی useAI = true باشه نمایش داده میشه -->
      <div v-if="useAI">
        <div class="flex flex-col mb-4">
          <label class="text-gray-700 font-semibold mb-1">{{ $t("your_input") }}</label>
          <textarea
            v-model="userInput"
            :placeholder="$t('your_input_placeholder')"
            class="border w-full border-gray-300 bg-gray-100 rounded-lg px-3 py-2 focus:outline-none"
            rows="3"
          ></textarea>
        </div>

        <div class="flex gap-2 mb-4">
          <button
            type="button"
            @click="sendToAI"
            class="flex bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-500"
          >
            {{ $t("send_to_ai") }}
          </button>
        </div>

        <div class="mt-6 flex flex-col ">
          <span class="text-xl font-semibold text-gray-700 mb-2">{{ $t("ai_result") }}</span>
          <textarea
            v-model="aiResult"
            class="border w-full border-gray-300 bg-gray-100 rounded-lg px-3 py-2 focus:outline-none resize-none mb-4"
            rows="6"
          ></textarea>
        </div>
      </div>

      <!-- آیتم‌های چک لیست -->
      <div v-for="(item, index) in reportStore.checklist" :key="index" class="flex flex-col pb-4 mt-8">
        <span class="text-xl font-semibold text-gray-700 my-2">
          {{ $t("item") }} {{ index + 1 }}
        </span>
        <Field
          v-model="reportStore.checklist[index]"
          :placeholder="$t('enter_item')"
          :name="'item-' + index"
          rules="required"
          class="border w-full border-gray-300 bg-gray-100 rounded-lg px-3 py-2 focus:outline-none"
        />
        <ErrorMessage class="text-red-500 text-xs mt-1" :name="'item-' + index" />
      </div>

      <button
        type="button"
        @click="addItem"
        class="flex bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-500 mt-2"
      >
        <IconPlus/>
        {{ $t("add_item") }}
      </button>

    </Form>

  </div>
</template>

<script setup>
import { ref } from 'vue'
import { Form, Field, ErrorMessage, defineRule } from 'vee-validate'
import { required } from '@vee-validate/rules'
import IconCheck from './icons/IconCheck.vue'
import IconPlus from './icons/IconPlus.vue'
import { useReportStore } from '@/store/reportStore'
import { useI18n } from 'vue-i18n'

defineRule('required', required)

const reportStore = useReportStore()
const userInput = ref('')
const aiResult = ref('')
const useAI = ref(false) // 👈 کنترل نمایش بخش AI

const { t } = useI18n()

if (reportStore.checklist.length === 0) {
  reportStore.checklist.push('')
}

function addItem() {
  reportStore.checklist.push('')
}

async function sendToAI() {
  const inputText = userInput.value + "\n" + reportStore.checklist.join('\n')
  const fallbackChecklist = [...t("fallback_checklist")]

  try {
    const response = await fetch("https://api.openai.com/v1/responses", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer YOUR_API_KEY_HERE"
      },
      body: JSON.stringify({
        model: "gpt-4.1",
        input: inputText
      })
    })

    const data = await response.json()
    const aiText = data.output?.[0]?.content?.[0]?.text || data.output_text

    if (aiText) {
      aiResult.value = aiText
    } else {
      aiResult.value = "No response from AI. Generating fallback checklist..."
      reportStore.checklist = fallbackChecklist
    }

  } catch (error) {
    console.error(error)
    aiResult.value = "Error contacting AI. Generating fallback checklist..."
    reportStore.checklist = fallbackChecklist
  }
}

function onSubmit() {
  alert(t("checklist_submitted_alert") + JSON.stringify(reportStore.checklist, null, 2))
}
</script>
