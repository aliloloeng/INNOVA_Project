<template>
  <section class="bg-[#f3f4f6] mobile-box py-6">
    <div
      class="flex  items-center space-x-4 p-3 bg-white w-[90%] mx-auto rounded-xl shadow-md"
    >
      <div class="relative">
        <img
          :src="userImage"
          alt="User Avatar"
          :class="[
            'rounded-full border-2 border-blue-600 object-cover aspect-square cursor-pointer',
            locale === 'it' ? 'w-36' : 'w-35'
          ]"
          @click="triggerFileInput"
        />
        <input
          type="file"
          accept="image/*"
          ref="fileInput"
          class="hidden"
          @change="handleImageChange"
        />
      </div>

      <div class="flex flex-col">
        <p class="font-bold text-lg text-gray-800">{{ name }}</p>
        <p class="text-sm text-gray-500">{{ email }}</p>

        <div>
          <span
            class="inline-block px-3 py-1 text-xs font-medium rounded-full"
            :class="status === 'Active' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'"
          >
            {{ status === 'Active' ? t("active") : t("inactive") }}
          </span>
          <span class="text-xs text-gray-400 mt-1 ml-3">
            {{ t("member_since") }} {{ date }}
          </span>

          <button
            @click="forgotPassword"
            class="text-xs text-blue-600 hover:underline ml-3"
          >
            {{ t("forgot_password") }}
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue"
import { useI18n } from "vue-i18n"
import defaultUser from "@/assets/images/user.jpg"

defineProps({
  name: { type: String, default: "John Doe" },
  email: { type: String, default: "john.doe@email.com" },
  date: { type: String, default: "Sep 2023" },
  status: { type: String, default: "Active" }
})

const { t,locale } = useI18n()

const userImage = ref(defaultUser)
const fileInput = ref(null)

function triggerFileInput() {
  fileInput.value.click()
}

function handleImageChange(e) {
  const file = e.target.files[0]
  if (file) {
    const reader = new FileReader()
    reader.onload = (event) => {
      userImage.value = event.target.result
    }
    reader.readAsDataURL(file)
  }
}

function forgotPassword() {
  alert(t("redirect_forgot_password"))
}
</script>
