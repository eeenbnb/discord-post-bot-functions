<template>
  <header>
    <p class="title">めめぽこ</p>
  </header>
</template>

<style lang="scss" scoped>
header {
  width: 100%;
  height: 80px;

  display: flex;
  align-items: center;

  background-color: #fce200;
  color: #fff;

  position: fixed;
  top: 0;
  z-index: 10000;

  filter: drop-shadow(0 0px 5px rgba(0, 0, 0, .25));

  .title {
    padding: 0 16px;
    font-size: 20px;
  }
}
</style>