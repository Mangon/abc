<template>
  <div class="item-image" @click="itemClick">
    <img class="item-image-detail" :alt="item.name" :src="imgSrc" />
    <span class="item-image-name" :style="bgColor">{{ item.name }}</span>
    <span class="item-image-chinese" :style="bgColor" v-if="item.chinese">{{
      item.chinese
    }}</span>
  </div>
</template>
<script>
let playPromise;
export default {
  props: {
    type: String,
    item: {
      name: String,
      chinese: String,
      img: String,
      color: String,
      voice: String,
    },
  },
  data() {
    return {
      audioSrc: [],
      audio: new Audio(),
    };
  },
  mounted() {
    this.audioSrc = [
      require(`../assets/media/${this.type}/${this.item.name}.mp3`),
    ];
    this.audio.loop = false;
    this.audio.preload = true;
    this.audio.src = this.audioSrc.pop();
    let playEndedHandler = () => {
      this.audio.src = this.audioSrc.pop();
      this.audio.play();
      !this.audioSrc.length &&
        this.audio.removeEventListener("ended", playEndedHandler, false);
    };
    if (this.item.chineseName) {
      this.audioSrc.push(
        require(`../assets/media/${this.type}/${this.item.chineseName}.mp3`)
      );
    }
    if (this.item.voice) {
      this.audioSrc.push(
        require(`../assets/media/${this.type}/${this.item.voice}.mp3`)
      );
    }
    this.audio.addEventListener("ended", playEndedHandler, false);
    playPromise = this.audio.play();
  },
  beforeDestory() {
    if (playPromise !== undefined) {
      playPromise.then(() => {
        this.audio.pause();
      });
    }
  },
  computed: {
    imgSrc() {
      return require(`../assets/images/${this.type}/${this.item.img}.jpg`);
    },
    bgColor() {
      return "color:" + (this.item.color ? this.item.color : "#fff");
    },
  },
  methods: {
    itemClick() {
      if (playPromise !== undefined) {
        playPromise.then(() => {
          this.audio.pause();
        });
      }
      this.$emit("item-click");
    },
  },
};
</script>
<style lang="less" scoped>
.item-image {
  width: 100vw;
  height: 100vh;
  &-detail {
    width: 100%;
    height: 100%;
    display: inline-block;
  }
  &-name {
    position: fixed;
    display: block;
    bottom: 20px;
    width: 100%;
    font-size: 40px;
    z-index: 99;
    color: #fff;
  }
  &-chinese {
    position: fixed;
    display: block;
    bottom: 60px;
    width: 100%;
    font-size: 40px;
    z-index: 99;
    color: #fff;
  }
}
</style>
