<template>
  <footer class="footer">
    <div class="container">
      <div class="row">
        <div class="audio-box col-12 col-tb-6 mb-3">
          <label class="audio-box__label">
            <button class="audio-box__btn" />
            <span class="audio-box__text">Выключить звук</span>
          </label>
        </div>
        <ul class="footer__list col-12 col-tb-6 mb-3">
          <li class="footer__list-item">
            created by
            <v-link :border="true" linkPath="https://www.polinatcaciuc.ru"
              >Polina Tcaciuc
            </v-link>
          </li>
          <li class="footer__list-item">
            <v-link
              class="footer-link_github"
              linkPath="https://github.com/PolinaTcaciuc"
            ></v-link>
          </li>
        </ul>
      </div>
    </div>
  </footer>
</template>

<script>
export default {};
</script>

<style lang="scss">
.footer {
  padding: 40px 0 20px 0;
}
.footer__list {
  display: flex;
  justify-content: start;
  align-items: center;
  @media screen and (min-width:750px) {
    justify-content: end;

  }
  &-item {
    padding: 0 10px;
  }
}
.audio-box__label {
  cursor: pointer;
  display: inline-flex;
  align-items: center;
}
.audio-box__btn {
  border: none;
  background: transparent;
  cursor: pointer;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  &::before {
    content: "\f028";
    z-index: 50000;
    font-weight: 900;
    color: var(--aqua-color);
    font-size: 20px;
    font-family: "Font Awesome 6 Free";
  }
}
.footer-link_github {
  &::after {
    content: "\f09b";
    z-index: 50000;
    font-weight: 900;
    color: var(--aqua-color);
    font-size: 20px;
    font-family: "Font Awesome 6 Free";
  }
  &:hover {
    &::after {
      color: var(--red-primary);
      transition: all 0.8s;
    }
  }
}
</style>