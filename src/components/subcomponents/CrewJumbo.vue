<script>
import { store } from '../../data/store'
import Tags from './Tags.vue'
export default {
    name: 'CrewJumbo',
    components: { Tags },
    data() {
        return {
            store,
        }
    }
}
</script>
<template>
    <div class="container px-5">
        <div id="carouselExample" class="carousel slide">
            <div class="carousel-inner py-5">
                <div class=" carousel-item flex-column  align-items-center text-center p-5 text-white active">
                    <img src="../../../public/crew/crew1.jpg" class="img-fluid profil-pic" alt="crew">
                    <h4 class="my-3">Luies Charls <span class="role">(Web Designer)</span></h4>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur quia nobis ea eius repellat
                        commodi reiciendis dolorem ducimus maxime illo, ullam quod laudantium voluptas culpa libero
                        molestias nisi natus porro.</p>
                </div>
                <div v-for="member in store.crew"
                    class="carousel-item flex-column align-items-center text-center p-5 text-white">
                    <img :src="`../../../public/crew/crew${member.img}.jpg`" class="img-fluid profil-pic" alt="crew">
                    <h4 class="my-3">{{ member.name }} <span class="role">({{ member.role }})</span></h4>
                    <p>{{ member.text }}</p>
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
    </div>
</template>

<style lang="scss" scoped>
@use '../../assets/scss/partials/variables' as *;

.carousel-inner {
    height: 100%;
}

.profil-pic {
    height: 120px;
    width: 120px;
    border-radius: 50%;
    border: 2px solid $orange;
    text-align: center;

}

.role {
    color: $orange;
}
</style>
