<template>
    <div>
        <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="menuSelect">
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
                        icon: "el-icon-menus",
                        children: [
                            {
                                name: "菜单1-1",
                                index: "menu1-1",
                                icon: "el-icon-menus",
                                children: [
                                    {
                                        name: "菜单1-1-1",
                                        index: "menu1-1-1",
                                        icon: "el-icon-menus",
                                        children: []
                                    },
                                    {
                                        name: "菜单1-1-2",
                                        index: "menu1-1-2",
                                        icon: "el-icon-menus",
                                        children: []
                                    }
                                ]
                            },
                            {
                                name: "菜单1-2",
                                index: "menu1-2",
                                icon: "el-icon-menus",
                                children: []
                            }
                        ]
                    },
                    {
                        name: "菜单2",
                        index: "menu2",
                        icon: "el-icon-document-copy",
                        children: [
                            {
                                name: "数据集管理2",
                                index: "dataset2",
                                icon: "el-icon-document-copy",
                                children: []
                            },
                        ]
                    },
                    {
                        name: "菜单2",
                        index: "menu3",
                        icon: "el-icon-folder",
                        children: []
                    }
                ],
            }
        },
        methods: {
            menuSelect(index) {
                console.log(index)
            },
        }
    }
</script>

<style scoped>

</style>