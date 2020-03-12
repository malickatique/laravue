import VueRouter from 'vue-router';
import Vue from 'vue';

// Import components here
// Both ways are okay
const Home = Vue.component('home', require('./views/Home.vue').default);
import About from './views/About.vue';

let routes = [
    {
        path: '/',
        component: Home,
    },
    {
        path: '/about',
        component: About,
        name: About,
    },
];

export default new VueRouter({
    mode: 'history',
    routes
});