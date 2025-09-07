<template>
  <div class="mobile-box bg-[#f3f4f6] p-4 pb-8">
    <div
      v-for="(order, index) in orders"
      :key="index"
      class="w-full bg-white p-4 mb-3 rounded-xl shadow-sm"
    >
      <section class="flex justify-between mb-2">
        <div>
          <h2 class="text-lg font-semibold text-gray-800">{{ $t("order") }} #{{ order.id }}</h2>
          <p class="text-xs text-gray-500">{{ $t("placed_at") }} {{ order.placedAt }}</p>
        </div>
        <div>
          <p
            class="text-xs font-medium px-2 py-1 rounded-full"
            :class="statusClasses(order.status)"
          >
            {{ order.status }}
          </p>
        </div>
      </section>

      <div class="w-[95%] h-px bg-gray-200 mx-auto mb-3"></div>

      <section class="flex gap-3">
        <div
          class="w-16 h-16 flex items-center justify-center bg-gray-100 rounded-md overflow-hidden mt-1"
        >
          <img
            :src="order.items.imageUrl"
            alt=""
            class="w-full h-full object-cover"
          />
        </div>
        <div class="flex-1 flex flex-col justify-between">
          <div>
            <h2 class="text-base font-medium text-gray-800">
              {{ order.items.name }}
            </h2>
            <p class="text-xs text-gray-500">{{ $t("type") }}: {{ order.items.type }}</p>
          </div>
          <div class="flex justify-between items-center mt-1">
            <p class="text-xs text-gray-500">{{ $t("qty") }}: {{ order.items.Qyt }}</p>
            <p class="text-sm font-semibold text-gray-800">
              ${{ order.items.unitPrice }}
            </p>
          </div>
        </div>
      </section>

      <div class="w-[95%] h-px bg-gray-200 mx-auto my-3"></div>

      <section class="flex justify-center gap-10 text-sm">
        <button class="text-purple-600 font-medium hover:underline">
          {{ $t("view_details") }}
        </button>

        <button
          v-if="order.status === 'Pending' || order.status === 'Accepted'"
          class="font-medium px-2 py-1 rounded-md"
          :class="{
            'text-red-500 ': order.status === 'Pending',
            ' text-gray-500 cursor-not-allowed': order.status === 'Accepted'
          }"
          :disabled="order.status === 'Accepted'"
        >
          {{ $t("cancel_order") }}
        </button>
      </section>
    </div>
  </div>
</template>


<script setup>
defineProps({
  orders: { type: Array, required: true },
});

const statusClasses = (status) => {
  switch (status) {
    case "Accepted":
      return "bg-green-100 text-green-700";
    case "Pending":
      return "bg-orange-100 text-orange-700";
    case "Cancelled by User":
      return "bg-red-100 text-red-700";
    case "Cancelled by Admin":
      return "bg-gray-200 text-gray-700";
    default:
      return "bg-gray-100 text-gray-600";
  }
};
</script>
