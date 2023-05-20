<script setup lang="ts">
import { video } from "@/@types/videos";
import dayjs from "dayjs";

const props = withDefaults(defineProps<{ item: video | null, index: number }>(), {
  item: null,
  index: Number
});
const getUrlPath = (url: string) => {
  return url.replace("%{width}", "512").replace("%{height}", "288")
};
const getFormatDay = (t: string) => dayjs(t).format("YYYY/MM/DD HH:mm〜");

const item = ref()
onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      if (entries[0].intersectionRatio > 0) {
        entries[0].target.classList.add("is-view")
      }
      else {
        entries[0].target.classList.remove("is-view")
      }
    }
  );
  observer.observe(item.value);
});
</script>

<template>
  <template v-if="props.item">
    <a :href="props.item.url" target="_blank" class="item" ref="item" :class="`item-index-${props.index}`">
      <div class="item__img">
        <img :src="getUrlPath(props.item.thumbnail_url)">
      </div>
      <p class="item__day" v-text="getFormatDay(props.item.published_at)"></p>
      <p class="item__text" v-text="props.item.title"></p>
    </a>
  </template>
</template>

<style lang="scss" scoped>
.item {
  width: 100%;
  padding: 30px 25px;
  background-color: #fff;
  border: 5px solid #FAEFB5;
  border-radius: 20px;
  box-sizing: border-box;
  text-decoration: none;

  transform: translateY(360px);
  opacity: 0;
  transition: all 700ms;

  &.item-index-0 {
    transition: all 300ms;
  }

  &.item-index-1 {
    transition: all 500ms;
  }

  &.item-index-2 {
    transition: all 700ms;
  }

  &.is-view {
    opacity: 1;
    transform: translateY(0);
  }

  &__img {
    width: 100%;
    border-radius: 10px;
    overflow: hidden;

    img {
      width: 100%;
      object-fit: contain;
    }
  }

  &__text {
    margin-top: 8px;
    color: #2C2C2C;
    font-size: 12px;

    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }

  &__day {
    margin-top: 8px;
    text-align: left;
    color: #A9A9A9;
    font-size: 8px;
  }

}
</style>