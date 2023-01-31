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

    ]

})