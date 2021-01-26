<template>
    <el-scrollbar class="sidebar_container">
        <div class="siderbar_icon_block changemark" @click="change">
            <i class="el-icon-s-fold" v-if="isCollapse"></i>
            <i class="el-icon-s-unfold" v-else></i>
        </div>
        <el-menu
            background-color="#337ab7"
            :collapse="isCollapse"
            text-color="#fff"
            active-text-color="#fff"
            :router="true">
            <div v-for="(subMenu, subMenuIndex) in menuData" :key="subMenu.name+subMenuIndex">
                <div v-if="subMenu.isShow">
                    <el-submenu :index="subMenu.name+subMenuIndex" v-if="subMenu.hasOwnProperty('children')&&subMenu.children.length>0">
                        <span slot="title">
                            <i :class="subMenu.meta.icon"></i>
                            <span>{{subMenu.meta.title}}</span>
                        </span>
                        <el-menu-item-group>
                            <el-menu-item :index="childMenu.path" v-for="(childMenu, childMenuIndex) in subMenu.children" :key="childMenu+childMenuIndex" @click="goto(subMenu,childMenu)">
                                <span slot="title">{{childMenu.meta.title}}</span>
                            </el-menu-item>
                        </el-menu-item-group>
                    </el-submenu>
                    <el-menu-item :index="subMenu.path" v-else @click="goto(subMenu)">
                        <i :class="subMenu.meta.icon"></i>
                        <span slot="title">
                            <span>{{subMenu.meta.title}}</span>
                        </span>
                    </el-menu-item>
                </div>
            </div>
        </el-menu>
    </el-scrollbar>
</template>
<script>
export default {
  name: 'sildermenu',
  data () {
    return {
      // router 数据，配合权限处理，登录获取当前登录人角色权限
      menuData: [
        {
          path: '/static',
          name: 'static',
          redirect: '/doc',
          isShow: true,
          meta: {
            title: '综合',
            icon: 'el-icon-s-platform'
          },
          children: [
            {
              path: '/home',
              name: 'home',
              isShow: true,
              meta: {
                title: '主页',
                icon: 'el-icon-menu'
              }
            },
            {
              path: '/doc',
              name: 'doc',
              isShow: true,
              meta: {
                title: '文档',
                icon: 'el-icon-thumb'
              }
            },
            {
              path: '/unit',
              name: 'unit',
              isShow: true,
              meta: {
                title: '统计',
                icon: 'el-icon-s-data'
              }
            }
          ]
        }
      ],
      isCollapse: false
    }
  },
  methods: {
    // 折叠展开
    change () {
      this.isCollapse = !this.isCollapse
    },
    goto (subMenu, childMenu) {
      if (childMenu) {
        console.log(subMenu, childMenu, 1)
        this.$router.push(childMenu.route)
      } else {
        console.log(subMenu, childMenu, 2)
        this.$router.push(subMenu.route)
      }
    }
  },
  watch: {
    isCollapse (val) {
      this.$emit('getChildValue', { value: this.isCollapse })
    }
  }
}
</script>
<style lang="scss" scoped>
    .sidebar_container /deep/ {
        position: relative;
        height: 100%;
        background: #337ab7;
        .el-scrollbar__wrap {
            height: 100vh;
            overflow-x: hidden !important;
        }
        li i{
            color: #fff;
        }
        .el-menu-item-group__title{
            padding: 0;
        }
    }
    .siderbar_icon_block{
        text-indent: 12px;
        height: 50px;
        line-height: 50px;
        color: #fff;
        cursor: pointer;
    }
</style>
