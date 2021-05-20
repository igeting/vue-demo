<template>
    <div>
        <el-button @click="getUser">get user</el-button>
        <el-button @click="setUser">set user</el-button>
    </div>
</template>

<script>
    import {getUser, setUser} from "../../api/user/user";

    export default {
        name: "userinfo",
        data() {
            return {
                userList: []
            }
        },
        methods: {
            getUser() {
                getUser({}).then(res => {
                    console.log(res)
                })
            },
            setUser() {
                setUser({name: 'jack', age: 20}).then(res => {
                    console.log(res)
                })
            }
        },
        mounted() {
            // this.addUser()
        }
    }
</script>

<style scoped>

</style>