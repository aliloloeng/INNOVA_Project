<template>
  <header
    class="bg-white gap-10text-gray-700 font-semibold px-2 py-3 flex justify-between items-center drop-shadow-md relative z-50 w-[100%] max-w-[375px] mx-auto"
  >
    <!-- دکمه برگشت -->
    <RouterLink to="/">
      <IconArrow class="w-6 h-6" />
    </RouterLink>

    <!-- عنوان -->
    <h1 class="text-xl font-bold text-gray-700">
      {{ t("support_center") }}
    </h1>

    <!-- بخش راست (تغییر زبان + منو) -->
    <div class="flex items-center gap-3">
      <!-- دکمه تغییر زبان -->
      <button
        @click="toggleLanguage"
        class="bg-gray-200 px-2 py-1 rounded-lg text-xs font-medium hover:bg-gray-300"
      >
        {{ locale.toUpperCase() }}
      </button>

      <!-- دکمه باز/بستن منو -->
      <button @click="toggleMenu" class="focus:outline-none">
        <component :is="menuOpen ? IconClose : IconVerticalMenu" class="w-6 h-6" />
      </button>
    </div>
  </header>

  <!-- پس‌زمینه تاریک -->
  <div
    v-if="menuOpen"
    class="fixed inset-0 bg-opacity-40 z-40 transition-opacity duration-300"
    @click="toggleMenu"
  ></div>

  <!-- منوی کناری -->
  <div
    class="fixed top-0 left-0 h-full w-64 bg-white shadow-lg p-6 z-50 transform transition-transform duration-300"
    :class="menuOpen ? 'translate-x-0' : '-translate-x-full'"
  >
    <h2 class="text-xl font-bold mb-6">{{ t("profile") }}</h2>
    <ul class="space-y-4">
      <li>
        <RouterLink to="/" class="block hover:text-blue-500 transition">
          {{ t("home") }}
        </RouterLink>
      </li>
      <li>
        <RouterLink to="/machines" class="block hover:text-blue-500 transition">
          {{ t("machines") }}
        </RouterLink>
      </li>
      <li>
        <RouterLink to="/about" class="block hover:text-blue-500 transition">
          {{ t("about") }}
        </RouterLink>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref } from "vue"
import { useI18n } from "vue-i18n"
import { useRoute, useRouter } from "vue-router"

import IconVerticalMenu from "./Icons/IconVerticalMenu.vue"
import IconClose from "./Icons/IconClose.vue"
import IconArrow from "./Icons/IconArrow.vue"

const menuOpen = ref(false)
function toggleMenu() {
  menuOpen.value = !menuOpen.value
}

const { locale, t } = useI18n()
const route = useRoute()
const router = useRouter()

// تغییر زبان
function toggleLanguage() {
  const newLang = locale.value === "de" ? "it" : "de"
  locale.value = newLang
  router.push({
    path: route.path,
    query: { ...route.query, lang: newLang }
  })
}

// sync زبان با URL
if (route.query.lang) {
  locale.value = route.query.lang
}
</script>
