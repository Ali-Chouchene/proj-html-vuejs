<script>
import { store } from '../../data/store'
export default {
    name: 'Products',
    components: {},
    data() {
        return {
            store
        }
    },
    methods: {
        setStars(n) {
            let starClass = n <= this.prod.vote ? 'checked' : '';
            return starClass;
        }
    },
    props: {
        prod: Object
    }
}
</script>

<template>
    <div class="col">
        <img :src="`../../../public/products/${prod.img1}.jpg`" :key="prod.id" class="img-fluid img1" alt="">
        <img v-if="prod.img2" :src="`../../../public/products/${prod.img2}.jpg`" :key="prod.id" class="img-fluid img2"
            alt="">
        <h2 v-if="prod.sold" class="label d-none d-xl-block ">{{ prod.sold }}</h2>
        <div class="card-label">
            <font-awesome-icon v-for="star in 5" :class="setStars(star)" class="fa-xs" icon="fa-solid fa-star" />
            <h5 class="py-1">{{ prod.text }}</h5>
            <div class="d-flex gap-2">
                <h6 class="old-price" v-if="prod.oldPrice">{{ prod.oldPrice }}</h6>
                <h6>{{ prod.price }}</h6>
            </div>

        </div>
    </div>
</template>

<style lang="scss" scoped>
.col {
    height: 300px;
    padding: 0 7px;
    position: relative;
    top: 0;
    bottom: 0;
    cursor: pointer;

    &:hover .img2 {
        display: block;
    }

    &:hover .img1 {
        display: none;
    }

    .img2 {
        display: none;
    }

    img {
        width: 100%;
        object-fit: fill;


    }


    .label {
        background-color: #f9aa01;
        width: 20%;
        text-align: center;
        clip-path: polygon(100% 0, 89% 100%, 0 100%, 10% 0);
        padding: 0.3rem;
        font-weight: 600;
        font-size: 15px;
        position: absolute;
        top: 5%;
        left: 10%;
    }

    .card-label {
        background-color: black;
        padding: 1rem;
        height: 40%;
        margin-bottom: 2rem;

        .checked {
            color: gold;
        }

        h5 {
            color: white;

        }

        h6 {
            color: #f9aa01;
        }

        .old-price {
            text-decoration: line-through;
            color: gray;
        }
    }


}
</style>
