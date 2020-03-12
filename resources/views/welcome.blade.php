<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>LaraVue</title>

    <link href="{{ mix('css/app.css') }}" type="text/css" rel="stylesheet" />
    

</head>

<body>

    <!-- VUE SPA -->
    <div id="vue_app">
        <router-link to="/">Home</router-link>
        <router-link to="/about">About</router-link>

        <!-- Display the route view -->
        <router-view></router-view>
    </div>

    <script src="{{ mix('js/app.js') }}" type="text/javascript"></script>
</body>

</html>