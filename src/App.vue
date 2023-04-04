<script setup>
import ThePasswordGroup from "@/components/ThePasswordGroup.vue";

</script>
<template>
  <section class="hero">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <v-title class="hero__title" :level="1"
            >Генератор <br />
            паролей</v-title
          >
        </div>
      </div>
      <div class="row">
        <div class="col-12 col-lp-6">
          <the-password-group class="col-12 hero__password-group" ></the-password-group>
          <v-button :arrow="true" class="col-11 col-tb-7 hero__btn"
            >Скопировать пароль _
          </v-button>
          <div class="col-12">
          <div class="row">
            <div class="col-6 col-md-3 mb-2">
              <v-checkbox>Верхний регистр</v-checkbox>
            </div>
            <div class="col-6 col-md-3 mb-2">
              <v-checkbox>Числа</v-checkbox>
            </div>
            <div class="col-6 col-md-3 mb-2">
              <v-checkbox>Нижний регистр</v-checkbox>
            </div>
            <div class="col-6 col-md-3 mb-2">
              <v-checkbox>Символы</v-checkbox>
            </div>
          </div>
        </div>
        </div>
      </div>
    </div>
  </section>
</template>

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
.hero__password-group{
  margin-bottom: 20px;
}
</style>
