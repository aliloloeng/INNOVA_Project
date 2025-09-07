<template>
  <header class="bg-white mobile-box text-gray-700 font-semibold px-6 py-3 drop-shadow-md">
    <div class="flex justify-around items-center gap-10">
      <div>
        <p >Company Logo</p>
      </div>
      <div>
        <h1>TechCrop</h1>
      </div>
      <section class=" flex gap-3 items-center">
        <div class="flex flex-col items-end ">
          <h3 class="font-bold">{{ user[0].name }}</h3>
          <p class="font-normal text-gray-400">{{ user[0].status }}</p>
          <p class="font-normal text-gray-400">{{ user[0].job }}</p>
        </div>
        <div class="">
          <img class="w-14 rounded-full " :src="user[0].img" alt="User Avatar">
        </div>
      </section>
    </div>
  </header>
</template>
<script setup>
import { reactive } from 'vue';
import userimage from '@/assets/images/user.jpg'

  const user = reactive([
  {
    name: 'Ali',
    job: 'Developer',
    status: 'maintenance',
    img:userimage
  }
  ])
</script>
<style scoped></style>
