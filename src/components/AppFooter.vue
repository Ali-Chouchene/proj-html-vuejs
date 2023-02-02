<script>
import CardRow from './subcomponents/CardRow.vue';
import { store } from '../data/store'
export default {
    name: 'AppFooter',
    components: { CardRow },
    data() {
        return {
            store
        }
    },
}
</script>

<template>
    <footer>
        <div class="container">
            <card-row>
                <div class="col">
                    <h5>Address Info</h5>
                    <font-awesome-icon class="icon" icon="fa-solid fa-location-dot" />
                    <span class="ms-3">60 29th Street San Francisco, CA 94110 507-Union Trade Center, USA</span><br>
                    <font-awesome-icon class="icon" icon="fa-solid fa-phone" />
                    <span class="ms-3">(+00) 123-456-789</span><br>
                    <font-awesome-icon class="icon" icon="fa-solid fa-envelope" />
                    <span class="ms-3">demo@example.com</span>
                </div>
            </card-row>
        </div>
    </footer>
</template>

<style lang="scss" scoped>
@use '../assets/scss/partials/variables' as *;

footer {
    background-image: url(../../public/banners/footer-bg.png);
}

.col {
    color: $white;
    line-height: 40px;

    h5 {
        margin-bottom: 1rem;
    }

    .icon {
        color: $orange;
    }
}
</style>