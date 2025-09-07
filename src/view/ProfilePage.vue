<template>
  <div class="flex justify-center ">
    <div class="mobile-box">
      <HeaderProfilePage />
      <UserProfileComponent />
      <section class=" m-auto">
        <nav>
          <ul
            class="flex space-x-4 my-4 text-base font-semibold overflow-x-auto whitespace-nowrap pb-5"
          >
            <li v-for="tab in tabs" :key="tab.path" class="flex-shrink-0">
              <RouterLink
                :to="tab.path"
                class="px-4 py-1 text-gray-700 hover:text-blue-500 focus:text-blue-500"
                :class="isActive(tab.path) ? 'text-blue-500 border-b-2 border-blue-500' : ''"
              >
                {{ t(tab.label) }}
              </RouterLink>
            </li>
          </ul>
        </nav>
        <router-view />
      </section>
    </div>
  </div>
</template>

<script setup>
import HeaderProfilePage from '@/components/ProfilePage/HeaderProfilePage.vue'
import UserProfileComponent from '@/components/ProfilePage/UserProfileComponent.vue'
import { useRoute } from 'vue-router'
import { useI18n } from 'vue-i18n'

const route = useRoute()
const { t } = useI18n()

const tabs = [
  { path: '/profile/myTicket', label: 'my_ticket' },
  { path: '/profile/myOrderPage', label: 'my_order' },
  { path: '/profile/myReportPage', label: 'my_report' },
  { path: '/profile/massageAdmin', label: 'message_admin' }
]

function isActive(path) {
  return route.path === path
}
</script>
