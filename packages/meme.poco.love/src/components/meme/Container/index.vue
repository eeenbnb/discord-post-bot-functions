<template>
  <main>
    <slot></slot>
  </main>
</template>

<style lang="scss" scoped>
main {
  padding: calc(48px + 16px) 16px 16px;
  min-height: calc(100vh - ((48px * 2) + (16px * 2)));
}
</style>