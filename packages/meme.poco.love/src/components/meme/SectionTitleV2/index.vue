<script setup lang="ts">
interface props {
  title: string,
  subtitle: string
}
const props = withDefaults(defineProps<props>(), {
  title: "",
  subtitle: ""
});
</script>

<template>
  <h2 class="title">
    {{ props.title }}
    <p class="title__sub">{{ props.subtitle }}</p>
    <div class="title__bg"></div>
  </h2>
</template>

<style lang="scss" scoped>
.title {
  width: 100%;
  height: 150px;
  margin-top: 120px;
  margin-bottom: 60px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  font-size: 40px;

  position: relative;
  z-index: 10;

  &__sub {
    margin-top: 8px;
    font-size: 20px;
    color: #F1CF2C;
  }

  &__bg {
    width: 150px;
    height: 150px;

    background-color: #fff;
    border-radius: 50%;
    border: 5px solid #EFF4FA;

    position: absolute;
    top: 0px;
    z-index: -1;
  }
}
</style>