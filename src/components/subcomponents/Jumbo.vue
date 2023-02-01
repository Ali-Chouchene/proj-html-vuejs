<script>
import { store } from '../../data/store'
import Tags from './Tags.vue'
export default {
    name: 'Jumbo',
    components: { Tags },
    data() {
        return {
            store,
        }
    }
}
</script>

<template>
    <div id="jumbo" class="carousel slide d-none d-lg-block">
        <div class="carousel-inner h-100">
            <div class="carousel-item active">
                <img :src="`../../public/banners/0.jpg`" class="d-block w-100 banner-img" alt="Resident Evil 4">
                <tags class="product-info" big="big" :button="true" title="Resident Evil 4 Remake"
                    label="Upcoming Stock"></tags>
            </div>
            <div v-for="banner in store.jumboBanners" class="carousel-item">
                <img :src="`../../public/banners/${banner.img}.jpg`" :key="banner.img" class="d-block w-100 banner-img"
                    :alt="banner.title">
                <tags class="product-info" big="big" :button="true" :title="banner.title" :label="banner.label">
                </tags>
            </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#jumbo" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#jumbo" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
        </button>
    </div>
</template>

<style lang="scss" scoped>
#jumbo {
    height: 75vh;
    position: relative;
    left: 0;
    right: 0;
    margin-bottom: 1rem;

    .carousel-item {
        height: 100%;
        width: 100%;
    }

    .banner-img {
        height: 100%;
        width: 100%;
        object-fit: fill;
    }

    .product-info {
        position: absolute;
        top: 30%;
        left: 15%;
        width: 30%;

    }
}
</style>
