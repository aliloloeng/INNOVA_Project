<template>
  <nav class="card-bg px-10 py-5 center-flex mobile-box text-xs w-[365px]">
    <ul class="flex gap-6 font-bold">
      <li>
        <RouterLink to="/" class="nav-link">{{ t('home') }}</RouterLink>
      </li>
      <li>
        <RouterLink to="/report" class="nav-link">{{ t('my_report') }}</RouterLink>
      </li>
      <li>
        <RouterLink to="/machines" class="nav-link">{{ t('machines') }}</RouterLink>
      </li>
      <li>
        <RouterLink to="/shop" class="nav-link">{{ t('my_order') }}</RouterLink>
      </li>
      <li>
        <RouterLink to="/profile" class="nav-link">{{ t('profile') }}</RouterLink>
      </li>
    </ul>
  </nav>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>
