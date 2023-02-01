<script>
import { store } from '../../data/store'
export default {
    name: 'Policy',
    components: {},
    data() {
        return {
            store,
        }
    },

}
</script>

<template>
    <div class="container py-5">
        <div class="row row-cols-1 row-cols-sm-2 row-cols-lg-4">
            <div class="col ">
                <div class="d-flex align-items-center be-gray">
                    <img src="../../../public/icons/delivey.png" alt="">
                    <div>
                        <h6>Free Delivery</h6>
                        <p>Free Shipping On All Order</p>
                    </div>
                </div>
            </div>
            <div class="col ">
                <div class="d-flex align-items-center be-gray">
                    <img src="../../../public/icons/money.png" alt="">
                    <div>
                        <h6>Money Return</h6>
                        <p>Back Guarantee in 7days</p>
                    </div>
                </div>
            </div>
            <div class="col ">
                <div class="d-flex align-items-center be-gray">
                    <img src="../../../public/icons/sold.png" alt="">
                    <div>
                        <h6>Member Discount</h6>
                        <p>On every order over £130.00</p>
                    </div>
                </div>
            </div>
            <div class="col ">
                <div class="d-flex align-items-center be-gray">
                    <img src="../../../public/icons/return.png" alt="">
                    <div>
                        <h6>Return Policy</h6>
                        <p>Support 24 hours a day</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
* {
    color: white;
}

h6 {
    margin: 0;
    padding-right: 1rem;
    border-right: 1px solid gray;
}

p {
    margin: 0;
    padding-right: 1rem;
    border-right: 1px solid gray;
    color: rgb(168, 159, 159);
}

img {
    height: 100px;
    width: 100px;

}

.col {
    &:hover {
        background-color: #f9aa01;
        ;
    }
}
</style>