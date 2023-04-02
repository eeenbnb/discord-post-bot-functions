<template>
  <main>
    <div class="main-wrapper">
      <slot></slot>
    </div>
  </main>
</template>

<style lang="scss" scoped>
$itemHeight: 80px;

main {
  width: 100%;
  height: 100%;

  background-color: #fff;
  background-image:
    radial-gradient(#fefec0 20%, transparent 20%),
    radial-gradient(#fefec0 20%, transparent 20%);
  background-size: 240px 240px;
  background-position: 0 0, 120px 120px;

  &::before {
    content: "";
    width: 100%;
    height: #{$itemHeight};
    display: block;
  }
}

.main-wrapper {
  width: 100%;
  height: 100%;
  min-height: calc(100vh - (#{$itemHeight} * 2));
  padding: 16px;
  -webkit-backdrop-filter: blur(10px);
  backdrop-filter: blur(10px);
  box-sizing: border-box;
}
</style>