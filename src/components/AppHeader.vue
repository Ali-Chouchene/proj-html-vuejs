<script >
import HeaderInfo from './subcomponents/HeaderInfo.vue'
export default {
    name: 'AppHeader',
    components: { HeaderInfo },
    data() {
        return {

        }
    }
}
</script>

<template>
    <header>
        <div>
            <header-info></header-info>
        </div>

    </header>
</template>

<style lang="scss" scoped>
header {
    height: 15vh;
    background-color: black;
}
</style>
