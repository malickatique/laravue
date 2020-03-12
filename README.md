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

## axios
- install: npm install axios
