<script setup lang="ts">
import { video } from "@/@types/videos";
import dayjs from "dayjs";

const props = withDefaults(defineProps<{ item: video | null }>(), {
  item: null
});
const getUrlPath = (url: string) => {
  return url.replace("%{width}", "512").replace("%{height}", "288")
};
const getFormatDay = (t: string) => dayjs(t).format("YYYY/MM/DD HH時mm分〜");
</script>

<template>
  <template v-if="props.item">
    <a :href="props.item.url" target="_blank" class="item">
      <div class="item__img">
        <img :src="getUrlPath(props.item.thumbnail_url)">
      </div>
      <p class="item__text" v-text="props.item.title"></p>
      <p class="item__day" v-text="getFormatDay(props.item.published_at)"></p>
    </a>
  </template>
</template>

<style lang="scss" scoped>
.item {
  width: 100%;
  padding: 16px;
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 20px;
  box-sizing: border-box;
  text-decoration: none;

  &__img {
    width: 100%;

    img {
      width: 100%;
      object-fit: contain;
    }
  }

  &__text {
    margin-top: 8px;
    color: #A9A9A9;
    font-size: 12px;
  }

  &__day {
    margin-top: 8px;
    text-align: right;
    color: #A9A9A9;
    font-size: 8px;
  }

}
</style>