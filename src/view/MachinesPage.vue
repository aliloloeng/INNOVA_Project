<template>
  <div class="flex justify-center ">
      <div class="mobile-box">
        <HeaderHomePage/>
        <MachinesComponent/>
        <RecentMachinesComponent/>
      </div>
  </div>
</template>

<script setup>
import HeaderHomePage from '@/components/Homepage/HeaderHomePage.vue';
import MachinesComponent from '@/components/Machinespage/MachinesComponent.vue';
import RecentMachinesComponent from '@/components/Machinespage/RecentMachinesComponent.vue';

</script>
<style scoped></style>
