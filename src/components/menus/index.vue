<template>
    <div>
        <el-menu :default-active="activeIndex" :collapse="false" @select="menuSelect">
            <side-bar :list="menuList"/>
        </el-menu>
    </div>
</template>

<script>
    import SideBar from './SideBar'

    export default {
        name: "menus",
        components: {
            SideBar,
        },
        data() {
            return {
                activeIndex: '1',
                menuList: [
                    {
                        name: "首页",
                        index: "home",
                        path: "/",
                        icon: "el-icon-menus",
                        children: []
                    },
                    {
                        name: "系统",
                        index: "system",
                        path: "/",
                        icon: "el-icon-menus",
                        children: [
                            {
                                name: "关于",
                                index: "about",
                                path: "/about",
                                icon: "el-icon-menus",
                                children: []
                            }
                        ]
                    }
                ],
            }
        },
        methods: {
            menuSelect(path) {
                this.$router.push(path)
            },
        }
    }
</script>

<style scoped>

</style>