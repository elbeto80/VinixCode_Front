import './bootstrap';

window.Vue = require('vue');

import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const routes = [
    { path: '*', component:()=> import('./components/NotFound.vue') },
    { path: '/', component:()=> import('./components/HomeComponent.vue') },
    { path: '/pets', component:()=> import('./components/PetsComponent.vue') },
    { path: '/categories', component:()=> import('./components/CategoriesComponent.vue') },
    { path: '/tags', component:()=> import('./components/TagsComponent.vue') },
]

const router = new VueRouter({
    routes,
})

const app = new Vue({
    el: '#app',
    router,
});
