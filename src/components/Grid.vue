<template>
  <div class="grid-image" @click="$emit('grid-click', name)">
    <img class="grid-image-detail" :alt="name" :src="imgSrc"/>
  </div>
</template>
<script>
export default {
    props: ['name', 'type'],
    computed: {
        imgSrc() {
            return require(`../assets/images/${this.type}/${this.name}.jpg`);
        }
    }
}
</script>
<style lang="less" scoped>
// import * from '../assets/css/const.less';
.grid-image {
  width: 33.3vw;
  height: calc(~'(100vh - 40px) / 3');
  &-detail {
    width: 100%;
    height: 100%;
    display: inline-block;
  }
}
</style>

