import { reactive } from 'vue';
export const store = reactive({

    /** header navbar options */

    navs: [
        {
            text: 'Home',
            link: '#'
        },
        {
            text: 'Shop',
            link: '#'
        },
        {
            text: 'Blog',
            link: '#'
        },
        {
            text: 'Media',
            link: '#'
        },
        {
            text: 'ShortCode',
            link: '#'
        },
        {
            text: 'Features',
            link: '#'
        },

    ],

    jumboBanners: [

        {
            label: 'Most Popular',
            img: '1',
            title: 'Battlefiels 4'
        },
        {
            label: 'Latest Game',
            img: '2',
            title: "Assassin's Creed Unity"
        },
        {
            label: '20% Discount',
            img: '3',
            title: "Dragon's Dogma"
        },
        {
            label: '30% Discount',
            img: '4',
            title: "World Of Tanks"
        },
        {
            label: 'Upcomming Stock',
            img: '5',
            title: "Assassin's Creed Mirage"
        },

    ],

    ProductOptions: [
        {
            id: 1,
            text: 'Featured'
        },
        {
            id: 2,
            text: 'New Arrival'
        },
        {
            id: 3,
            text: 'Best Seller'
        },
    ],
    ProductOptions1: [
        {
            id: 1,
            text: '1026 days'
        },
        {
            id: 2,
            text: '13 hours'
        },
        {
            id: 3,
            text: '24 mins'
        },
        {
            id: 4,
            text: '17 sec'
        },
    ],

    Products: [
        {
            sold: '-44%',
            vote: 4,
            id: 1,
            img1: '04',
            img2: '07',
            text: 'Dualshock 4 Custom',
            price: '£100.00',
            oldPrice: '£180.00',
        },
        {
            vote: 2,
            id: 2,
            img1: '09',
            img2: '09',
            text: 'AVerMedia Microphone',
            price: '£83.00 - £90.00',
        },
        {
            vote: 1,
            id: 3,
            img1: '03',
            img2: '03',
            text: 'RedDragon',
            price: '£299.99'
        },
        {
            vote: 3,
            id: 4,
            img1: '11',
            img2: '16',
            text: 'Dualshock 4 Normal',
            price: '£75.00'
        },
    ],
    Products1: [
        {
            sold: '-44%',
            vote: 4,
            id: 1,
            img1: '04',
            img2: '07',
            text: 'Dualshock 4 Custom',
            price: '£100.00',
            oldPrice: '£180.00',
        },
        {
            sold: '-21%',
            vote: 5,
            id: 2,
            img1: '18',
            img2: '18',
            text: 'Razer Mouse',
            price: '£79.99',
            oldPrice: '£99.99'
        },
        {
            vote: 4,
            id: 3,
            img1: '02',
            img2: '14',
            text: 'Headset',
            price: '£199.99'
        },
        {
            vote: 5,
            id: 4,
            img1: '10',
            img2: '01',
            text: 'JoyStick',
            price: '£175.00'
        },
    ]

})