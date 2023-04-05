<script setup lang="ts">
if (location.hash) {
  const prams = new URLSearchParams(location.hash.replace("#", ""));
  if (prams.get("access_token")) {
    setTwitchToken(prams.get("access_token") as string);
    location.hash = '';
  }
}
</script>

<template>
  <!-- href="https://id.twitch.tv/oauth2/authorize?client_id=3pwcafw0g03kh5uq8aq4ysfnteegab&redirect_uri=http://localhost:3000/admin&response_type=token&scope=user:read:subscriptions" -->
  <!-- href="https://id.twitch.tv/oauth2/authorize?client_id=3pwcafw0g03kh5uq8aq4ysfnteegab&redirect_uri=https://meme.poco.love/admin&response_type=token&scope=user:read:subscriptions" -->
  <a href="https://id.twitch.tv/oauth2/authorize?client_id=3pwcafw0g03kh5uq8aq4ysfnteegab&redirect_uri=https://meme.poco.love/admin&response_type=token&scope=user:read:subscriptions"
    class="button">
    Twitchにログインする
  </a>
</template>

<style lang="scss" scoped>
.button {
  width: 100%;
  max-width: 334px;
  height: 44px;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 22px;
  border: none;
  background-color: #fce200;

  font-size: 18px;
  color: #fff;
  text-decoration: none;
}
</style>