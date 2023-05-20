<template>
  <main>
    <div class="container">
      <slot></slot>
    </div>
  </main>
</template>

<style lang="scss" scoped>
$itemHeight: 80px;

main {
  width: 100%;
  height: 100%;
  min-height: calc(100vh - #{$itemHeight});
  padding-top: #{$itemHeight};

  display: flex;
  justify-content: center;

  background-color: #FFFCEE;

  .container {
    width: 1200px;
    padding: 85px 52px 110px;
    background-color: #fff;
  }

}
</style>