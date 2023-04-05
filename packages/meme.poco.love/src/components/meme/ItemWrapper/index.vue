<template>
  <div class="wrapper">
    <slot></slot>
  </div>
</template>

<style lang="scss" scoped>
@use "@/assets/styles/bp";

.wrapper {
  width: 100%;
  max-width: 980px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
  box-sizing: border-box;

  @media screen and (max-width:map-get(bp.$bp, "md")) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (max-width:map-get(bp.$bp, "sm")) {
    grid-template-columns: repeat(1, 1fr);
  }
}
</style>