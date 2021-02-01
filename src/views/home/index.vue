<template>
  <div>
    <h2>
      思想先行，代码后动
    </h2>
    <el-tabs
      v-model="activeName"
      @tab-click="handleClick"
      class="test"
    >
      <el-tab-pane
        label="工具统一"
        name="first"
      >
        编辑器使用，vscode。
        setting.json 配置
      </el-tab-pane>
      <el-tab-pane
        label="组件统一"
        name="second"
      >
        组件demo示例
      </el-tab-pane>
      <el-tab-pane
        label="CSS统一"
        name="third"
      >
        cssdemo示例，以及规则定义
      </el-tab-pane>
      <el-tab-pane
        label="js公共提取"
        name="fourth"
      >
        公共Js方法
      </el-tab-pane>
    </el-tabs>
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
