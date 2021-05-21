<template>
    <div id="app">
        <router-view v-if="$route.path=='/login'"/>
        <index v-else/>
    </div>
</template>
<script>
    import index from "@/views/index";

    export default {
        name: 'app',
        components: {
            index,
        }
    }
</script>

<style>
    html, body {
        margin: 0;
        height: 100%;
    }

    #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        height: 100%;
    }
</style>
