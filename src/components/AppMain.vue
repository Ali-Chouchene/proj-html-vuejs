<script>
import { store } from '../data/store'
import Jumbo from './subcomponents/Jumbo.vue'
export default {
    name: 'AppMain',
    components: { Jumbo },
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
        </div>
    </main>
</template>

<style lang="scss" scoped>

</style>
