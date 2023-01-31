<script >
export default {
    name: 'NavBar',
    components: {},
    data() {
        return {

        }
    },
    props: {
        item: Object
    }
}
</script>

<template>
    <ul>
        <li><a :href="item.link">{{ item.text }}</a></li>
    </ul>
</template>

<style lang="scss" scoped>
* {
    color: white;
    text-decoration: none;
    list-style: none;

    ul {
        margin: 0;

        a {
            font-size: 1.2rem;
            font-weight: 700;

            &:hover {
                color: #f9aa01;
            }

            &:active {
                color: #f9aa01;
            }
        }
    }
}
</style>
