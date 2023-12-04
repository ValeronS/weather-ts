<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { SuggestionEvent, SuggestionResponse } from '@/utils/models.ts';
import { useWeatherStore } from '@/store/weather';
import { AppUrls } from '@/utils';

const router = useRouter();
const weatherStore = useWeatherStore();

const location = ref();
const locationCoordinates = ref();

const getCoordinates = async (value: string) => {
  ymaps.geocode(value).then(async function (res: SuggestionResponse) {
    let findObject = res.geoObjects.get(0);
    const [ltd, lng] = findObject.geometry._coordinates;
    locationCoordinates.value = [ltd, lng];
    await weatherStore.fetchForecast(ltd, lng);
    await router.push({ path: AppUrls.forecast.path, query: { ltd: ltd, lng: lng } });
  });
};

ymaps.ready(init);
function init() {
  const suggestView = new ymaps.SuggestView('suggestStreet');
  suggestView.events.add('select', function (event: SuggestionEvent) {
    getCoordinates(event.get('item').value);
  });
}
</script>

<template>
  <div class="location-search">
    <p>Введите название населенного пункта</p>
    <input id="suggestStreet" v-model="location" type="text" placeholder="Поиск" />
  </div>
</template>

<style scoped lang="scss">
.location-search {
  display: flex;
  flex-direction: column;
  align-items: center;

  p {
    color: var(--color-base-gray-200);
  }

  input {
    height: 56px;
    width: 100%;
    margin: 0 32px;
    padding: 0 20px;
    background-color: var(--color-base-gray-600);
    border: none;
    border-radius: 8px;
    color: var(--color-base-gray-100);

    &:focus-visible {
      outline: none;
    }
  }
  :deep(.ymaps-2-1-79-suggest-item) {
    background-color: var(--color-base-gray-500);
    color: var(--color-base-gray-100);
    padding: 16px 20px;
    border-bottom: 1px solid var(--color-base-gray-800);
  }
  :deep(.ymaps-2-1-79-suggest-item-0) {
    margin: 0;
    border-top-right-radius: 8px;
    border-top-left-radius: 8px;
  }
  :deep(.ymaps-2-1-79-search__suggest) {
    border: none;
    font-family: 'Nunito', sans-serif;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 120%;
    top: 8px;
  }
  :deep(.ymaps-2-1-79-popup) {
    border-radius: 9px;
  }
  :deep(.ymaps-2-1-79-search__suggest-highlight) {
    font-weight: 400;
  }
  :deep(.ymaps-2-1-79-search__suggest-item) {
    padding: 0;
  }
  :deep(.ymaps-2-1-79-suggest-item:last-of-type) {
    margin: 0;
    border-bottom-right-radius: 8px;
    border-bottom-left-radius: 8px;
  }
}
</style>
