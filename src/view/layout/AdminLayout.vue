<template>
    <div class="layout">
        <!-- 头部 -->
        <div class="layout-header">
            <!-- logo -->
            <div class="layout-header-logo" :class="{'is-shrinkage':iconSize===16?false:true}">
                <img src="../../assets/images/logo.png" alt="">
                <div class="logo-info" :style="{'display':iconSize===16?'block':'none'}">
                    <p>后台管理系统</p>
                    <p>Site Manage</p>
                </div>
            </div>
            <!-- 菜单 -->
            <div class="layout-header-menu">
                <Button class="toggle-btn" type="text" @click="toggleClick">
                    <Icon type="navicon" size="32"></Icon>
                </Button>
                <Menu class="site-menu" mode="horizontal" theme="dark" active-name="1">
                    <MenuItem name="1">
                    <Icon type="code"></Icon>
                    内容管理
                    </MenuItem>
                    <MenuItem name="2">
                    <Icon type="ios-people"></Icon>
                    用户管理
                    </MenuItem>
                    <MenuItem name="3">
                    <Icon type="settings"></Icon>
                    综合设置
                    </MenuItem>
                </Menu>
            </div>
            <!-- 工具 -->
            <div class="layout-header-tool">

                <Tooltip content="通知" placement="bottom">
                    <div class="tool-btn">
                        <Badge dot>
                            <Icon type="ios-bell" size="20"></Icon>
                        </Badge>
                    </div>
                </Tooltip>
                <Tooltip content="访问首页" placement="bottom">
                    <div class="tool-btn">
                        <Icon type="eye" size="20"></Icon>
                    </div>
                </Tooltip>

                <div class="tool-btn">
                    <Dropdown>
                        <a href="javascript:void(0)">
                            <Icon type="ios-person" size="22"></Icon>
                            <Icon type="arrow-down-b"></Icon>
                        </a>
                        <DropdownMenu slot="list">
                            <DropdownItem>用户中心</DropdownItem>
                            <DropdownItem>退出</DropdownItem>
                        </DropdownMenu>
                    </Dropdown>
                </div>

            </div>
        </div>
        <!-- 内容区 -->
        <div class="layout-container">
            <!-- 菜单 -->
            <div class="layout-container-menu" :class="{'is-shrinkage':iconSize===16?false:true}">
                <Menu theme="light" width='200' :active-name="activeName" :open-names="[openNames]" :style="{'display':iconSize===16?'block':'none'}">
                    <Submenu :name="item.name" v-for="(item,index) in menu" :key="index">
                        <template slot="title">
                            <span class="title-span" :class="{'title-active':item.name===openNames}">
                                <Icon :type="item.meta.icon" :size="iconSize"></Icon>
                                <span class="title-text">{{item.meta.title}}</span>
                            </span>
                        </template>
                        <MenuItem :name="child.name" v-for="(child,cIndex) in item.children" :key='cIndex' @click.native="selectMenu(child)">{{child.meta.title}}</MenuItem>
                    </Submenu>
                </Menu>
                <div class="shrink-menu" :style="{'display':iconSize===16?'none':'block'}">
                    <div class="shrink-menu-item"  v-for="(item,index) in menu" :key="index">
                        <Poptip trigger="hover" placement="right" width="70" :transfer="true">
                            <div class="shrink-menu-btn">
                                <Icon :type="item.meta.icon" :size="iconSize"></Icon>
                            </div>
                            <div class="api" slot="content">
                                <router-link tag='div' class="shrink-child-menu"  v-for="(child,cIndex) in item.children" :key='cIndex' :to="{name:child.name}">
                                    {{child.meta.title}}
                                </router-link>
                            </div>
                        </Poptip>
                    </div>
                </div>
            </div>
            <!-- 主要内容 -->
            <div class="layout-container-main">
                <!-- conTabs -->
                <div class="layout-container-tabs">
                    <router-link :to="{name:item.name}" class="ivu-tag ivu-tag-closable" v-for="(item,index) in conTabs" :key="index" tag='div'>
                        <span class="ivu-tag-text">{{item.title}}</span>
                        <i class="ivu-icon ivu-icon-ios-close-empty" @click.stop="handleClose(item)" v-if="item.title!=='首页'"></i>
                    </router-link>
                </div>
                <!-- view -->
                <div class="layout-container-view">
                    <router-view></router-view>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { leftMenu } from '@/router'
