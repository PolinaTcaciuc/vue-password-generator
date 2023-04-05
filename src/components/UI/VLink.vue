<script>
export default {
  name: "v-link",
};
</script>

<script setup>
import { defineProps } from "vue";
defineProps({
  linkPath: {
    type: String,
    required:true,
  },
  border:{
    type:Boolean,
    default:false,
  }

});
</script>

<template>
  <a  :href="linkPath" :class="['v-link',{'v-link_border': border}]">
    <slot></slot>
  </a>

</template>

<style lang="scss">
.v-link {
  position: relative;
  color: inherit;
  text-decoration: none;
  transition: color 0.4s ease;
  cursor: pointer;
  &_border{
     &::after {
    content: "";
    display: block;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 1px;
    height: 1px;
    opacity: 1;
    background-color: var(--yellow-primary);
    transition: transform 0.4s ease, opacity 0.6s ease;
  }
  &:hover,&:focus {
    outline: none;
    color: var(--aqua-color);
    &::after {
      background: var(--red-primary);
      transform: translateY(3px);
      opacity: 0;
    }
  }
  }

}
</style>