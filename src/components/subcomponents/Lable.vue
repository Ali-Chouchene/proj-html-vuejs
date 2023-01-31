<script>
import { store } from '../../data/store'
export default {
    name: 'Lable',
    components: {},
    data() {
        return {
            store,
        }
    },
    props: {
        title: String,
        label: String
    }
}
</script>

<template>
    <div>
        <h2 class="label">{{ label }}</h2>
        <h1 class="title pb-3">{{ title }}</h1>
        <button type="button" class="btn btn-light rounded-0 mt-5">Shop Now</button>
    </div>
</template>

<style lang="scss" scoped>
.label {
    background-color: #f9aa01;
    margin-bottom: 2rem;
    width: 350px;
    text-align: center;
    clip-path: polygon(100% 0, 89% 100%, 0 100%, 10% 0);
    padding: 0.3rem;
    font-weight: 700;
}

.title {
    font-size: 50px;
    color: white;
    font-size: 70px;
    font-weight: 600;
}

button:hover {
    background-color: #f9aa01;
}
</style>