<template>
  <div class="cm_section">
    <p>
      1、CSS样式方面
      <br>
      css样式，尽量少用css3的这些伪类选择器， 如果使用了，在后期做兼容会很累，
      如果项目硬要兼容IE8+，那就请你从一开始就避免这些伪类的使用吧。
      避免了最难解决的伪类问题后， 剩下的就是针对IE8
      IE9做一些样式上的微调，将会异常轻松。
    </p>
  </div>
</template>
<script>
export default {
  name: 'Ie8'
}
</script>
<style lang="scss" scoped>
.cm_section {
  padding: 40px 120px;
  word-break: break-all;
}
</style>
