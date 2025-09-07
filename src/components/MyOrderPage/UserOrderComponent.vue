<template>
  <section class="bg-[#f3f4f6]  py-4">
    <div class="flex justify-between items-center space-x-4 p-3 mx-4 rounded-xl shadow-sm bg-white">
      <img
        :src="user"
        alt="User Avatar"
        class="w-30 h-30 rounded-full border-2 border-blue-600 object-cover ml-4"
      />

      <div class="flex flex-col">
        <p class="font-bold text-lg text-gray-800">{{ name }}</p>
        <p class="text-sm text-gray-500">{{ $t("member_since") }} {{ date }}</p>

        <div class="mt-1">
          <span
            class="inline-block px-3 py-1 text-xs font-medium rounded-full"
            :class="status === 'Active' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'"
          >
            {{ status === 'Active' ? $t("active") : $t("inactive") }}
          </span>
        </div>
      </div>
    </div>
  </section>
</template>


<script setup>
import user from '@/assets/images/user.jpg'

defineProps({
  name: {
    type: String,
    default: 'John Doe'
  },
  date: {
    type: String,
    default: 'Sep 2023'
  },
  status: {
    type: String,
    default: 'Active'
  }
})
</script>
