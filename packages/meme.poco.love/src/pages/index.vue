<script setup lang="ts">
import { videos } from "@/@types/videos";
const { data } = useFetch<videos>("https://firebasestorage.googleapis.com/v0/b/discord-meme-f229e.appspot.com/o/assets%2FallVideos.json?alt=media");
</script>

<template>
  <NuxtLayout name="old">
    <!--  -->
    <MemeSectionTitle>
      最新の配信一覧
    </MemeSectionTitle>
    <MemeItemWrapper>
      <MemeVideoItem v-for="(item, index) in data" :key="index" :item="item"></MemeVideoItem>
    </MemeItemWrapper>

    <!--  -->
    <MemeSectionTitle>
      Twitter
    </MemeSectionTitle>
    <MemeTwitter></MemeTwitter>
  </NuxtLayout>
</template>