<template>
  <main>
    <slot></slot>
  </main>
</template>

<style lang="scss" scoped>
$itemHeight: 80px;

main {
  width: 100%;
  height: 100%;
  min-height: calc(100vh - #{$itemHeight});
  padding: 16px;

  background-color: #fff;
  background-image:
    radial-gradient(#fefec0 20%, transparent 20%),
    radial-gradient(#fefec0 20%, transparent 20%);
  background-size: 240px 240px;
  background-position: 0 0, 120px 120px;

  position: relative;
  z-index: 100;

  box-sizing: border-box;

  &::before {
    content: "";
    width: 100%;
    height: #{$itemHeight};
    display: block;
  }

  &::after {
    content: "";
    width: 100vw;
    height: 100vh;
    -webkit-backdrop-filter: blur(10px);
    backdrop-filter: blur(10px);

    position: fixed;
    top: 0;
    left: 0;
    z-index: -1;
  }
}
</style>