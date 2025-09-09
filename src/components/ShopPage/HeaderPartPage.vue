<template>
  <header class="bg-white mobile-box text-gray-700 px-4 pb-3 pt-6 flex items-center drop-shadow-md">
    <RouterLink to="/" class="mr-2">
      <IconArrow class="w-6 h-6" />
    </RouterLink>

    <div class="flex justify-between w-full">
      <div class="flex items-center gap-2">
        <h2 class="font-bold text-base sm:text-xl">{{ $t('parts_shop') }}</h2>
      </div>

      <div class="flex items-center gap-6">
        <RouterLink to="/my-order" class="relative">
          <IconShop/>

          <span v-if="cartCount > 0" class="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
            {{ cartCount }}
          </span>
        </RouterLink>
      </div>
    </div>
  </header>
</template>

<script setup>
import { computed } from 'vue'
import { useCartStore } from '@/store/CartStore'
import IconArrow from "./Icons/IconArrowPart.vue";
import IconShop from "./Icons/IconShop.vue";

const cartStore = useCartStore()
const cartCount = computed(() => cartStore.totalCount)
</script>
