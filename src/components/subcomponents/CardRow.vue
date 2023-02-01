<script>
import Tags from './Tags.vue';
export default {
    name: 'CardRow',
    components: { Tags, }
}
</script>

<template>
    <div class="container py-5">
        <div class="row">
            <slot></slot>
        </div>
    </div>
</template>

<style lang="scss" scoped>

</style>