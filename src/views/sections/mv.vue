<template>
  <div class="test">
    <img
      src="./111.png"
      alt="111.png"
    >
    <vplayer
      :player-options="vOption"
      @onpause="pause"
    />
    <div />
  </div>
</template>
<script>
let activityImg = require('./111.png')

export default {
  name: 'Mv',
  data () {
    return {
      vOption: {
        type: 'application/x-mpegURL', // 媒体类型，m3u8请给application/x-mpegURL或者application/vnd.apple.mpegURL，其他的会默认为普通音视频，注：微信不支持m3u8
        src: 'https://www.bilibili.com/video/BV1D5411E7d7/', // 视频地址
        preload: true, // 是否预下载，默认为true
        autoplay: false, // 是否自动播放（兼容性不太好），默认为false
        isLoop: false, // 是否循环，默认不循环
        poster: activityImg, // 封面，仅视频有
        controls: 'progress,current,durration,volume', // 显示的控件,volume只有视频有，没有配置controls项则全部显示。progress:进度条；current:已播放时长；durration：音视频长度；volume：音量
        crossOrigin: true // 设置视频的 CORS 设置。
      }
    }
  },
  methods: {
    pause (e) {
      console.log(e)
    }
  }
}
</script>
<style lang="scss" scoped>
.test{
  width: 100%;
  height: 100%;
}
</style>
