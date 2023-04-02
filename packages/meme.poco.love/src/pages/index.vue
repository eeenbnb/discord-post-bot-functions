<!-- <script lang="jsx">
export default defineComponent({
  async setup() {
    const item = await fetch("https://firebasestorage.googleapis.com/v0/b/discord-meme-f229e.appspot.com/o/assets%2FallVideos.json?alt=media")
    const json = await item.json();
    console.log(json)
    return { json }
  },
  render() {
    return (
      <div>
        { }
      </div>
    )
  }
})
</script> -->

<script setup lang="ts">
import { videos } from "@/@types/videos";
const { data } = useFetch<videos>("https://firebasestorage.googleapis.com/v0/b/discord-meme-f229e.appspot.com/o/assets%2FallVideos.json?alt=media");

const getUrlPath = (url: string) => {
  return url.replace("%{width}", "512").replace("%{height}", "288")
}
</script>

<template>
  <ClientOnly>
    <div class="wrapper">
      <a v-for="(item, index) in data" :key="index" :href="item.url" target="_blank" class="item">
        <div class="item__img">
          <img :src="getUrlPath(item.thumbnail_url)">
        </div>
        <p v-text="item.title"></p>
      </a>
    </div>
  </ClientOnly>
</template>

<style lang="scss" scoped>
.wrapper {
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
  box-sizing: border-box;
}

.item {
  width: 100%;
  padding: 16px;
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 20px;
  box-sizing: border-box;

  &__img {
    width: 100%;

    img {
      width: 100%;
      object-fit: contain;
    }
  }

}
</style>