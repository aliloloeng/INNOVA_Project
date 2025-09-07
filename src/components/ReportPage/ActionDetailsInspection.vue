<template>
  <div class="w-[90%] bg-white px-6 py-8 rounded-xl mb-6">

    <div class="flex items-center gap-4 mb-4">
      <div class="bg-green-200 p-2 rounded-xl w-10">
        <IconRepaireFix/>
      </div>
      <h2 class="text-xl font-bold">{{ $t('action_details.title') }}</h2>
    </div>

    <Form ref="formRef" @submit="onSubmit" class="flex-1 space-y-4">

      <div v-for="(action, index) in reportStore.actionDetails" :key="index">

        <div class="border-2 p-4">
          <h2 class="text-gray-700 font-medium mb-1">{{ $t('action_details.enter_picture') }}</h2>
          <div class="border-2 border-dashed border-green-600 rounded-lg center-flex flex-col pb-2 pt-4">
            <h4 class="text-gray-700 text-base font-medium">{{ $t('action_details.picture_entry') }}</h4>
            <p class="text-gray-500 text-sm">{{ $t('action_details.enter_picture_manually') }}</p>

            <div class="py-4 flex flex-col gap-2">
              <label
                :for="'file-upload-' + index"
                class="cursor-pointer font-normal text-sm px-4 py-2 bg-green-700 text-white rounded-full hover:bg-green-600"
              >
                {{ $t('action_details.send') }}
              </label>

              <input
                type="file"
                :id="'file-upload-' + index"
                class="hidden"
                accept="image/*"
                multiple
                @change="handleFileChange($event, index)"
              />

              <div class="flex flex-wrap gap-2">
                <img
                  v-for="(img, i) in action.pictures"
                  :key="i"
                  :src="img"
                  class="w-16 h-16 object-cover rounded-md"
                />
              </div>
            </div>
          </div>
        </div>

        <div class="flex flex-col border-b-2 border-l-2 border-r-2 p-4">
          <label class="text-gray-700 font-medium mb-1">{{ $t('action_details.day_of_week') }}</label>
          <select
            v-model="action.dayOfWeek"
            class="border border-gray-300 bg-gray-100 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
          >
            <option value="">{{ $t('action_details.select_day') }}</option>
            <option value="saturday">{{ $t('action_details.days.saturday') }}</option>
            <option value="sunday">{{ $t('action_details.days.sunday') }}</option>
            <option value="monday">{{ $t('action_details.days.monday') }}</option>
            <option value="tuesday">{{ $t('action_details.days.tuesday') }}</option>
            <option value="wednesday">{{ $t('action_details.days.wednesday') }}</option>
            <option value="thursday">{{ $t('action_details.days.thursday') }}</option>
            <option value="friday">{{ $t('action_details.days.friday') }}</option>
          </select>
        </div>


          <div class="flex flex-col  border-b-2 border-l-2 border-r-2  p-4">
            <label class="text-gray-700 font-medium mb-1">{{ $t('action_details.article_description') }}</label>
            <textarea
              v-model="action.remark"
              :placeholder="$t('action_details.article')"
              class="border border-gray-300 bg-gray-100 rounded-lg px-3 py-2 h-20 resize-none focus:outline-none focus:ring-2 focus:ring-green-400"
            ></textarea>
          </div>

          <div class="flex flex-col border-b-2 border-l-2 border-r-2 p-4 space-y-4">
            <h2 class="text-gray-700 font-medium mb-1">{{ $t('action_details.quantity_hours') }}</h2>
            <div>
            <label class="text-gray-700 font-medium mb-1">{{ $t('action_details.select_hour') }}</label>
            <select
              v-model="action.hour"
              class="border border-gray-300 bg-gray-100 rounded-lg px-3 py-2 mt-2 focus:outline-none focus:ring-2 focus:ring-green-400 w-full"
            >
              <option v-for="h in 24" :key="h" :value="h">{{ h }}</option>
            </select>
          </div>

          <div>
          <label class="text-gray-700 font-medium mb-1">{{ $t('action_details.duration') }}</label>
          <div class="flex items-center justify-center gap-2 w-full">

            <div class="flex items-center w-1/2 mt-2">
              <input
                type="number"
                min="1"
                max="24"
                v-model="action.startHour"
                placeholder="From"
                class="w-full border border-gray-300 bg-gray-100 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
              />
              <span class="ml-2 text-sm text-gray-500">
                {{ getAmPm(action.startHour) }}
              </span>
            </div>

            <span class="text-gray-600">{{ $t('action_details.until') }}</span>

            <div class="flex items-center w-1/2">
              <input
                type="number"
                min="1"
                max="24"
                v-model="action.endHour"
                placeholder="Until"
                class="w-full border border-gray-300 bg-gray-100 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
              />
              <span class="ml-2 text-sm text-gray-500">
                {{ getAmPm(action.endHour) }}
              </span>
            </div>
          </div>
        </div>
      </div>

        <div class="flex flex-col  border-b-2 border-l-2 border-r-2  p-4">
          <label class="text-gray-700 font-medium mb-1">{{ $t('action_details.status') }}</label>
          <select
            v-model="action.status"
            class="border border-gray-300 bg-gray-100 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
          >
            <option value="">{{ $t('action_details.select_status') }}</option>
            <option value="ok">{{ $t('action_details.select_status.ok') }}</option>
            <option value="not-ok">{{ $t('action_details.select_status.not-ok') }}</option>
            <option value="pending">{{ $t('action_details.select_status.pending') }}</option>
          </select>
        </div>

        <button
          type="button"
          @click="removeAction(index)"
          class="px-4 mt-6 py-2 bg-red-600 text-white rounded-full hover:bg-red-500 w-full"
        >
          {{ $t('action_details.remove_action') }}
        </button>
      </div>

      <button
        type="button"
        @click="addAction"
        class="px-4 py-2 bg-green-700 text-white rounded-full hover:bg-green-600 w-full"
      >
       {{ $t('action_details.add_new_action') }}
      </button>
    </Form>
  </div>
</template>

<script setup>
import { useReportStore } from '@/store/reportStore'
import IconRepaireFix from './icons/IconRepaireFix.vue'
import { ref } from 'vue'

const reportStore = useReportStore()
const formRef = ref(null)

function addAction() {
  reportStore.actionDetails.push({
    pictures: [],
    checkPoint: '',
    status: '',
    action: '',
    remark: '',
    dayOfWeek: '',
    hour: null,
    startHour: null,
    endHour: null
  })
}

function removeAction(index) {
  reportStore.actionDetails.splice(index, 1)
}

function handleFileChange(event, index) {
  const files = event.target.files
  if (files.length > 0) {
    const urls = Array.from(files).map(file => URL.createObjectURL(file))
    reportStore.actionDetails[index].pictures.push(...urls)
  }
}

function onSubmit() {
  console.log('Form Submitted:', reportStore.actionDetails)
}

function getAmPm(hour) {
  if (!hour) return "";
  return hour >= 12 ? "PM" : "AM";
}
</script>
