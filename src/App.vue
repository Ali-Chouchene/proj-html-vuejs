<script>
import AppHeader from './components/AppHeader.vue'
import AppMain from './components/AppMain.vue'
import AppFooter from './components/AppFooter.vue';
export default {
  components: { AppHeader, AppMain, AppFooter }
}
</script>

<template>

  <body>
    <app-header></app-header>
    <app-main></app-main>
    <app-footer></app-footer>
  </body>
</template>

<style lang="scss">
* {
  font-family: 'Play', sans-serif;
}

body {
  background-image: url(./assets/img/body-bg.jpg);
}
</style>