import { mapGetters, mapMutations } from 'vuex'
export default {
    name: 'admin-layout',
    data () {
        return {
            menu: leftMenu,
            iconSize: 16
        }
    },
    computed: {
        ...mapGetters(['loading', 'conTabs', 'openNames', 'activeName'])
    },

    methods: {
        // 菜单隐藏显示
        toggleClick () {
            if (this.iconSize === 16) {
                this.iconSize = 24
            } else if (this.iconSize === 24) {
                this.iconSize = 16
            }
        },
        // contabs点击关闭
        handleClose (name) {
            const index = this.conTabs.indexOf(name)
            this.$store.commit('removeConTabs', index)
            setTimeout(() => {
                this.$router.push({ 'name': this.conTabs[index - 1].name})
            }, 20)
        },
        // 左侧菜单点击
        selectMenu (item) {
            if (this.inConTabs(item.name)) {
                this.$router.push({ 'name': item.name })
                return false
            }
            this.$router.push({ 'name': item.name })
        },
        // 判断conTabs里面是否存在name元素
        inConTabs (name) {
            let tabs = []
            this.conTabs.map((item, index) => {
                tabs.push(item.name)
            })
            return tabs.indexOf(name) !== -1
        },
        // 返回contabs里面的name元素的位置索引
        inConTabsIndex (name) {
            let tabs = []
            this.conTabs.map((item, index) => {
                tabs.push(item.name)
            })
            return tabs.indexOf(name)
        }

    }
}
</script>

<style lang="less">
.layout {
    display: flex;
    flex: 1;
    flex-direction: column;
    background: #ccc;
}

// 头部
.layout-header {
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 70px;
    background-color: #2b83f9;
    background-image: linear-gradient(143deg, #2945cb 20%, #2b83f9 81%, #3a9dff);
}

// logo
.layout-header-logo {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding-left: 22px;
    width: 200px;
    color: #fff;
    img {
        width: 31px;
        height: 30px;
        margin-right: 10px;
    }
    .logo-info {
        padding-left: 10px;
        font-weight: bold;
        background: url(../../assets/images/logo-line.png) no-repeat left center;
    }
    &.is-shrinkage{
        width: 70px;
        .logo-info{
            display: none
        }
    }
}

// 头部菜单
.layout-header-menu {
    display: flex;
    flex: 1;
    flex-direction: row;
    align-items: center;
    .toggle-btn {
        color: #fff;
    }
    .site-menu {
        padding-left: 20px;
        background: transparent;
        line-height: 70px;
        .ivu-icon {
            font-size: 18px;
        }
    }
    .ivu-menu-horizontal.ivu-menu-light:after {
        background: transparent;
    }
    .ivu-menu-horizontal {
        height: 70px;
    }
    .ivu-menu-light.ivu-menu-horizontal .ivu-menu-item,
    .ivu-menu-light.ivu-menu-horizontal .ivu-menu-submenu {
        height: inherit;
        line-height: inherit;
        color: rgba(255, 255, 255, 0.6);
    }
    .ivu-menu-light.ivu-menu-horizontal .ivu-menu-item-active,
    .ivu-menu-light.ivu-menu-horizontal .ivu-menu-submenu-active {
        height: 67px;
        line-height: 67px;
        color: #fff;
        border-bottom: 3px solid #4fe3c1;
    }
    .ivu-menu-light.ivu-menu-horizontal .ivu-menu-item:hover,
    .ivu-menu-light.ivu-menu-horizontal .ivu-menu-submenu:hover {
        color: rgba(255, 255, 255, 1);
        border-bottom: transparent;
    }
}

// 头部右侧工具
.layout-header-tool {
    display: flex;
    flex-direction: row;
    padding-right: 30px;
    .tool-btn {
        display: flex;
        width: 50px;
        height: 70px;
        align-items: center;
        justify-content: center
    }
    .ivu-icon {
        color: rgba(255, 255, 255, 1);
    }
}

// 内容
.layout-container {
    display: flex;
    flex-direction: row;
    flex: 1;
}

// 内容菜单
.layout-container-menu {
    position: relative;
    width: 200px;
    background: #fff;
    overflow: auto;
    &.is-shrinkage{
        width: 70px;
        .title-text{
            display: none;
        }
    }
    &:after {
        content: '';
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        width: 1px;
        height: 100%;
        background: #dddee1;
    }
    .title-active {
        color: #1b84ed
    }
    .ivu-menu-submenu-title {
        .ivu-icon {
            font-size: 16px;
        }
        .title-text {
            font-size: 12px;
            font-weight: bold
        }
    }
    .ivu-menu-item {
        color: #657180;

        font-size: 12px;
    }
    .ivu-menu-light.ivu-menu-vertical .ivu-menu-item-active:not(.ivu-menu-submenu) {
        font-weight: bold;
        color: #1b84ed
    }
    .ivu-menu-vertical .ivu-menu-submenu .ivu-menu-item {
        padding-left: 48px;
        font-weight: bold;
    }
}
// 左侧伸缩菜单
.shrink-menu{
    width: 70px;
    .shrink-menu-btn{
        width: 70px;
        height: 50px;
        line-height: 50px;
        text-align: center;
        cursor: pointer;
    }
}
.shrink-child-menu{
        height: 30px;
        line-height: 30px;
        cursor: pointer;
    }
// 内容主要
.layout-container-main {
    flex: 1;
    background: #f1f4f5;
}

.layout-container-tabs {
    background: #fff;
    height: 40px;
    border-bottom: solid 1px #e4eaec;
    .ivu-tag {
        width: 90px;
        height: 40px;
        margin: 0;
        line-height: 40px;
        background: transparent;
        text-align: center;
        border: none;
        &.router-link-active {
            background: #f1f4f5
        }
    }
}
</style>
