<template>
  <div class="v-indicator">
    <span class="v-indicator__level" v-for="i in 4" :key="i"></span>
  </div>
</template>

<script>
export default {
  name: "v-indicator",
};
</script>

<style lang="scss">
.v-indicator {
  width: 24px;
  height: 24px;
  position: relative;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  &__level {
    width: 100%;
    height: 3px;
    background-color: var(--aqua-color);
  }
}
</style>
