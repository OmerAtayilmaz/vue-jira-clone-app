import { createApp } from 'vue';
import PrimeVue from 'primevue/config';

import { createRouter, createWebHistory } from 'vue-router';
import { routes} from "./routes.js";

import { createPinia } from 'pinia';
//theme
import "primevue/resources/themes/lara-light-indigo/theme.css";

//core
import "primevue/resources/primevue.min.css";
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';

import './style.css'
import App from './App.vue'

import Button from 'primevue/button';
import Menubar from 'primevue/menubar';
import Sidebar from 'primevue/sidebar';
import DataView from 'primevue/dataview';
import Card from 'primevue/card';
import Dialog from 'primevue/dialog';
import InputText from 'primevue/inputtext';


const router = createRouter({
    history: createWebHistory(),
    routes: routes,
});

const pinia = createPinia();

const app = createApp(App);
app.use(router);
app.use(pinia);
app.use(PrimeVue, { inputStyle: "filled" });
app.component('Button', Button);
app.component('Menubar', Menubar);
app.component('Sidebar', Sidebar);
app.component('DataView', DataView);
app.component('Card', Card);
app.component('Dialog', Dialog);
app.component('InputText', InputText);
app.mount('#app')
