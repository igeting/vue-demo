<template>
    <div class="about">
        <h1>This is an about page</h1>
        <el-image :src="require('../assets/logo.png')"/>
        <user-info></user-info>
    </div>
</template>

<script>
    import UserInfo from "./user/UserInfo";

    export default {
        name: 'about',
        components: {
            UserInfo,
        }
    }
</script>
