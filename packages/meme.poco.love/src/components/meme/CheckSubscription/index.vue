<script lang="ts" setup>
const item = useTwitchToken();


const { data: user } = useFetch<any>("https://api.twitch.tv/helix/users", {
  headers: {
    Authorization: `Bearer ${item.value}`,
    "Client-ID": "3pwcafw0g03kh5uq8aq4ysfnteegab",
  }
})

</script>

<template>
  <template v-if="user">
    <MemeCheckSubscriptionGetSubscriptions :user-id="user.data[0].id">
    </MemeCheckSubscriptionGetSubscriptions>
  </template>
</template>