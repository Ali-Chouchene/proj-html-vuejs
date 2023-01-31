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
    <div id="carouselExample" class="carousel slide">
        <div class="carousel-inner">
            <div v-for="banner in store.jumboBanners" class="carousel-item active">
                <img :src="`../../assets/img/banners/cms-banner-${banner.img}.jpg`" class="d-block w-100"
                    :alt="banner.title">
            </div>

        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
        </button>
    </div>
</template>

<style lang="scss" scoped>

</style>
