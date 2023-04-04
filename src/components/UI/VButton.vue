<script>
export default {
  name: "v-button",
};
</script>

<script setup>
import { defineProps } from "vue";
const props = defineProps({
  arrow: {
    type: Boolean,
    default: false,
  },
});
</script>


<template>
  <button :class="['v-button', { 'v-button_arrow': props.arrow }]">
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
  &_arrow {
    &::after {
      content: "\f56e";
      z-index: 50000;
      right: 10%;
      position: absolute;
      font-weight: 900;
      font-family: "Font Awesome 6 Free";
    }
  }
}
</style>