<script>
import { store } from '../data/store'
import Jumbo from './subcomponents/Jumbo.vue'
import Policy from './subcomponents/Policy.vue'
import CardRow from './subcomponents/CardRow.vue'
import CardCol from './subcomponents/CardCol.vue'
export default {
    name: 'AppMain',
    components: { Jumbo, Policy, CardRow, CardCol },
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
            <card-row>
                <card-col img="2" title="Assassin's Creed Unity" label="Most Popular"></card-col>
                <card-col img="1" title="Battlefiels 4" label="Latest Game"></card-col>
            </card-row>
            <h1 class="mt-5">Special Category</h1>
        </div>
    </main>
</template>

<style lang="scss" scoped>
main {
    background-image: url(../assets/img/body-bg.jpg);
    min-height: 100vh;

}
</style>
