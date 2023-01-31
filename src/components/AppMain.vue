<script>
import { store } from '../data/store'
import Jumbo from './subcomponents/Jumbo.vue'
import Policy from './subcomponents/Policy.vue'
export default {
    name: 'AppMain',
    components: { Jumbo, Policy },
    data() {
        return {
            store,
        }
    }
}
</script>

<template>
    <main>
        <div>
            <jumbo></jumbo>
            <policy></policy>
        </div>
    </main>
</template>

<style lang="scss" scoped>
main {
    background-image: url(../assets/img/body-bg.jpg);
    min-height: 100vh;

}
</style>
