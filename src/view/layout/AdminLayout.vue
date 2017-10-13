<template>
    <div class="layout">
        <!-- 头部 -->
        <div class="layout-header">
            <!-- logo -->
            <div class="layout-header-logo">
                <img src="../../assets/images/logo.png" alt="">
                <div class="logo-info">
                    <p>后台管理系统</p>
                    <p>Site Manage</p>
                </div>
            </div>
            <!-- 菜单 -->
            <div class="layout-header-menu">
                <Button class="toggle-btn" type="text" @click="toggleClick">
                    <Icon type="navicon" size="32"></Icon>
                </Button>
                <!-- <Menu class="site-menu" mode="horizontal" :theme="dark" active-name="1">
                            <MenuItem name="1">
                                <Icon type="ios-paper"></Icon>
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
                        </Menu> -->
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
                    <div class="tool-btn" @click="toggleClick">
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
            <div class="layout-container-menu">
                <Menu theme="light" width='200' active-name="1-2" :open-names="['1']">
                    <Submenu name="1">
                        <template slot="title">
                            <span class="title-span title-active">
                                <Icon type="ios-paper"></Icon>
                                <span class="title-text">内容管理</span>
                            </span>
                        </template>
                        <MenuItem name="1-1">文章管理</MenuItem>
                        <MenuItem name="1-2">评论管理</MenuItem>
                        <MenuItem name="1-3">举报管理</MenuItem>
                    </Submenu>
                    <Submenu name="2">
                        <template slot="title">
                            <span class="title-span">
                                <Icon type="ios-people"></Icon>
                                <span class="title-text">用户管理</span>
                            </span>
                        </template>
                        <MenuItem name="2-1">新增用户</MenuItem>
                        <MenuItem name="2-2">活跃用户</MenuItem>
                    </Submenu>

                </Menu>
            </div>
            <!-- 主要内容 -->
            <div class="layout-container-main"></div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'admin-layout',
    data () {
        return {

        }
    },
    methods: {
        toggleClick () {

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
    background-image: linear-gradient(143deg,#2945cb 20%,#2b83f9 81%,#3a9dff);
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
        background: transparent;
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
    padding-right:30px;
    .tool-btn{
        display: flex;
        width: 50px;
        height: 70px;
        align-items: center;
        justify-content: center
    }
    .ivu-icon {
        color: rgba(255,255,255,1);
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
    }
}

// 内容主要
.layout-container-main {
    flex: 1;
    background: #fff;
}
</style>
