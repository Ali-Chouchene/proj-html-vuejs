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
        <header-info id="top"></header-info>
        <div class="container h-nav d-flex align-items-center justify-content-between">
            <img src="../assets/img/logo.png" alt="GAMEHOAX">
            <!--navbar componente-->
            <div class="btn-group d-block ms-5 d-lg-none">
                <button type="button" class="btn btn-danger dropdown-toggle" data-bs-toggle="dropdown"
                    aria-expanded="false">
                    Menu
                </button>
                <ul class="dropdown-menu">
                    <li v-for="option in store.navs"><a class="dropdown-item" :href="option.link">{{ option.text }}</a>
                    </li>
                </ul>
            </div>
            <div class="d-flex nav-bar align-items-center justify-content-between ">
                <nav-bar class="d-none d-lg-block" v-for="option in store.navs" :item="option"></nav-bar>
            </div>
            <div class="h-controls d-flex justify-content-between align-items-center">
                <font-awesome-icon class="icon" icon="fa-solid fa-magnifying-glass" />
                <font-awesome-icon class="icon" icon="fa-regular fa-user" />
                <div class="d-flex align-items-center">
                    <font-awesome-icon class="icon" icon="fa-solid fa-bag-shopping" />
                    <span>
                        <p class="tot ps-1">(0) £0.00</p>
                    </span>
                </div>
            </div>
        </div>
    </header>
</template>

<style lang="scss" scoped>
@use '../assets/scss/partials/variables' as *;

header {
    height: 15vh;
    background-color: $dark;

    .h-nav {
        height: 10vh;
    }

    .h-controls {
        width: 200px;

        .icon {
            color: $white;
            font-size: 20px;
            cursor: pointer;

            &:hover {
                color: $orange;
            }
        }

        .tot {
            color: $orange;
            margin: 0;
        }
    }

    .nav-bar {
        width: 650px;
    }
}
</style>
