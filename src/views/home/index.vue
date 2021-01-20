<template>
  <div>
    思想先行，代码后动

  </div>
</template>
<script>
export default {
  data () {
    return {
      dialogVisible: true
    }
  },
  methods: {
    handleClose (done) {
      this.$confirm('确认关闭？')
        .then((_) => {
          done()
        })
        .catch((_) => {})
    }
  }
}
</script>
<style lang="scss" scoped>
.text1{
  height:100px;
  overflow-y: scroll;
}
</style>
