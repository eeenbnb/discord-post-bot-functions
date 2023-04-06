// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  srcDir: "./src",
  css: ["reset-css", "@/assets/styles/common.scss"],
  runtimeConfig: {
    public: {
      TWICH_CLIENT_ID: process.env.NUXT_TWICH_CLIENT_ID,
      TWICH_CHECK_USER: process.env.NUXT_TWICH_CHECK_USER,
      TWICH_CHECK_USER_BROADCASTER_ID:
        process.env.NUXT_TWICH_CHECK_USER_BROADCASTER_ID,
    },
  },
});
