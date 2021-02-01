<template>
  <div class="cm_section">
    <h2>
      1、CSS样式方面
    </h2>
    <p>
      <br>
      css样式，尽量少用css3的这些伪类选择器， 如果使用了，在后期做兼容会很累，
      如果项目硬要兼容IE8+，那就请你从一开始就避免这些伪类的使用吧。
      避免了最难解决的伪类问题后， 剩下的就是针对IE8
      IE9做一些样式上的微调，将会异常轻松。
    </p>

    <h2>
      JS方面
    </h2>
    <p>
      2.1、IE8是不支持className选择节点的，所以，最省时省力的方法，我们在选择节点时，可以多使用jQuery选择器，说实话，jQuery的兼容性还真的好。当然如果你的父节点不是element，没法用jq的时候，只能自己拓展了；

      解决IE8一下不支持getElementsByClassName的方法 - CSDN博客 这个博客的方法适合随意指定父节点，实测有效；
    </p>
    <p>
      如果你要遍历一个数组，请不要用map forEach,
      因为这些方法IE8 IE9都不支持，如 果你项目里用到了，修改起来很麻烦，那么就拓展一个map forEach方法吧。
    </p>
    <p>
      如果需要在文本框里添加placeholder，个人建议使用插件，将会有和原生浏览器一样的效果。 推荐jquery.placeholder.js 这个插件
    </p>
    <p>
      现在大部分主流浏览器都支持bind，很不幸，IE8却不支持，如果碰到了bind的兼容问题，那么只能自己写拓展了。
    </p>
    <p>
      E8 IE9均不支持calssList属性，如果用到了增删class，那么只能自己写拓展。
    </p>
    <p>
      如果你不小心用到了某个jq版本的text()方法，那么你要注意，有可能IE8不兼容，最好使用innerHTML
    </p>
    <p>
      IE8并不支持event.target，如果你不小心用了，会报错 找不到 target 属性。这就取决于IE8的机制，event只能是window对象的一个属性，所以我们这样写就能兼容IE8了；
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
