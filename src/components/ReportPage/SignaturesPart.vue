<template>
  <div class="w-[90%] bg-white px-6 py-8 rounded-xl mb-6">
    <div class="flex items-center gap-4 mb-6">
      <div class="bg-blue-200 p-2 rounded-xl w-10">
        <IconSignature />
      </div>
      <h2 class="text-2xl font-bold">{{ $t('signatures.title') }}</h2>
    </div>

    <div class="flex flex-col">
      <!-- Customer -->
      <div class="flex-1 mb-6">
        <h3 class="text-lg font-semibold mb-2">{{ $t('signatures.customer') }}</h3>
        <canvas
          ref="customerCanvas"
          class="border border-gray-300 rounded-lg bg-gray-50 cursor-crosshair w-full"
          height="150"
          @mousedown="startDrawing($event, 'customer')"
          @mousemove="draw($event, 'customer')"
          @mouseup="stopDrawing('customer')"
          @mouseleave="stopDrawing('customer')"
          @touchstart.prevent="startDrawingTouch($event, 'customer')"
          @touchmove.prevent="drawTouch($event, 'customer')"
          @touchend="stopDrawing('customer')"
        ></canvas>
        <div class="mt-4 flex justify-end">
          <button
            @click="clearSignature('customer')"
            class="w-full py-3 bg-blue-500 text-white text-sm rounded-lg hover:bg-blue-600 transition"
          >
            {{ $t('signatures.clear') }}
          </button>
        </div>
      </div>

      <!-- Engineer -->
      <div class="flex-1">
        <h3 class="text-lg font-semibold mb-2">{{ $t('signatures.engineer') }}</h3>
        <canvas
          ref="engineerCanvas"
          class="border border-gray-300 rounded-lg bg-gray-50 cursor-crosshair w-full"
          height="150"
          @mousedown="startDrawing($event, 'engineer')"
          @mousemove="draw($event, 'engineer')"
          @mouseup="stopDrawing('engineer')"
          @mouseleave="stopDrawing('engineer')"
          @touchstart.prevent="startDrawingTouch($event, 'engineer')"
          @touchmove.prevent="drawTouch($event, 'engineer')"
          @touchend="stopDrawing('engineer')"
        ></canvas>
        <div class="mt-4 flex justify-end">
          <button
            @click="clearSignature('engineer')"
            class="w-full py-3 bg-blue-500 text-white text-sm rounded-lg hover:bg-blue-600 transition"
          >
            {{ $t('signatures.clear') }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import IconSignature from './icons/IconSignature.vue'
import { useReportStore } from '@/store/reportStore'

const reportStore = useReportStore()

const customerCanvas = ref(null)
const engineerCanvas = ref(null)
let ctxMap = { customer: null, engineer: null }
let drawingMap = { customer: false, engineer: false }

function startDrawing(e, type) {
  const canvas = type === 'customer' ? customerCanvas.value : engineerCanvas.value
  ctxMap[type] = canvas.getContext('2d')
  ctxMap[type].strokeStyle = '#000'
  ctxMap[type].lineWidth = 2
  ctxMap[type].lineCap = 'round'
  ctxMap[type].beginPath()
  ctxMap[type].moveTo(e.offsetX, e.offsetY)
  drawingMap[type] = true
}

function draw(e, type) {
  if (!drawingMap[type]) return
  ctxMap[type].lineTo(e.offsetX, e.offsetY)
  ctxMap[type].stroke()
}

function stopDrawing(type) {
  drawingMap[type] = false
  const canvas = type === 'customer' ? customerCanvas.value : engineerCanvas.value
  reportStore.signatures[type] = canvas.toDataURL()
}

function startDrawingTouch(e, type) {
  const touch = e.touches[0]
  const canvas = type === 'customer' ? customerCanvas.value : engineerCanvas.value
  const rect = canvas.getBoundingClientRect()
  ctxMap[type] = canvas.getContext('2d')
  ctxMap[type].strokeStyle = '#000'
  ctxMap[type].lineWidth = 2
  ctxMap[type].lineCap = 'round'
  ctxMap[type].beginPath()
  ctxMap[type].moveTo(touch.clientX - rect.left, touch.clientY - rect.top)
  drawingMap[type] = true
}

function drawTouch(e, type) {
  if (!drawingMap[type]) return
  const touch = e.touches[0]
  const canvas = type === 'customer' ? customerCanvas.value : engineerCanvas.value
  const rect = canvas.getBoundingClientRect()
  ctxMap[type].lineTo(touch.clientX - rect.left, touch.clientY - rect.top)
  ctxMap[type].stroke()
}

function clearSignature(type) {
  const canvas = type === 'customer' ? customerCanvas.value : engineerCanvas.value
  if (canvas) {
    const ctx = canvas.getContext('2d')
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    reportStore.signatures[type] = null
  }
}
</script>
