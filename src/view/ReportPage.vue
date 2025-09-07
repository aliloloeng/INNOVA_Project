<template>
  <div class="flex flex-col items-center mobile-box">
    <HeaderReportPage/>
    <InfosPart/>
    <AllReportPagesComponent/>
  </div>
</template>
<script setup>
import AllReportPagesComponent from '@/components/ReportPage/AllReportPagesComponent.vue';
import HeaderReportPage from '@/components/ReportPage/HeaderReportPage.vue';
import InfosPart from '@/components/ReportPage/InfosPart.vue';

</script>
<style scoped></style>
