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
        <section id="info">
            <div class="container">
                <card-row>
                    <div class="col">
                        <h5>Address Info</h5>
                        <font-awesome-icon class="icon" icon="fa-solid fa-location-dot" />
                        <span class="ms-3">60 29th Street San Francisco, CA 94110 507-Union Trade Center, United States
                            of
                            America </span><br>
                        <font-awesome-icon class="icon" icon="fa-solid fa-phone" />
                        <span class="ms-3">(+00) 123-456-789</span><br>
                        <font-awesome-icon class="icon" icon="fa-solid fa-envelope" />
                        <span class="ms-3">demo@example.com</span>
                    </div>
                    <div v-for="option in store.footerOptions" :key="option.links.text" class="col">
                        <h5>{{ option.title }}</h5>
                        <div class="d-flex flex-column justify-content-start">
                            <a class="w-50" v-for="link in option.links" :href="link.url">{{ link.text }}</a>
                        </div>
                    </div>
                    <div class="col ">
                        <h5>Our Newsletter</h5>
                        <p class="">There are many variations of passages of form humour of randomised</p>
                        <div class="input-group mb-3">
                            <input type="text" class="form-control " placeholder="Your Email">
                            <span class="send d-flex align-items-center p-2"><font-awesome-icon class="fa-xl"
                                    icon="fa-solid fa-paper-plane" /></span>
                        </div>
                        <div class="d-flex justify-content-around text-white w-75">
                            <a href="#"><font-awesome-icon class="fa-xl" icon="fa-brands fa-facebook" /></a>
                            <a href="#"><font-awesome-icon class="fa-xl" icon="fa-brands fa-twitter" /></a>
                            <a href="#"><font-awesome-icon class="fa-xl" icon="fa-brands fa-google-plus" /></a>
                            <a href="#"><font-awesome-icon class="fa-xl" icon="fa-brands fa-skype" /></a>
                            <a href="#"><font-awesome-icon class="fa-xl" icon="fa-brands fa-instagram" /></a>
                        </div>
                    </div>
                </card-row>
            </div>
        </section>
        <div class="line"></div>
        <div class="container">
            <div class="d-flex justify-content-between py-3 align-items-center">
                <h6 class="text-white m-0">Copyright &copy; 2023 Codezeel</h6>
                <img src="../../public/img/cards.png" alt='v'>
            </div>
        </div>
    </footer>
</template>

<style lang="scss" scoped>
@use '../assets/scss/partials/variables' as *;

footer {
    background-image: url(../../public/banners/footer-bg.png);
}

.line {
    border: 1px solid rgb(145, 138, 138);
}

.col {
    color: rgb(167, 159, 159);
    line-height: 30px;

    h5 {
        color: $white;
        margin-bottom: 1rem;
    }

    .icon {
        color: $orange;
    }

    a {
        color: rgb(167, 159, 159);
        text-decoration: none;

        &:hover {
            color: $orange;
        }
    }

    .form-control {
        border-radius: 0;
        padding: 9px;
    }

    .send {
        background-color: $white;
        color: $dark;
        cursor: pointer;

        &:hover {
            color: $orange;
        }
    }
}
</style>