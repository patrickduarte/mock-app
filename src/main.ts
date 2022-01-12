import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
 import { FontAwesomeIcon} from '@fortawesome/vue-fontawesome';
 import {library} from '@fortawesome/fontawesome-svg-core';
 import { fas } from  '@fortawesome/free-solid-svg-icons';

library.add(fas);

axios.defaults.baseURL = 'http://endereco_api';
axios.defaults.withCredentials = true;

createApp(App)
.component("font-awesome-icon", FontAwesomeIcon)
.use(store).use(router).mount('#app')
