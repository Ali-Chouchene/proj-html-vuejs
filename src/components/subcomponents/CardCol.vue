<script>
import Tags from './Tags.vue';
export default {
    name: 'CardCol',
    components: { Tags },
    props: {
        img: String,
        title: String,
        label: String

    }
}

</script>

<template>
    <div class="col  mb-1">
        <img class="img-fluid" :src="`../../public/banners/${img}.jpg`" :alt="title">
        <tags class="product-info" :title="title" :label="label"></tags>
    </div>
</template>

<style lang="scss" scoped>
.col {
    position: relative;
    cursor: pointer;

    img {
        object-fit: fill;
    }

    .product-info {
        position: absolute;
        top: 20%;
        right: 5%;
        width: 50%;
    }
}
</style>