<template>
  <div>
    <h2>
    思想先行，代码后动
    </h2>
    <el-tabs v-model="activeName" @tab-click="handleClick" class="test">
      <el-tab-pane label="用户管理" name="first">用户管理</el-tab-pane>
      <el-tab-pane label="配置管理" name="second">配置管理</el-tab-pane>
      <el-tab-pane label="角色管理" name="third">角色管理</el-tab-pane>
      <el-tab-pane label="定时任务补偿" name="fourth">定时任务补偿</el-tab-pane>
    </el-tabs>

    <table>
      <thead>
        <tr>
          <th>
            AAA
          </th>
          <th>
            BBB
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>1</td>
        </tr>
        <tr>
          <td>1</td>
          <td>1</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>

export default {
  data () {
    return {
      dialogVisible: true,
      activeName: 'first'
    }
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
