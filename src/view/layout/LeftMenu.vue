<template>
    <Menu theme="light" width='200' :active-name="activeName" :open-names="openNames">
        <Submenu :name="index+1" v-for="(item,index) in data" :key="index">
            <template slot="title">
                <span class="title-span" :class="{'title-active':(index+1)===openNames}">
                    <Icon :type="item.meta.icon"></Icon>
                    <span class="title-text">{{item.meta.title}}</span>
                </span>
            </template>
            <MenuItem :name="menuIndex(index,cIndex)" v-for="(child,cIndex) in item.children" :key='cIndex' @click.native="selectMenu(child,menuIndex(index,cIndex))">{{child.meta.title}}</MenuItem>
        </Submenu>
    </Menu>
</template>

<script>
export default {
    name: 'admin-left-menu',
    props: {
        data: {
            type: Array,
            default: function () {
                return []
            }
        },
        activeName: {
            type: String,
            default: ''
        },
        openNames: {
            type: Array,
            default: [1]
        }
    },
    methods: {
        // 返回菜单索引1-1  1-2
        menuIndex (index, cIndex) {
            return (index + 1) + '-' + (cIndex + 1)
        }
    }
}
</script>

<style>

</style>
