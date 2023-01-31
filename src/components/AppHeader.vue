<script>
import { store } from '../data/store'
import HeaderInfo from './subcomponents/HeaderInfo.vue'
import NavBar from './subcomponents/NavBar.vue'
export default {
    name: 'AppHeader',
    components: { HeaderInfo, NavBar },
    data() {
        return {
            store,
        }
    }
}
</script>

<template>
    <header>
        <header-info></header-info>
        <div class="container h-nav d-flex align-items-center justify-content-between">
            <img src="../assets/img/logo.png" alt="GAMEHOAX">
            <nav-bar v-for="option in store.navs" :item="option"></nav-bar>
        </div>
    </header>
</template>

<style lang="scss" scoped>
header {
    height: 15vh;
    background-color: black;

    .h-nav {
        height: 10vh;
    }
}
</style>
