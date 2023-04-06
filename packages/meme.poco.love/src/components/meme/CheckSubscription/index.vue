<script lang="tsx" setup>
import MemeCheckSubscriptionGetSubscriptions from "./getSubscriptions"
const runtimeConfig = useRuntimeConfig();
const item = useTwitchToken();

const { data: user } = await useFetch<any>("https://api.twitch.tv/helix/users", {
  headers: {
    Authorization: `Bearer ${item.value}`,
    "Client-ID": runtimeConfig.public.TWICH_CLIENT_ID,
  },
});

const Components = () => {
  return (
    <div>
      {user && (
        <MemeCheckSubscriptionGetSubscriptions
          user-id={user.value.data[0].id}
        > </MemeCheckSubscriptionGetSubscriptions>
      )
      }
    </div>
  );
}

</script>

<template>
  <Components></Components>
</template>