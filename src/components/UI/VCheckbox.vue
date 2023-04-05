<script>
export default {
  name: "v-checkbox",
};
</script>

<template>
  <label class="checkbox-label">
    <div class="checkbox-wrapper">
      <input class="checkbox_real" type="checkbox" />
      <span class="checkbox_fake"></span>
      <span class="checkbox__text"><slot>ffff</slot></span>
    </div>
  </label>
</template>


<style lang="scss" scoped>
.checkbox-label {
  display: inline-block;
  cursor: pointer;
}
.checkbox-wrapper{
    display: flex;
    align-items: center;
}
.checkbox_real {
  width: 0;
  height: 0;
  opacity: 0;
  position: absolute;
  z-index: -1;
}
.checkbox_fake {
  display: inline-block;
  flex: 0 0 auto;
  width: 24px;
  position: relative;
  height: 24px;
  border: 2px solid var(--yellow-primary);
  &::before {
    content: "";
    width: 100%;
    height: 100%;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%) scale(0);
    background: var(--yellow-primary);
  }
}
.checkbox__text {
  padding-left: 8px;
}
.checkbox_real:checked + .checkbox_fake::before {
  transform: translate(-50%, -50%) scale(1);
}
</style>