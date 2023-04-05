<script lang="ts" setup>

const props = withDefaults(defineProps<{ userId: string }>(), {
  userId: ""
});

const item = useTwitchToken();

const { data: subscriptions } = await useFetch<any>(`https://api.twitch.tv/helix/subscriptions/user?broadcaster_id=861306731&user_id=${props.userId}`, {
  headers: {
    Authorization: `Bearer ${item.value}`,
    "Client-ID": "3pwcafw0g03kh5uq8aq4ysfnteegab",
  }
})

</script>

<template>
  <template v-if="subscriptions">
    <template v-if="subscriptions.data.length > 0">
      <p>めめぽこをサブスクしてるバカ</p>
    </template>
    <template v-if="subscriptions.data.length == 0">
      <p>素敵です</p>
    </template>
  </template>
</template>