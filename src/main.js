import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

// style scss
import './style.css'

// Import Boxicons
import 'boxicons/css/boxicons.min.css';
// import Boxicons from '../node_modules/boxicons/css/boxicons.css';

createApp(App).use(store).use(router).mount('#app');
