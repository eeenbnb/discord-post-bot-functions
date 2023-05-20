<script setup lang="ts">
import { videos } from "@/@types/videos";
const { data } = await useFetch<videos>("https://firebasestorage.googleapis.com/v0/b/discord-meme-f229e.appspot.com/o/assets%2FallVideos.json?alt=media");

const sliceByNumber = (array: any[], number: number) => {
  const length = Math.ceil(array.length / number);
  return new Array(length)
    .fill("")
    .map((_, i) => array.slice(i * number, (i + 1) * number));
};

</script>

<template>
  <NuxtLayout name="meme">
    <MemeProfile></MemeProfile>
    <!--  -->
    <MemeSectionTitleV2 title="最近の配信情報" subtitle="Recent Stream Info"></MemeSectionTitleV2>
    <MemeItemWrapper>
      <MemeVideoItem v-for="(item, index) in data" :key="index" :item="item" :index="index % 3"></MemeVideoItem>
    </MemeItemWrapper>
    <!--  -->
    <MemeSectionTitleV2 title="最近のつぶやき" subtitle="Twitter Info"></MemeSectionTitleV2>
    <MemeTwitter></MemeTwitter>
  </NuxtLayout>
</template>

<style lang="scss" scoped>
.sample {
  min-height: 100vh;
}
</style>