import { createApp } from 'vue'
import router from "./router";
import App from './App.vue';
import 'nprogress/nprogress.css';

createApp(App).use(router).mount('#app');

