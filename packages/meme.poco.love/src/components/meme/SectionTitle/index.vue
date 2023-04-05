<template>
  <h2 class="title">
    <slot></slot>
  </h2>
</template>

<style lang="scss" scoped>
.title {
  &:not(:first-of-type) {
    margin-top: 20px;
  }

  margin-bottom: 20px;

  font-size: 24px;
  color: #A9A9A9;
  text-align: center;
}
</style>