<template>
  <section class="hero">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <v-title class="hero__title" :level="1">Генератор <br> паролей</v-title>
        </div>
      </div>
      <div class="row">
        <div class="col-6">
          <the-password-group></the-password-group>
          <v-button :arrow="true" class="hero__btn"
            >Скопировать пароль _
          </v-button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import ThePasswordGroup from "@/components/ThePasswordGroup.vue";
export default {
  components: {
    ThePasswordGroup,
  },
};
</script>

<style lang="scss">

.hero__title {
  text-align: left;
  font-size: 40px;
}
.hero__btn {
  padding: 20px 54px 20px 40px;
  font-weight: 600;

  margin-bottom: 64px;
  &::after {
    content: "\f56e";
    z-index: 50000;
    right: 10%;
    position: absolute;
    font-weight: 900;
    font-family: "Font Awesome 6 Free";
  }
}
</style>
