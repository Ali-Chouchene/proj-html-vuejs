<script>
import { store } from '../../data/store'
export default {
    name: 'Banners',
    components: {},
    data() {
        return {
            store,
        }
    },
    prompt: {
        jumbo: Object,
    }
}
</script>

<template>

    <div class="carousel-inner">
        <div class="carousel-item active">
            <!-- <img :src="`../assets/img/banners/1.jpg`" class="d-block w-100 " :alt="jumbo.title"> -->
            <div class="carousel-caption d-none d-md-block">
                <!-- <h5>{{ jumbo.title }}</h5> -->
                <p>Some representative placeholder content for the first slide.</p>
            </div>
        </div>
    </div>

</template>

<style lang="scss" scoped>

</style>