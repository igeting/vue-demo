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
        name: 'home',
        components: {
            menus,
        }
    }
</script>

<style>

</style>
