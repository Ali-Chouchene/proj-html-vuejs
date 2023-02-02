<script>
import { store } from '../data/store'
import Jumbo from './subcomponents/Jumbo.vue'
import Policy from './subcomponents/Policy.vue'
import CardRow from './subcomponents/CardRow.vue'
import CardCol from './subcomponents/CardCol.vue'
import CardS from './subcomponents/CardS.vue'
import ProductsOption from './subcomponents/ProductsOption.vue'
import Products from './subcomponents/Products.vue'
import BlogCard from './subcomponents/BlogCard.vue'
export default {
    name: 'AppMain',
    components: { Jumbo, Policy, CardRow, CardCol, CardS, ProductsOption, Products, BlogCard },
    data() {
        return {
            store,
        }
    }
}
</script>

<template>
    <main>
        <jumbo></jumbo>
        <policy></policy>
        <card-row>
            <card-col img="2" title="Assassin's Creed Unity" label="Most Popular"></card-col>
            <card-col img="1" title="Battlefiels 4" label="Latest Game"></card-col>
        </card-row>
        <h1 class="mt-5 text-center">Special Category</h1>
        <div class="y-line"></div>
        <card-row>
            <card-s img="1" title="Call of Duty"></card-s>
            <card-s img="2" title="PlayerUnknown's Battlegrounds"></card-s>
            <card-s img="3" title="Jump Force"></card-s>
        </card-row>
        <h1 class="mt-5 text-center">Our Products</h1>
        <div class="y-line"></div>
        <div class="box d-flex">
            <products-option v-for="option in store.ProductOptions" :key="option.id"
                :text="option.text"></products-option>
        </div>
        <card-row>
            <products v-for="prod in store.Products" :prod="prod"></products>
        </card-row>
        <div class="spacer"></div>
        <card-row>
            <card-col img="3" title="Dragon's Dogma" label="20% Discount"></card-col>
            <card-col img="4" title="World Of Tanks" label="30% Discount"></card-col>
        </card-row>
        <h1 class="mt-5 text-center">Deal Of The Day</h1>
        <div class="y-line"></div>
        <div class="box mt-5 d-flex">
            <products-option v-for="option in store.ProductOptions1" :key="option.id"
                :text="option.text"></products-option>
        </div>
        <card-row>
            <products v-for="prod in store.Products1" :prod="prod"></products>
        </card-row>

        <!---TOO DOO SECOND JUMBO-->

        <div class="spacer"></div>
        <h1 class="mt-3 text-center">New Game Blogs</h1>
        <div class="y-line"></div>
        <card-row>
            <blog-card v-for="blog in store.blogs" :key="blog.img" :blog="blog"></blog-card>
        </card-row>
        <div class="container">
            <div class="line"></div>
        </div>
        <div class="container my-5">
            <div class="d-flex justify-content-between px-4">
                <img v-for="n in 5" class="pointer" :src="`../../public/brands/brand-0${n}.png`" :alt="n">
            </div>
        </div>
    </main>
</template>

<style lang="scss" scoped>
@use '../assets/scss/partials/variables' as *;

main {


    h1 {
        color: white;
        font-weight: 600;
    }

    .y-line {
        width: 55px;
        border: 1.5px solid $orange;
        margin: 20px auto;
    }

    .box {
        max-width: 600px;
        height: 65px;
        margin: 0 auto;
        padding-bottom: 2rem;
    }

    .spacer {
        margin: 10rem 0;

    }

    .line {
        border: 1px solid rgb(145, 138, 138);
    }

    .pointer {
        cursor: pointer;
        aspect-ratio: 3/2;
        object-fit: contain;
        border-radius: 10px;
        mix-blend-mode: color-dodge;

        &:hover {
            box-shadow: 5px 5px 15px 5px $orange;

        }
    }
}
</style>
