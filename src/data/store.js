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
            label: 'Upcomming Stock',
            title: "Assassin's Creed Mirage"
        },
        {
            label: 'Most Popular',
            title: 'Battlefiels 4'
        },
        {
            label: 'Latest Game',
            title: "Assassin's Creed Unity"
        },
        {
            label: '20% Discount',
            title: "Dragon's Dogma"
        },
        {
            label: '30% Discount',
            title: "World Of Tanks"
        },
    ]

})