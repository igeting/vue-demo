<template>
    <el-container>
        <el-header>
            header
        </el-header>
        <el-container>
            <el-aside :class="{'el-aside-fix':isCollapse}" width="200px">
                <menus :collapse="isCollapse" @collapsed="menuCollapse"></menus>
            </el-aside>
            <el-main>
                <router-view/>
            </el-main>
        </el-container>
        <el-footer>
            footer
        </el-footer>
    </el-container>
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
                isCollapse: false,
            }
        },
        methods: {
            menuCollapse() {
                this.isCollapse = !this.isCollapse
                if (this.isCollapse) {
                    document.querySelectorAll('.el-aside span').forEach(x => {
                        x.style.display = 'none'
                    })
                }

            },
        }
    }
</script>

<style scoped>
    .el-header, .el-footer {
        background-color: #B3C0D1;
        color: #333;
        text-align: center;
        line-height: 60px;
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

</style>
