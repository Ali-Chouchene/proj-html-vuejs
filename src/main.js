import { createApp } from 'vue';

/**BOOTSTAP */
import 'bootstrap/dist/css/bootstrap.min.css';
/**FONTAWSOME */
import { library } from '@fortawesome/fontawesome-svg-core';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { faBagShopping } from '@fortawesome/free-solid-svg-icons';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faCalendarDays } from '@fortawesome/free-solid-svg-icons';
import { faComments } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import App from './App.vue'

library.add(faMagnifyingGlass, faUser, faBagShopping, faStar, faCalendarDays, faComments);

const app = createApp(App)

app.component('font-awesome-icon', FontAwesomeIcon);

app.mount('#app');
