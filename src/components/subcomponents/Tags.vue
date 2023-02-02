<script>
import { store } from '../../data/store'
export default {
    name: 'Tags',
    components: {},
    data() {
        return {
            store,
        }
    },
    props: {
        title: String,
        label: String,
        button: Boolean,
        big: String
    }
}
</script>

<template>
    <div>
        <h2 class="label d-none d-xl-block ">{{ label }}</h2>
        <h1 :class="big" class="title pb-3">{{ title }}</h1>
        <button v-if="button" type="button" class="btn btn-light rounded-0 mt-5">Shop Now</button>
    </div>
</template>

<style lang="scss" scoped>
@use '../../assets/scss/partials/variables' as *;

.label {
    background-color: $orange;
    margin-bottom: 2rem;
    width: 300px;
    text-align: center;
    clip-path: polygon(100% 0, 89% 100%, 0 100%, 10% 0);
    padding: 0.3rem;
    font-weight: 700;
    font-size: 30px;
}

.title {
    color: $white;
    font-weight: 600;
}

.big {
    font-size: 70px;
}

button:hover {
    background-color: $orange;
}
</style>