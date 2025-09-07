<template>
  <section class="w-full">
    <div
      class="bg-white rounded-xl flex-1 items-center shadow-sm hover:shadow-md transition"
    >
      <div class="relative">
        <img :src="item.image" alt="part" class="w-full object-cover rounded-t-lg" />
        <div
          class="absolute top-2 right-1 px-2 py-1 rounded-full text-xs font-semibold"
          :class="{
            'bg-red-100 text-red-600': item.Qty === 0,
            'bg-yellow-100 text-yellow-600': item.Qty > 0 && item.Qty < 5,
            'bg-green-100 text-green-600': item.Qty >= 5
          }"
        >
          {{ item.Qty === 0 ? $t('out_of_stock') : item.Qty < 5 ? $t('low_stock') : $t('in_stock') }}
        </div>
      </div>

      <div class="px-3">
        <div class="flex-1">
          <div>
            <h2 class="font-semibold text-gray-700 h-15 text-lg my-2">{{ $t(`products.${item.name}`) }}</h2>
            <p class="text-gray-500 text-sm my-9 h-10">{{ $t(`products.${item.categories}`) }}</p>
          </div>
          <div class="flex items-center justify-between mb-">
            <p class="text-blue-600 text-lg font-semibold mb-2">${{ item.price }}</p>
            <p class="text-gray-500 text-xs mb-2">{{ $t('qty') }} : {{ item.Qty }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
defineProps({
  item: {
    type: Object,
    required: true
  }
})
</script>
