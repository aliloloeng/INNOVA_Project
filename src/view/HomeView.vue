<template>
  <div class="flex justify-center">
    <div class="mobile-box">
      <HeaderHomePage />
      <ImageSlider :images="slides" />
      <IndustryProApp />
      <RecentActivityComponent />
    </div>
  </div>
</template>

<script setup>
import HeaderHomePage from '@/components/Homepage/HeaderHomePage.vue';
import ImageSlider from '@/components/Homepage/ImageSlider.vue';
import RecentActivityComponent from '@/components/Homepage/RecentActivityComponent.vue';
import slider1 from '@/assets/images/slider1.jpg'
import slider2 from '@/assets/images/slider2.jpg'
import slider3 from '@/assets/images/slider3.jpg'
import IndustryProApp from '@/components/Homepage/IndustryProApp.vue';

const slides = [slider1, slider2, slider3];
</script>
