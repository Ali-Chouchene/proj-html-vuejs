<script>
import { store } from '../../data/store'
import Lable from './Lable.vue'
export default {
    name: 'Jumbo',
    components: { Lable },
    data() {
        return {
            store,
        }
    }
}
</script>

<template>
    <div class="jumbo">
        <img src="../../assets/img/banners/5.jpg" alt="">
        <lable class="product-info " :title="store.jumboBanners[0].title" :label="store.jumboBanners[0].label">
        </lable>
    </div>
</template>

<style lang="scss" scoped>
.jumbo {
    background-color: rgb(233, 54, 54);
    height: 75vh;
    position: relative;
    left: 0;
    right: 0;

    img {
        height: 100%;
        width: 100%;
        object-fit: fill;
    }

    .product-info {
        position: absolute;
        top: 30%;
        left: 10%;
        width: 30%;

    }
}
</style>
