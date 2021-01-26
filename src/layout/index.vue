<template>
  <div>
    <el-container>
        <el-header class="cm_bg_color1">
          <el-row>
            <el-col :span="12" :offset="12" class="cm_text_right">
            </el-col>
          </el-row>
        </el-header>
        <el-container>
          <el-aside :class="menuMark?'layout_left_hide':'layout_left'">
            <menuAside @getChildValue = "getChildValue"></menuAside>
          </el-aside>
          <el-main>
            <appMain></appMain>
          </el-main>
        </el-container>
    </el-container>
  </div>
</template>
<script>
import menuAside from '@/layout/menuSlider/silderMenu'
import appMain from '@/layout/appMain'
export default {
  name: 'layout',
  data () {
    return {
      menuMark: false
    }
  },
  components: {menuAside, appMain},
  methods: {
    getChildValue (cur) {
      this.menuMark = cur.value
    }
  }
}
</script>
