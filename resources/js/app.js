import './bootstrap';

window.Vue = require('vue');

window.$ = require('jquery');
window.JQuery = require('jquery');

import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const routes = [
    { path: '*', component: require('./components/NotFound.vue') },

    { path: '/', component: require('./components/HomeComponent.vue') },
    // { path: '/reportes/prestamos/porvencer', component: require('./components/reportes/PrestamosPorVencerComponent.vue') },
]

const router = new VueRouter({
    routes,
})

const app = new Vue({
    el: '#app',
    router,
});
