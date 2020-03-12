# Vue Js Notes (Vue + Laravel)

## 1. Vue instant taste
- Add cdn in html file. 
- Create a Vue instant and use Vue inside root <div>.
```js
    new Vue({
        el: '#vue_app',
        data: {
            name: 'malik ateeq',
        },
    });
```
```html
    <div id="vue_app">
        <!-- Vue template code here -->
        <input type="text" :value="name">
    </div>
```

## 2. Setup Laravel+Vue
- Install laravel -> Install frontend scaffolding -> Generate basic scaffolding
    composer create-project --prefer-dist laravel/laravel laravue
    composer require laravel/ui
    composer require laravel/ui vue --auth

- Install NPM and use
    npm install
    npm run watch
    <!-- Or for live changes -->
    npm run hot

    ```html
        <!-- Include JS and CSS files -->
        <link href="{{ mix('css/app.css') }}" type="text/css" rel="stylesheet" />

        <div id="vue_app">
            <!-- Use root component -->
            <vue_app></vue_app>
        </div>

        <!-- Just above the body tag -->
        <script src="{{ mix('js/app.js') }}" type="text/javascript"></script>
    ```
    ```js
        // In resources/js/app.js

        // 1. Register the root component
        Vue.component('vue_app', require('./components/VueApp.vue').default);

        // 2. In components/VueApp.vue
        <template>
            <h1> Hello </h1>
        </template>
        <script>
            export default {
                mounted() {
                    console.log('Component mounted.')
                }
            }
        </script>
        <style></style>
    ```

## Vue Router
- install: npm install vue-router
- resources/routes.js file
```js
    import VueRouter from 'vue-router';
    import Vue from 'vue';
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
        },
    ];
    export default new VueRouter({
        mode: 'history',
        routes
    });
```
- resources/app.js file
```js
    import router from './routes.js';
    new Vue({
        el: '#vue_app',
        router
    });
```
- Use router in components or blade template
```html
    <!-- Link to load a router -->
    <router-link to="/about">About</router-link>

    <!-- place/load the view here -->
    <router-view></router-view>    
```
- Vue Js takes over Laravel routing
```php
    // Defined these routes above
    Routes::get('/user/{id}', 'UserController@details');

    // Tip: Define this at the end so that above routes used first 
    Route::get('/{any}', function () {
        return view('welcome');
    })->where('any', '.*');
```

## Vuex Data Sharing (just as Redux in React)
- State management in Vue: shared state management
- To Install: npm install vuex
```js
    import Vuex from 'vuex';
    Vue.use(Vuex);

    // Vuex architeccture
    !['architecture'](public/README/vuex.png)

    // Make a store in a seperate file and use it in Vue
    import axios from 'axios';
    import Vuex from 'vuex';
    import Vue from 'vue';
    Vue.use(Vuex);
    export default new Vuex.Store({
        state: {
            name: 'malik',
        },
        getters: {      // Get state data

        },
        mutations: {    // Make changes in state here
            NEW_NAME(state, data){
                state.name.push({
                    sub_name: data,
                })
            }
        },
        actions: {      // Backend interactivity
            addNew({state}, data){
                commit('NEW_NAME', data);
            }
        }
    });

    // Use it in Vue instance
    new Vue({
        store,
        el: '#my_app',
    });

    // Use store data in components
    {{ $store.state.name }}

    // Or get the data in Vue component's computed 
    computed={
        my_name(){
            return this.$store.state.name;
        }
    }
    // then use it like
    {{ my_name }}
```

## axios
- install: npm install axios
