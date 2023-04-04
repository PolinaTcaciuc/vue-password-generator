<template>
  <div class="password-group">
    <input class="password-group__input" type="text" />
    <div class="password-group__box">
      <div class="password-group__indicator-wrapper">
        <v-indicator class="password-group__indicator"></v-indicator>
      </div>
      <div class="password-group__btn-wrapper">
        <button class="password-group__btn"></button>
      </div>
    </div>
  </div>
</template>

<script>
</script>

<style lang="scss" scoped>
.password-group {
  position: relative;
  &__input {
    width: 100%;
    border: 2px solid var(--aqua-color);
    color: var(--aqua-color);
    background: var(--aqua-color);
    opacity: 0.1;
    outline: none;
    padding: 20px 92px 20px 20px;
  }
  &__box {
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
    display: flex;
    justify-content: space-between;
    align-items: stretch;
    margin-right: 10px;
    width: 100px;
  }
  &__indicator-wrapper, &__btn-wrapper {
  padding: 0px 10px;
}
  &__btn-wrapper {
    display: flex;
    align-items: stretch;
  }
  &__btn {
    position: relative;
    background: transparent;
    border: none;
    outline: none;
    cursor: pointer;

    &::after {
      content: "\f2f9";
      z-index: 50000;
      position: absolute;
      right: 50%;
      bottom: 50%;
      transform: translate(50%, 50%);
      font-weight: 900;
      font-family: "Font Awesome 6 Free";
      color: var(--aqua-color);
      font-size: 24px;
    }
  }
}
</style>