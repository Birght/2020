<template>
  <div>
    思想先行，代码后动
    <test1 ref="a1"></test1>
    <test2 ref="a2"></test2>
    <div class="header"></div>
    <div class="content">
      <div class="middle"></div>
      <div class="left"></div>
      <div class="right"></div>
    </div>
    <div class="footer"></div>

    <el-tabs v-model="activeName" @tab-click="handleClick" class="test">
      <el-tab-pane label="用户管理" name="first">用户管理</el-tab-pane>
      <el-tab-pane label="配置管理" name="second">配置管理</el-tab-pane>
      <el-tab-pane label="角色管理" name="third">角色管理</el-tab-pane>
      <el-tab-pane label="定时任务补偿" name="fourth">定时任务补偿</el-tab-pane>
    </el-tabs>
    <el-table :data="tableData" border style="width: 100%" @row-dblclick="test1">
      <el-table-column prop="date" label="日期" width="180"> </el-table-column>
      <el-table-column prop="name" label="姓名" width="180"> </el-table-column>
      <el-table-column prop="address" label="地址"> </el-table-column>
    </el-table>
  </div>
</template>
<script>
import test1 from './test1'
import test2 from './test2'

export default {
  data () {
    return {
      dialogVisible: true,
      activeName: 'second',
      tableData: [{
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1517 弄'
      }, {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1519 弄'
      }, {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄'
      }]
    }
  },
  components: {
    test1,
    test2
  },
  mounted () {
    console.log(this.$refs)
  },
  methods: {
    handleClick (tab, event) {
      console.log(tab, event)
    },
    handleClose (done) {
      this.$confirm('确认关闭？')
        .then(_ => {
          done()
        })
        .catch(_ => {})
    },
    test1 (row) {
      console.log(row.address)
    }
  }
}
</script>
<style lang="scss" scoped>
.header {
  width: 100%;
  height: 30px;
  background: red;
}

.content {
  overflow: hidden;
  padding: 0 100px;
}

.footer {
  width: 100%;
  height: 30px;
  background: red;
}

.middle {
  position: relative;
  width: 100%;
  float: left;
  height: 80px;
  background: green;
}

.left {
  position: relative;
  width: 100px;
  float: left;
  left: -100px;
  height: 80px;
  margin-left: -100%;
  background: yellow;
}

.right {
  position: relative;
  width: 100px;
  float: left;
  right: -100px;
  height: 80px;
  margin-left: -100px;
  background: pink;
}
</style>
