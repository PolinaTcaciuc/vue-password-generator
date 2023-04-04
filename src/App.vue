<template>
  <section class="hero">
    <div class="container">
      <div class="row">
        <div class="col-6">
          <v-title class="hero__title" :level="1">Генератор паролей</v-title>
        </div>
        <div class="col-12">
          <v-button
          :arrow="true"
          class="hero__btn"
          >Скопировать пароль _ </v-button>
          <font-awesome-icon :icon="['fal', 'arrow-right-from-line']" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
</script>

<style lang="scss">
.hero__title{
  text-align: left;
}
.hero__btn{
  padding: 20px 54px 20px 40px;
  font-weight: 600;
  min-width: 280px;
  max-width: 350px;
  width: 100%;

}
</style>
