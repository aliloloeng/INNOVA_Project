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

        <!-- آپلود عکس -->
        <div class="border-2 p-4">
          <h2 class="text-gray-700 font-medium mb-1">{{ $t('action_details.enter_picture') }}</h2>
          <div class="border-2 border-dashed border-green-600 rounded-lg center-flex flex-col pb-2 pt-4">
            <h4 class="text-gray-700 text-base font-medium">{{ $t('action_details.picture_entry') }}</h4>
            <p class="text-gray-500 text-sm">{{ $t('action_details.enter_picture_manually') }}</p>

            <div class="py-4 flex flex-col gap-4">
            <div class="flex justify-center items-center">
              <label
                :for="'file-upload-' + index"
                class="cursor-pointer font-normal text-sm px-4 py-2 bg-green-700 text-white rounded-full hover:bg-green-600 inline-block"
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
            </div>

            <div class="flex flex-wrap items-center justify-center gap-2">
              <div
                v-for="(img, i) in action.pictures"
                :key="i"
                class="relative w-16 h-16"
              >
                <img :src="img" class="w-full h-full object-cover rounded-md" />
                <button
                  type="button"
                  @click="removeImage(index, i)"
                  class="absolute -top-2 -right-2 bg-red-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs leading-none hover:bg-red-500"
                >
                  ✕
                </button>
              </div>
            </div>
          </div>

          </div>
        </div>

        <!-- انتخاب روز هفته -->
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

        <!-- توضیحات -->
        <div class="flex flex-col border-b-2 border-l-2 border-r-2 p-4">
          <label class="text-gray-700 font-medium mb-1">{{ $t('action_details.article_description') }}</label>
          <textarea
            v-model="action.remark"
            :placeholder="$t('action_details.article')"
            class="border border-gray-300 bg-gray-100 rounded-lg px-3 py-2 h-20 resize-none focus:outline-none focus:ring-2 focus:ring-green-400"
          ></textarea>
        </div>

        <!-- ساعت و بازه -->
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
            <label class="text-gray-700 font-medium">{{ $t('action_details.duration') }}</label>
            <div class="flex items-center justify-center gap-2 w-full mt-4">

              <!-- Start Hour -->
              <div class="flex items-center w-1/2">
                <input
                  type="number"
                  min="0"
                  max="24"
                  v-model="action.startHour"
                  :placeholder="$t('action_details.from')"
                  class="w-full border border-gray-300 bg-gray-100 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
                  @input="validateHour(action, 'startHour')"
                />
              </div>

              <div>
                <span class="text-gray-700">{{ $t('action_details.until') }}</span>
              </div>

              <!-- End Hour -->
              <div class="flex items-center w-1/2">
                <input
                  type="number"
                  min="0"
                  max="24"
                  v-model="action.endHour"
                  :placeholder="$t('action_details.until')"
                  class="w-full border border-gray-300 bg-gray-100 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
                  @input="validateHour(action, 'endHour')"
                />
              </div>

            </div>
          </div>

        </div>

        <!-- وضعیت -->
        <div class="flex flex-col border-b-2 border-l-2 border-r-2 p-4">
          <label class="text-gray-700 font-medium mb-1">{{ $t('action_details.status') }}</label>
          <select
            v-model="action.status"
            class="border border-gray-300 bg-gray-100 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
          >
            <option value="">{{ $t('action_details.select_status') }}</option>
            <option value="ok">{{ $t('action_details.statuses.ok') }}</option>
            <option value="not_ok">{{ $t('action_details.statuses.not_ok') }}</option>
            <option value="pending">{{ $t('action_details.statuses.pending') }}</option>
          </select>
        </div>

        <!-- دکمه حذف اکشن -->
        <button
          type="button"
          @click="removeAction(index)"
          class="px-4 mt-6 py-2 bg-red-600 text-white rounded-full hover:bg-red-500 w-full"
        >
          {{ $t('action_details.remove_action') }}
        </button>
      </div>

      <!-- دکمه اضافه کردن اکشن جدید -->
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

function removeImage(actionIndex, imageIndex) {
  reportStore.actionDetails[actionIndex].pictures.splice(imageIndex, 1)
}

function onSubmit() {
  console.log('Form Submitted:', reportStore.actionDetails)
}
function validateHour(action, field) {
    if (action[field] > 24) {
    action[field] = 24
  }
  if (action[field] < 0) {
    action[field] = 0
  }
  // محدودیت 0 تا 24
  if (action[field] > 24) action[field] = 24
  if (action[field] < 0) action[field] = 0

  // اطمینان از اینکه endHour کمتر از startHour نباشه
  if (field === 'endHour' && action.startHour != null && action.endHour < action.startHour) {
    action.endHour = action.startHour
  }

  // اطمینان از اینکه startHour بیشتر از endHour نباشه
  if (field === 'startHour' && action.endHour != null && action.startHour > action.endHour) {
    action.startHour = action.endHour
  }
}

</script>
