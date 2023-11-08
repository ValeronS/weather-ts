<script setup lang="ts">
import { computed, onMounted } from 'vue';
import { useWeatherStore } from '@/store/weather';

const weatherStore = useWeatherStore();

const isLoading = computed(() => weatherStore.isLoading);
const forecast = computed(() => weatherStore.forecast);

onMounted(() => weatherStore.fetchForecast('55.7522', '37.6156'));
</script>

<template>
  <h1 v-if="isLoading">{{ 'Загрузка...' }}</h1>

  <div v-else>
    <img src="/assets/images/apple-touch-icon.png" class="logo vue" alt="Vue logo" />
    <div v-if="forecast">
      <h1>{{ forecast.city.name }}</h1>
      <h1>{{ `${forecast.list?.[0]?.main?.temp}  °C` }}</h1>
    </div>
  </div>
</template>

<style scoped></style>
