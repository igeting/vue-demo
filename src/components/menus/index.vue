<template>
    <div>
        <el-menu :default-active="activeIndex" :collapse="false" @select="menuSelect">
            <side-bar :list="menuList"></side-bar>
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
                        name: "菜单1",
                        index: "menu1",
                        path: "/home",
                        icon: "el-icon-menus",
                        children: [
                            {
                                name: "菜单1-1",
                                index: "menu1-1",
                                path: "/about",
                                icon: "el-icon-menus",
                                children: []
                            }
                        ]
                    },
                    {
                        name: "菜单2",
                        index: "menu2",
                        path: "/about",
                        icon: "el-icon-menus",
                        children: []
                    }
                ],
            }
        },
        methods: {
            menuSelect(path) {
                console.log(path)
                this.$router.push(path)
            },
        }
    }
</script>

<style scoped>

</style>