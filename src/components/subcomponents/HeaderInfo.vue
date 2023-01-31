<script >
export default {
    name: 'HeaderInfo',
    data() {
        return {

        }
    }
}
</script>

<template>
    <div class="info">
        <div class="container info-nav d-flex align-items-center justify-content-between ">
            <div class="left-h-nav d-flex align-items-center justify-content-between">
                <a href="#">Wishlist(0)</a>
                <span class="bar">|</span>
                <div class="dropdown">
                    <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown"
                        aria-expanded="false">
                        Need Help ?
                    </button>
                    <ul class="dropdown-menu">
                        <li><a class="dropdown-item" href="#">More info</a></li>
                        <li><a class="dropdown-item" href="#">Contact us</a></li>
                        <li><a class="dropdown-item" href="#">Faq</a></li>
                    </ul>
                </div>
            </div>
            <div class="right-h-nav d-flex align-items-center">
                <p class="m-0">Call 24/7 .<a href="#">800-8754-987</a></p>
            </div>

        </div>

    </div>
</template>

<style lang="scss" scoped>
* {
    color: rgb(172, 169, 169);
}

.info {
    height: 5vh;
    background-color: rgb(0, 0, 0);
    border-bottom: 1px solid rgb(94, 94, 94);

    .info-nav {
        color: white;
        height: 100%;

        .left-h-nav {
            width: 200px;
        }

        .bar {
            color: rgb(145, 141, 141);
            padding-left: 10px;
        }

        a {
            text-decoration: none;

            &:hover {
                color: white;
            }

        }

        .dropdown-toggle {
            background-color: transparent;
            border: 0;

        }
    }
}
</style>