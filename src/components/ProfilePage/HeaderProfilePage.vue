<template>
  <header
    class="bg-white gap-8 text-gray-700 font-semibold px-4 pb-3 pt-6 flex justify-between items-center drop-shadow-md relative z-50 mobile-box "
  >
    <RouterLink to="/">
      <IconArrow class="w-6 h-6" />
    </RouterLink>

    <h1 class="text-lg font-bold text-gray-700">
      {{ t("support_center") }}
    </h1>

    <div class="flex items-center gap-3">

      <button
        @click="toggleLanguage"
        class="bg-gray-200 px-2 py-1 rounded-lg text-xs font-medium hover:bg-gray-300"
      >
        {{ locale.toUpperCase() }}
      </button>

    </div>
  </header>
</template>

<script setup>
// import { ref } from "vue"
import { useI18n } from "vue-i18n"
import { useRoute, useRouter } from "vue-router"

// import IconVerticalMenu from "./Icons/IconVerticalMenu.vue"
// import IconClose from "./Icons/IconClose.vue"
import IconArrow from "./Icons/IconArrow.vue"

// const menuOpen = ref(false)
// function toggleMenu() {
//   menuOpen.value = !menuOpen.value
// }

const { locale, t } = useI18n()
const route = useRoute()
const router = useRouter()

function toggleLanguage() {
  const languages = ["de", "it", "en"]
  const currentIndex = languages.indexOf(locale.value)
  const newLang = languages[(currentIndex + 1) % languages.length]

  locale.value = newLang
  router.push({
    path: route.path,
    query: { ...route.query, lang: newLang }
  })
}


if (route.query.lang) {
  locale.value = route.query.lang
}
</script>
