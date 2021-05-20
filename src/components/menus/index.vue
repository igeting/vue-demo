<template>
    <div>
        <div class="menu-fold" @click="menuCollapse">
            <i class="el-icon-s-fold" v-if="!collapse"></i>
            <i class="el-icon-s-unfold" v-if="collapse"></i>
        </div>
        <el-menu :default-active="activeIndex" :collapse="collapse" @select="menuSelect">
            <side-bar :list="menuList"></side-bar>
        </el-menu>
    </div>
</template>

<script>
    import SideBar from './SideBar'

    export default {
        name: "menus",
        props: ['collapse'],
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
                        icon: "el-icon-s-home",
                        children: []
                    },
                    {
                        name: "系统",
                        index: "system",
                        path: "/",
                        icon: "el-icon-s-tools",
                        children: [
                            {
                                name: "关于",
                                index: "about",
                                path: "/about",
                                icon: "el-icon-s-custom",
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
            menuCollapse() {
                this.$emit('collapsed')
            }
        }
    }
</script>

<style scoped>
    .menu-fold {
        text-align: left;
        padding-left: 24px;
        background-color: white;
    }
</style>

<style>
    ul.el-menu--collapse span {
        display: none;
    }
</style>