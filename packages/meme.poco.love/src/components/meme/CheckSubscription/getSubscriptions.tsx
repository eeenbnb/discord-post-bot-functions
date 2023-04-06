export default defineComponent({
  props: {
    userId: String,
  },
  setup: (props) => {
    const runtimeConfig = useRuntimeConfig();
    const item = useTwitchToken();

    const { data: subscriptions } = useFetch<any>(
      `https://api.twitch.tv/helix/subscriptions/user?broadcaster_id=${runtimeConfig.public.TWICH_CHECK_USER_BROADCASTER_ID}&user_id=${props.userId}`,
      {
        headers: {
          Authorization: `Bearer ${item.value}`,
          "Client-ID": runtimeConfig.public.TWICH_CLIENT_ID,
        },
      }
    );

    return {
      subscriptions,
    };
  },
  render: ({ subscriptions }: { subscriptions: any }) => {
    return (
      <div>
        {subscriptions && subscriptions.data.length > 0 ? (
          <p>めめぽこをサブスクしてるバカ</p>
        ) : (
          <p>素敵です</p>
        )}
      </div>
    );
  },
});
