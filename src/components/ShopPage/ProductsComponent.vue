<template>
  <section class="mobile-box p-4 bg-[#f3f4f6]">

    <div class="relative bg-white rounded-xl overflow-hidden mb-6">
      <input
        v-model="searchQuery"
        type="text"
        :placeholder="$t('search_parts')"
        class="w-full pl-10 pr-4 py-2 border border-gray-300 focus:outline-none focus:ring focus:ring-blue-700"
      />
      <IconSearchBoxComponent class="absolute left-3 text-gray-400" />
    </div>

    <div class="grid grid-cols-2 gap-4">
      <ProductsItemsComponent
        v-for="(product, index) in filteredProducts"
        :key="index"
        :item="product"
      />
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from "vue"
import ProductsItemsComponent from "./ProductsItemsComponent.vue"
import IconSearchBoxComponent from "./Icons/IconSearchBoxComponent.vue"

import HydraulicPumpHP from '@/assets/images/HydraulicPumpHP-200.jpg'
import ElectricalMotorEm from '@/assets/images/ElectricalMotorEm-150.png'
import BallBearingBB from '@/assets/images/BallBearingBB-45.jpg'
import OilFilterOF from '@/assets/images/OilFilterOF30.jpg'
import PressureValvePV from '@/assets/images/PressureValvePV-80.jpg'
import PowerCablePC from '@/assets/images/PowerCablePC100.jpg'

const searchQuery = ref("")

const products = ref([
  { name: "Hydraulic Pump HP-200", categories:"Hydraulic System", price: 1250, Qty: 15, image: HydraulicPumpHP },
  { name: "Electrical Motor Em-150", categories:"Electrical Component", price: 890, Qty: 3, image: ElectricalMotorEm },
  { name: "Ball Bearing BB-45", categories:"Mechanical Part", price: 125, Qty: 50, image: BallBearingBB },
  { name: "Oil Filter OF-30", categories:"Filter System", price: 45, Qty: 0, image: OilFilterOF },
  { name: "Pressure Valve PV-80", categories:"Hydraulic System", price: 320, Qty: 25, image: PressureValvePV },
  { name: "Power Cable PC-100", categories:"Electrical Component", price: 75, Qty: 100, image: PowerCablePC },
])

const filteredProducts = computed(() => {
  if (!searchQuery.value) return products.value
  return products.value.filter((p) =>
    p.name.toLowerCase().includes(searchQuery.value.toLowerCase())
  )
})
</script>
