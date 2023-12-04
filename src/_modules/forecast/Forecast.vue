<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useWeatherStore } from '@/store/weather';

const weatherStore = useWeatherStore();

const { forecast } = storeToRefs(weatherStore);
</script>

<template>
  <div v-if="forecast" class="forecast">
    <div>{{ forecast.city?.name }}</div>
    <div>{{ forecast.list?.[0]?.main?.temp }}</div>
    <div>{{ forecast.list?.[0]?.weather?.[0]?.description }}</div>
  </div>
</template>

<style scoped lang="scss">
.forecast {
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: var(--color-base-gray-100);
}
</style>
