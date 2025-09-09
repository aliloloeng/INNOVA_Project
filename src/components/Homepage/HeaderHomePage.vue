<template>
  <header class="card-bg px-4 pb-3 pt-6 drop-shadow-md center-flex mobile-box">
    <div class="flex justify-between items-center w-full">
      <div>
        <img
          :src="logo"
          alt="Company Logo"
          class="w-24 object-cover"
        >
      </div>

      <div>
        <p class="text-sm">{{ $t('company_name') }}</p>
      </div>

      <section class="flex gap-3 items-center">
        <div class="flex flex-col items-end">
          <h3 class="font-bold">{{ user[0].name }}</h3>
          <p class="text-sm font-normal">{{ $t(`status.${user[0].status}`) }}</p>
          <p class="text-sm font-normal">{{ $t(`job.${user[0].job}`) }}</p>
        </div>
        <div>
          <img
            class="w-14 h-14 rounded-full border object-cover shadow-sm"
            :src="user[0].img"
            alt="User Avatar"
          >
        </div>
      </section>
    </div>
  </header>
</template>

<script setup>
import { reactive } from 'vue';
import userimage from '@/assets/images/user.jpg'
import logo from '@/assets/images/logoHome.jpg'

const user = reactive([
  {
    name: 'Ali',
    job: 'Developer',
    status: 'maintenance',
    img: userimage
  }
])
</script>
