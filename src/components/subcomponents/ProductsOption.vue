<script>
import { store } from '../../data/store'
export default {
    name: 'ProductsOption',
    components: {},
    data() {
        return {
            store,
        }
    },
    props: {
        text: String
    }
}
</script>

<template>
    <div class="choice">
        <h5>{{ text }}</h5>
    </div>
</template>

<style lang="scss" scoped>
.choice {
    width: calc(100% / 4);
    flex-grow: 1;
    height: 100%;
    color: white;
    border: 0.5px solid rgba(110, 100, 100, 0.753);
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1.5rem;

    h5 {
        margin: 0;
        cursor: pointer;
        font-weight: 600;

        &:hover {
            color: #f9aa01;
            margin: 0;
        }
    }


}
</style>
