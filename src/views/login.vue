<template>
    <div>
        <el-card class="box-card">
            <template #header>
                <span>用户登录</span>
            </template>
            <el-form ref="login" :model="login">
                <el-form-item label="账号">
                    <el-input v-model="login.username" aria-placeholder="请输入账号"></el-input>
                </el-form-item>
                <el-form-item label="密码">
                    <el-input v-model="login.password" type="password" aria-placeholder="请输入密码"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="onLogin">登录</el-button>
                    <el-button type="primary">重置</el-button>
                </el-form-item>
            </el-form>
        </el-card>
    </div>
</template>

<script>
    export default {
        name: "login",
        data() {
            return {
                login: {}

            }
        },
        methods: {
            onLogin() {

            },
        }
    }
</script>

<style scoped>
    .box-card {
        width: 300px;
    }
</style>