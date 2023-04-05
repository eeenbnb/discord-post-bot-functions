<script setup lang="ts">
useHead({ script: [{ async: true, src: "https://platform.twitter.com/widgets.js" }] })
</script>

<template>
  <div class="twitter">
    <a class="twitter-timeline" href="https://twitter.com/meme__poco?ref_src=twsrc%5Etfw">Tweets by meme__poco</a>
  </div>
</template>

<style lang="scss" scoped>
@use "@/assets/styles/bp";

.twitter {
  width: 100%;
  max-width: #{map-get(bp.$bp,"sm")};
  margin: 0 auto;
}
</style>