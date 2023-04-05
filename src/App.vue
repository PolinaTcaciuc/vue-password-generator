<script setup>
import PasswordInput from "@/components/PasswordInput.vue";
import PasswordLengthSlider from "@/components/PasswordLengthSlider.vue";
import PasswordList from "@/components/PasswordList.vue";

import TheFooter from "@/components/TheFooter.vue";

function setLengthPassword(length) {
  console.log(length);
}
</script>
<template>
  <main class="main">
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
        <div class="row justify-content-between">
          <div class="col-12 col-tb-6 mb-4">
            <div class="row">
              <div class="col-1, TheFooter2">
                <password-input class="hero__password-input"></password-input>
              </div>
              <div class="col-12">
                <v-button :arrow="true" class="col-11 col-tb-10 hero__btn"
                  >Скопировать пароль _
                </v-button>
              </div>
              <div class="col-12">
                <password-length-slider
                  class="hero__password-slider"
                  @updateProperty="setLengthPassword"
                ></password-length-slider>
              </div>
              <div class="col-12">
                <div class="row">
                  <div class="col-6 mb-3">
                    <v-checkbox>Верхний регистр</v-checkbox>
                  </div>
                  <div class="col-6 mb-3">
                    <v-checkbox>Числа</v-checkbox>
                  </div>
                  <div class="col-6 mb-3">
                    <v-checkbox>Нижний регистр</v-checkbox>
                  </div>
                  <div class="col-6 mb-3">
                    <v-checkbox>Символы</v-checkbox>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!--  -->
          <div class="col-12 col-tb-5 mb-4">
            <div class="row">
              <div class="col-12">
                <v-title class="hero__subtitle" :level="2" color="white">История</v-title>
              </div>
              <div class="col-12">
                <password-list></password-list>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
  <the-footer></the-footer>
</template>

<style lang="scss">
.hero__title {
  text-align: left;
  font-size: 40px;
}
.hero__subtitle{
  margin: 0;
  margin-bottom: 20px;
}
.hero__btn {
  padding: 20px 54px 20px 40px;
  font-weight: 600;
  margin-bottom: 60px;
  &::after {
    content: "\f56e";
    z-index: 50000;
    right: 10%;
    position: absolute;
    font-weight: 900;
    font-family: "Font Awesome 6 Free";
  }
}
.hero__password-input {
  margin-bottom: 20px;
}
.hero__password-slider {
  margin-bottom: 60px;
}
</style>
