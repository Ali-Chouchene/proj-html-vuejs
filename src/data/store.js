import { reactive } from 'vue';
export const store = reactive({

    /** header navbar options */

    navs: [
        {
            text: 'Home',
            link: '#home'
        },
        {
            text: 'Shop',
            link: '#shop'
        },
        {
            text: 'Blog',
            link: '#blog'
        },
        {
            text: 'Media',
            link: '#media'
        },
        {
            text: 'Info',
            link: '#info'
        },
        {
            text: 'Brands',
            link: '#brands'
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
    ],

    blogs: [
        {
            img: 'blog1',
            date: 'Jan 18,2022',
            comments: '53',
            text: 'Anyway REPS is a NYC agency repres enting photographers'
        },
        {
            img: 'blog2',
            date: 'May 30,2022',
            comments: '37',
            text: 'Nasual risus suscipit Lorem ipsum is simply text'
        },
        {
            img: 'blog3',
            date: 'Apr 13,2022',
            comments: '517',
            text: 'Nostrum lesum Christum Lorem Ipsum is simply text'
        },
    ],
    footerOptions: [
        {
            title: 'Information',
            links: [
                {
                    url: '#',
                    text: 'Bookmark'
                },
                {
                    url: '#',
                    text: 'Features'
                },
                {
                    url: '#',
                    text: 'Sitemap'
                },
                {
                    url: '#',
                    text: 'Lists'
                },
                {
                    url: '#',
                    text: 'Contact Us'
                }],
        },
        {
            title: 'Extra',
            links: [
                {
                    url: '#',
                    text: 'Delivery'
                },
                {
                    url: '#',
                    text: 'Cart'
                },
                {
                    url: '#',
                    text: 'Terms conditions'
                },
                {
                    url: '#',
                    text: 'My account'
                },
                {
                    url: '#',
                    text: 'About us'
                }],
        }
    ],
    crew: [
        {
            name: 'Michael De Santa',
            role: 'Web Developer',
            img: '2',
            text: "Im Michael and lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur quia nobis ea eius repellat commodi reiciendis dolorem consectetur adipisicing"
        },
        {
            name: 'Christopher Wayne',
            role: 'Data Analyst',
            img: '3',
            text: "Im Christopher and lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur quia nobis ea eius repellat commodi reiciendis dolorem consectetur adipisicing"
        },
    ]

})