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
            img: '00',
            title: 'Resident Evil 4 Remake'
        },
        {
            img: '01',
            title: 'Battlefiels 4'
        },
        {
            img: '02',
            title: "Assassin's Creed Unity"
        },
        {
            img: '03',
            title: "Demon's Souls"
        },
        {
            img: '04',
            title: "World Of Tanks"
        },
    ]

})