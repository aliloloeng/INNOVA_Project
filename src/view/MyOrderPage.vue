<template>
  <div class="flex justify-center">
    <div class="mobile-box">
      <HeaderOrderPage/>
      <UserOrderComponent/>
      <NumberOfOrdersPlaced/>
      <RecentOrderComponent/>
    </div>
  </div>
</template>

<script setup>
import HeaderOrderPage from '@/components/MyOrderPage/HeaderOrderPage.vue'
import NumberOfOrdersPlaced from '@/components/MyOrderPage/NumberOfOrdersPlaced.vue'
import RecentOrderComponent from '@/components/MyOrderPage/RecentOrderComponent.vue';
import UserOrderComponent from '@/components/MyOrderPage/UserOrderComponent.vue'
</script>
