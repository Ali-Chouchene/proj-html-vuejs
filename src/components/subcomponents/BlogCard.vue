<script>
import Tags from './Tags.vue';
export default {
    name: 'BolgCard',
    components: { Tags },
    props: {
        img: String,
        title: String,
        label: String
    },
    props: {
        blog: Object
    }

}

</script>

<template>
    <div class="col mb-3">
        <img class="img-fluid" :src="`../../../public/img/${blog.img}.jpg`" :alt="blog.img">
        <div class="box gap-3">
            <div class="d-flex align-items-center gap-2">
                <font-awesome-icon class="icon" icon="fa-solid fa-calendar-days" />
                <h6>{{ blog.date }}</h6>
            </div>
            <div class="d-flex align-items-center gap-2">
                <font-awesome-icon class="icon" icon="fa-solid fa-comments" />
                <h6>{{ blog.comments }} Comments</h6>
            </div>
        </div>
        <h5>{{ blog.text }}</h5>
    </div>
</template>

<style lang="scss" scoped>
.col {
    max-width: 450px;


    .box {
        display: flex;
        padding-top: 1rem;

        h6 {
            color: rgb(138, 131, 131);
            margin: 0;

        }

        .icon {
            color: #f9aa01;
        }
    }

    h5 {
        color: white;
        font-weight: 500;
        padding-top: 1rem;
        font-size: 15px;
    }
}
</style>