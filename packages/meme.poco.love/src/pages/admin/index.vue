<script lang="ts" setup>
const item = useTwitchToken();
const logout = () => {
  setTwitchToken("");
}
</script>

<template>
  <NuxtLayout name="old">
    <template v-if="item.length == 0">
      <MemeTwitchLogin></MemeTwitchLogin>
    </template>
    <template v-if="item.length > 0">
      <MemeCheckSubscription></MemeCheckSubscription>
      <button @click="logout">logout</button>
    </template>
  </NuxtLayout>
</template>