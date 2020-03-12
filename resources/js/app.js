/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

import router from './routes.js';
import store from './store/store.js';

new Vue({
    store,
    el: '#vue_app',
    router
});
