<template>
  <section class="bg-[#f3f4f6] mobile-box">
    <div class="p-4 ">
      <h1 class="text-3xl font-bold mb-2 text-gray-700">{{ $t('machines') }}</h1>
      <p class="font-semibold mb-6 text-gray-500">{{ $t('machines_search_description') }}</p>

      <form @submit.prevent="submitSearch" class="bg-white p-4 rounded-xl">
        <div class="relative w-full mb-5">
          <span class="absolute inset-y-0 left-3 flex items-center text-gray-400">
            <IconSearch />
          </span>
          <input
            type="text"
            v-model="searchText"
            :placeholder="$t('search_machine_placeholder')"
            class="w-full pl-10 pr-4 py-2 rounded-lg border h-[50px] border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div class="flex justify-center mb-4">
          <button
            @click="startQRScanner"
            type="submit"
            class="flex items-center justify-center gap-2 py-4 w-full bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
          >
            <IconQrCode />
            {{ $t('scan_qr_code') }}
          </button>
        </div>
        <div id="qr-reader" class="mt-4"></div>
      </form>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import { Html5Qrcode } from 'html5-qrcode'
import IconQrCode from './icons/IconQrCode.vue'
import IconSearch from './icons/IconSearch.vue'

const searchText = ref('')
let html5QrCode = null

function startQRScanner() {
  if (html5QrCode) return

  const qrRegionId = "qr-reader"
  html5QrCode = new Html5Qrcode(qrRegionId)

  html5QrCode.start(
    { facingMode: "environment" },
    {
      fps: 10,
      qrbox: 250,
    },
    qrCodeMessage => {
      console.log("QR Code detected:", qrCodeMessage)
      searchText.value = qrCodeMessage
      html5QrCode.stop()
    },
    errorMessage => {
      console.warn("QR Code scan error:", errorMessage)
    }
  ).catch(err => {
    console.error("Unable to start scanning:", err)
  })
}

function submitSearch() {
  console.log("Search submitted:", searchText.value)
}
</script>

<style scoped></style>
