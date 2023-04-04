<script>
export default {
  name: "v-title",
};
</script>
<script setup>
import { defineProps, computed } from "vue";
const props = defineProps({
  level: {
    type: Number,
    default: 1,
  },
  color: {
    type: String,
    default: "yellow",
  },
});
let tag = computed(() => `h${Math.min(Math.max(props.level, 1), 6)}`);
</script>

<template>
  <component
    :is="tag"
    :class="[
      'v-title',
      { 'v-title_yellow': props.color === 'yellow' },
      { 'v-title_white': props.color === 'white' },
    ]"
  >
    <slot></slot>
  </component>
</template>

<style lang="scss">
.v-title {
  &_yellow{
    color: var(--yellow-primary);
  }
  &_white{
    color: var(--white-primary);
  }
}
</style>