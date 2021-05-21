<template>
    <el-container>
        <el-header>
            <el-avatar class="logo" :size="'small'" :src="require('@/assets/logo.jpg')"></el-avatar>
            <span @click="$router.push('/')" class="title">{{title}}</span>
        </el-header>
        <el-container>
            <el-aside :class="{'el-aside-fix':collapse}" width="200px">
                <menus :collapse="collapse" @collapsed="menuCollapse"></menus>
            </el-aside>
            <el-main>
                <router-view></router-view>
            </el-main>
        </el-container>
        <el-footer>
            <el-link>about</el-link>
        </el-footer>
    </el-container>
</template>

<script>
    import menus from '@/components/menus'

    export default {
        name: 'index',
        components: {
            menus,
        },
        data() {
            return {
                title: 'vue',
                collapse: false,
            }
        },
        methods: {
            menuCollapse() {
                this.collapse = !this.collapse
                if (this.collapse) {
                    document.querySelectorAll('.el-aside span').forEach(x => {
                        x.style.display = 'none'
                    })
                }

            },
        },
    }
</script>

<style scoped>
    .el-header {
        background-color: #B3C0D1;
        color: #333;
        line-height: 40px;
        display: flex;
        align-items: center;
        position: sticky;
        top: 0;
        z-index: 10;
        height: 40px !important;
    }

    .el-footer {
        background-color: #B3C0D1;
        color: #333;
        line-height: 40px;
        display: flex;
        align-items: center;
        position: sticky;
        bottom: 0;
        z-index: 10;
        height: 40px !important;
    }

    .el-aside {
        background-color: #D3DCE6;
        color: #333;
        text-align: center;
        overflow: unset;
    }

    .el-container {
        height: 100%;
    }

    .el-aside-fix {
        width: 64px !important;
    }

    .el-main {
        background-color: #E9EEF3;
        color: #333;
        text-align: center;
        line-height: 160px;
    }

    .logo {
        margin-right: 10px !important;
        width: 26px;
        height: 26px;
    }

    .title {
        font-size: 26px;
        font-weight: bolder;
    }
</style>
