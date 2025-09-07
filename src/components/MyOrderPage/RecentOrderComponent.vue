<template>
  <div class="mobile-box bg-[#f3f4f6] ">
    <div class="px-4">
      <h1 class="text-xl font-semibold text-gray-600">{{ $t("recent_order") }}</h1>
    </div>

    <RecentOrderItemsComponent :orders="orders" />
  </div>
</template>

<script setup>
import { reactive } from 'vue'
import RecentOrderItemsComponent from './RecentOrderItemsComponent.vue';
import headphone from '@/assets/images/headphone.jpg'
import powerbank from '@/assets/images/powerbank.jpg'
import smartphone from '@/assets/images/smartphone.jpg'
import smartwatch from '@/assets/images/smartwatch.jpg'

const orders = reactive([
  {
    id: 1089,
    placedAt: "2023-07-15",
    status: "Accepted",
    items: {
      id: "sku-case-premium",
      name: "Premium Smartphone Case",
      type: "Accessories",
      Qyt: 1,
      unitPrice: 24.99,
      imageUrl: smartphone ,
    },
  },
  {
    id: 1076,
    placedAt: "2023-07-10",
    status: "Pending",
    items: {
      id: "sku-headphones-wireless",
      name: "Wireless Headphones",
      type: "Electronics",
      Qyt: 1,
      unitPrice: 89.99,
      imageUrl: headphone ,
    },
  },
  {
    id: 1065,
    placedAt: "2023-07-05",
    status: "Cancelled by User",
    items: {
      id: "sku-watch-fitness",
      name: "Fitness Smartwatch",
      type: "Wearables",
      Qyt: 1,
      unitPrice: 129.99,
      imageUrl: smartwatch,
    },
  },
  {
    id: 1052,
    placedAt: "2023-06-28",
    status: "Cancelled by Admin",
    items: {
      id: "sku-powerbank-portable",
      name: "Portable Power Bank",
      type: "Accessories",
      Qyt: 2,
      unitPrice: 45.98,
      imageUrl: powerbank ,
    },
  },
]);

</script>
