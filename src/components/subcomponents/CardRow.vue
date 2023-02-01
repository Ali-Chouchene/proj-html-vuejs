<script>
import Tags from './Tags.vue';
export default {
    name: 'CardRow',
    components: { Tags, }
}
</script>

<template>
    <div class="container">
        <div class="row row-cols-1 row-cols-md-2">
            <slot></slot>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.col {
    position: relative;

    .product-info {
        position: absolute;
        top: 15%;
        right: 10%;
        width: 50%;

        h2 {
            font-size: 20px;
        }



    }
}
</style>