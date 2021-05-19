<template>
    <div>
        <el-container>
            <el-header>
                header
            </el-header>
            <el-container>
                <el-aside>
                    <div class="menu-fold" @click="menuCollapse">
                        <i class="el-icon-s-fold" v-if="!isCollapse"></i>
                        <i class="el-icon-s-unfold" v-if="isCollapse"></i>
                    </div>
                    <menus :collapse="isCollapse"></menus>
                </el-aside>
                <el-main>
                    <router-view/>
                </el-main>
            </el-container>
            <el-footer>
                footer
            </el-footer>
        </el-container>
    </div>
</template>

<script>
    // @ is an alias to /src
    import menus from '../components/menus'

    export default {
        name: 'index',
        components: {
            menus,
        },
        data() {
            return {
                isCollapse: true,
            }
        },
        methods: {
            menuCollapse() {
                this.isCollapse = !this.isCollapse
            },
        }
    }
</script>

<style scoped>
    .menu-fold {
        text-align: left;
    }

    .el-header {
        background-color: darkseagreen;
        position: fixed;
        top: 0;
        width: 100%;
        height: 60px;
    }

    .el-aside {
        width: 200px !important;
        display: block;
        position: relative;
        left: 0;
        top: 60px;
        bottom: 0;
    }

    .el-main {
        position: relative;
        top: 60px;
    }

    .el-footer {
        position: fixed;
        bottom: 0;
        width: 100%;
        height: 66px;
    }


</style>

<style>
    ul.el-menu--collapse.el-menu span {
        display: none;
    }
</style>
