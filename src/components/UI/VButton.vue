<script>
export default {
  name: "v-button",
};
</script>

<script setup>

</script>


<template>
  <button :class="['v-button']">
    <slot></slot>
  </button>
</template>


<style lang="scss">
.v-button {
  background: var(--yellow-primary);
  border: none;
  cursor: pointer;
  position: relative;
  transition: all 0.4s ease;

  &:before {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    border-bottom: 15px solid var(--black-primary);
    border-right: 15px solid transparent;
  }

}
</style>