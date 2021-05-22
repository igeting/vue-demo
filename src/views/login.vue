<template>
    <div>
        <el-card class="box-card">
            <template #header>
                <span>用户登录</span>
            </template>
            <el-form ref="login" :model="user" :rules="rules">
                <el-form-item label="账号" prop="username">
                    <el-input v-model="user.username" aria-placeholder="请输入账号"></el-input>
                </el-form-item>
                <el-form-item label="密码" prop="password">
                    <el-input v-model="user.password" type="password" aria-placeholder="请输入密码"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="onLogin('login')">登录</el-button>
                    <el-button type="primary" @click="reset('login')">重置</el-button>
                </el-form-item>
            </el-form>
        </el-card>
    </div>
</template>

<script>
    import {login} from "@/api/user/user";

    export default {
        name: "login",
        data() {
            return {
                user: {
                    username: null,
                    password: null,
                },
                rules: {
                    username: [
                        {required: true, message: '请输入账号', trigger: 'blur'},
                    ],
                    password: [
                        {required: true, message: '请输入密码', trigger: 'blur'},
                    ],
                },
            }
        },
        methods: {
            onLogin(ref) {
                this.$refs[ref].validate((valid) => {
                    if (valid) {
                        login({
                            username: this.user.username,
                            password: this.user.password,
                        }).then(res => {
                            // console.log(res)
                            if (res.status == 200) {
                                sessionStorage.setItem('token', res.data.token ? res.data.token : 'token')
                                this.$router.push('/')
                                this.$message({
                                    message: '登录成功',
                                    type: 'success',
                                    center: true,
                                })
                            } else {
                                this.$message({
                                    message: '登录错误',
                                    type: 'error',
                                    center: true,
                                })
                            }
                        }).catch(err => {
                            console.log(err)
                        })
                    }
                })
            },
            reset(ref) {
                this.$refs[ref].resetFields()
            }
        }
    }
</script>

<style scoped>
    .box-card {
        width: 300px;
    }
</style>