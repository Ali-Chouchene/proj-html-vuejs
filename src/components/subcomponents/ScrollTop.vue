<script>

export default {
    name: 'ScrollTop',
    components: {},
    data() {
        return {

        }
    }
}
</script>

<template>
    <div class="scroll-top d-flex justify-content-center align-items-center">
        <div class="icon">
            <a href="#top"><font-awesome-icon class="fa-2xl" icon="fa-solid fa-angles-up " /></a>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use '../../assets/scss/partials/variables' as *;

.scroll-top {
    width: 55px;
    height: 55px;
    transform: rotate(45deg);
    background-color: $orange;
    position: fixed;
    right: 2%;
    bottom: 2%;
    z-index: 3;
    border: 2px solid black;

    .icon {
        transform: rotate(-45deg);

        a {
            color: black;
            text-decoration: none;
        }

    }
}
</style>
