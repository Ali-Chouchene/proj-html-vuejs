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
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faGooglePlus } from '@fortawesome/free-brands-svg-icons';
import { faSkype } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faAnglesUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

import App from './App.vue'

library.add(faMagnifyingGlass, faUser, faBagShopping, faStar, faCalendarDays, faComments, faLocationDot, faPhone, faEnvelope, faPaperPlane, faFacebook, faSkype, faTwitter, faGooglePlus, faInstagram, faAnglesUp);

const app = createApp(App)

app.component('font-awesome-icon', FontAwesomeIcon);

app.mount('#app');
