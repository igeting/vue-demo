<template>
    <div>
        <el-container>
            <el-header>
                header
            </el-header>
            <el-container>
                <el-aside>
                    <menus></menus>
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
        }
    }
</script>

<style scoped>
    .el-aside {
        width: 200px !important;
    }
</style>
