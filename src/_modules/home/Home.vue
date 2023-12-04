<script setup lang="ts">
import LocationSearch from '@/_modules/home/components/LocationSearch.vue';
</script>

<template>
  <div class="home">
    <div class="logo">
      <img src="../../../public/assets/icons/Logo.svg" alt="type-weather-logo" />
    </div>

    <location-search />
  </div>
</template>

<style scoped lang="scss">
.home {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.logo {
  margin-top: 48px;
}
</style>
