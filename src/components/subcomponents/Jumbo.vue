<script>
import { store } from '../../data/store'
export default {
    name: 'Jumbo',
    components: {},
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
        <div>
            <h1>{{ store.jumboBanners[0].title }}</h1>
        </div>

    </div>
</template>

<style lang="scss" scoped>
.jumbo {
    background-color: rgb(233, 54, 54);
    height: 75vh;

    img {
        height: 100%;
        width: 100%;
        object-fit: fill;
    }
}
</style>
