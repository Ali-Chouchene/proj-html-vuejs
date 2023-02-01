<script>
import Tags from './Tags.vue';
export default {
    name: 'CardS',
    components: { Tags },
    props: {
        img: String,
        title: String,
        label: String

    }
}

</script>

<template>
    <div class="col mb-5">
        <div class="box">
            <img class="img-fluid" :src="`../../public/img/${img}.jpg`" :alt="title">
            <div class="overlay d-flex flex-column justify-content-center ps-4">
                <h5>{{ title }}</h5>
                <a href="#">Shop Now</a>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.col {
    max-width: 450px;
    min-height: 500px;


    .box {
        height: 100%;
        position: relative;


        img {
            object-fit: fill;
        }

        h5 {
            color: white;
            font-weight: 600;
        }

        a {
            color: #f9aa01;
        }

        .overlay {
            position: absolute;
            bottom: 0;
            left: 0;
            right: 0;
            background-color: #1d14279a;
            height: 20%;
        }
    }
}
</style>