<template>
    <div>
        <template v-for="(item,index) in list">
            <!-- 标题 -->
            <template v-if="item.children.length">
                <el-submenu :key="index" :index="item.path">
                    <template :index="item.path" slot="title">
                        <i :class="item.icon"></i>
                        <span>{{item.name}}</span>
                    </template>
                    <el-menu-item-group>
                        <side-bar :list="item.children"></side-bar>
                    </el-menu-item-group>
                </el-submenu>
            </template>
            <!-- 选项 -->
            <template v-else>
                <el-menu-item :key="index" :index="item.path">
                    <i :class="item.icon"></i>
                    <span>{{item.name}}</span>
                </el-menu-item>
            </template>
        </template>
    </div>
</template>

<script>
    export default {
        name: "SideBar",
        props: {list: Array}
    }
</script>

<style scoped>

</style>