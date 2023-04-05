<template>
  <li class="password-list__item mb-4">
    <span class="password-list__item-value">pass</span>
    <button class="password-list__item-copy"></button>
  </li>
</template>

<script>
export default {};
</script>

<style lang="scss">
.password-list__item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  &-value {
    color: var(--grey-color);
    font-size: 17px;
    font-weight: 700;
  }
  &-copy {
    border: none;
    outline: none;
    position: relative;
    width: 24px;
    height: 24px;
    display: flex;
    justify-content: center;
    background: transparent;
    align-items: center;
    cursor: pointer;
    &::after {
      content: "\f0c5";
      z-index: 50000;
      right: 10%;
      position: absolute;
      font-weight: 900;
      font-size: 30px;
      color: var(--white-primary);
      font-family: "Font Awesome 6 Free";
    }
  }
}
</style>

