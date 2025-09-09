<template>
  <header class="bg-white mobile-box  text-gray-700 font-semibold pt-6 px-4 py-3 flex justify-between items-center shadow-md relative z-50">
    <RouterLink to="/shop">
      <IconArrow class="w-6 h-6"/>
    </RouterLink>

    <h1 class="text-lg font-bold text-gray-700">{{ $t('my_orders') }}</h1>

    <button @click="toggleMenu" class="focus:outline-none">
      <component :is="menuOpen ? IconClose : IconVerticalMenu" class="w-6 h-6"/>
    </button>
  </header>

  <div
    v-if="menuOpen"
    class="fixed inset-0 bg-opacity-40 z-40 transition-opacity duration-300"
    @click="toggleMenu"
  ></div>

  <div
    class="fixed top-0 left-0 h-full w-64 bg-white shadow-lg p-6 z-50 transform transition-transform duration-300"
    :class="menuOpen ? 'translate-x-0' : '-translate-x-full'"
  >
    <h2 class="text-xl font-bold mb-6">{{ $t('menu') }}</h2>
    <ul class="space-y-4">
      <li>
        <RouterLink to="/" class="block hover:text-blue-500 transition">
          {{ $t('home') }}
        </RouterLink>
      </li>
      <li>
        <RouterLink to="/machines" class="block hover:text-blue-500 transition">
          {{ $t('machines') }}
        </RouterLink>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import IconClose from './Icons/IconClose.vue'
import IconArrow from './Icons/IconArrow.vue'
import IconVerticalMenu from './Icons/IconVerticalMenu.vue'

const menuOpen = ref(false)

function toggleMenu() {
  menuOpen.value = !menuOpen.value
}
</script>
