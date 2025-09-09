<template>
  <section class="bg-[#f3f4f6]   text-gray-700 mb-5">
    <nav class="flex justify-center">
      <ul class="flex gap-2 text-sm font-semibold">
        <li>
          <RouterLink
            to="/report/inspection-report"
            class="px-3 py-2 rounded-full border transition"
            :class="isActive('/report/inspection-report')
              ? 'bg-blue-500 text-white border-blue-500'
              : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-100'"
          >
            {{ $t('report_nav.inspection') }}
          </RouterLink>
        </li>
        <li>
          <RouterLink
            to="/report/services-report"
            class="px-3 py-2 rounded-full border transition"
            :class="isActive('/report/services-report')
              ? 'bg-blue-500 text-white border-blue-500'
              : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-100'"
          >
            {{ $t('report_nav.services') }}
          </RouterLink>
        </li>
      </ul>
    </nav>

    <router-view/>
  </section>
</template>

<script setup>
import { useRoute } from 'vue-router'
const route = useRoute()

function isActive(path) {
  return route.path === path
}
</script>
