<template>
  <div>
    <el-scrollbar
      wrap-class="scrollbar-wrapper"
    >
      <el-menu
        @select="handleSelect"
        active-text-color="#ffd04b"
        default-active="/home"
        :collapse="isCollapse"
        :unique-opened="false"
        :collapse-transition="false"
        mode="vertical"
        :class="{ myMenu: isActive }"
      >
        <el-menu-item index="/home">
          <i class="el-icon-s-data" />主页
        </el-menu-item>
        <div
          v-for="(item, index) in curRoutes"
          :key="index"
        >
          <el-submenu
            index="2"
            v-if="item.hasOwnProperty('children') && item.children.length > 0"
          >
            <template slot="title">
              <i class="el-icon-s-data" />
              <span>综合</span>
            </template>
            <el-menu-item index="/doc">
              文档
            </el-menu-item>
            <el-menu-item index="/unit">
              组件
            </el-menu-item>
            <el-menu-item index="/unit">
              样式
            </el-menu-item>
          </el-submenu>
        </div>
      </el-menu>
    </el-scrollbar>
  </div>
</template>
<script>
import { constRoutes } from '@/router'
export default {
  name: 'MenuAside',
  data () {
    return {
      isCollapse: false,
      isActive: false,
      curRoutes: constRoutes
    }
  },
  mounted () {
    console.log(constRoutes, '1111')
  },
  methods: {
    handleSelect (key, keyPath) {
      this.$router.push({
        path: key
      })
    }
  }
}
</script>
