<template>
  <section class="bg-[#f3f4f6] p-1 mobile-box">
    <div class="relative overflow-hidden rounded-xl shadow-lg my-10 mb-6 mx-4">
      <!-- Slides -->
      <div
        class="flex transition-transform duration-500"
        :style="{ transform: `translateX(-${currentIndex * 100}%)` }"
      >
        <div
          v-for="(image, index) in images"
          :key="index"
          class="flex-shrink-0 w-full h-64 bg-gray-200"
        >
          <img
            :src="image"
            :alt="`Slide ${index + 1}`"
            class="w-full h-full object-cover"
          />
        </div>
      </div>

      <!-- Indicators -->
    </div>
    <div class="flex justify-center gap-2 mb-5">
      <span
        v-for="(image, index) in images"
        :key="index"
        :class="{
          'w-3 h-3 rounded-full transition-colors duration-300': true,
          'bg-white': currentIndex !== index,
          'bg-blue-500': currentIndex === index
        }"
      ></span>
    </div>
  </section>
</template>


<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const props = defineProps({
  images: { type: Array, required: true },
  autoPlay: { type: Boolean, default: true },
  autoPlayDelay: { type: Number, default: 3000 }
})

const currentIndex = ref(0);
let timer = null;

function nextSlide() {
  currentIndex.value = (currentIndex.value + 1) % props.images.length;
}

onMounted(() => {
  if(props.autoPlay) timer = setInterval(nextSlide, props.autoPlayDelay);
})

onUnmounted(() => {
  if(timer) clearInterval(timer);
})
</script>

