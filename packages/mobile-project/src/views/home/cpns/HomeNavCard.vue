<template>
  <div class="nav-card">
    <div class="carousel">
      <van-swipe
        class="swipe"
        :autoplay="3000"
        indicator-color="white"
        @change="swtichImgCard"
      >
        <van-swipe-item v-for="item in imgList" :key="item.id">
          <img :src="item.imageUrl" alt="" />
        </van-swipe-item>
      </van-swipe>
    </div>
    <div class="nav-bar">
      <div class="item">
        <svg-icon name="home-one" width="42px" height="42px"></svg-icon>
      </div>
      <div class="item">
        <svg-icon name="home-two" width="42px" height="42px"></svg-icon>
      </div>
      <div class="item">
        <svg-icon name="home-three" width="42px" height="42px"></svg-icon>
      </div>
      <div class="item">
        <svg-icon name="home-four" width="42px" height="42px"></svg-icon>
      </div>
      <div class="item">
        <svg-icon name="home-five" width="42px" height="42px"></svg-icon>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps({
  imgList: {
    type: Array,
    default: () => [],
  },
})

// 图片切换后提交时间
const emits = defineEmits(['swicth-img'])
const swtichImgCard = (index) => {
  emits('switch-img', index)
}
</script>

<style lang="scss" scoped>
.nav-card {
  padding: 42px 9px 0;
  border-radius: 20px;
  .carousel {
    .swipe {
      height: 163px;
      img {
        width: 100%;
        border-radius: 10px;
      }
    }
  }
  .nav-bar {
    display: flex;
    padding: 0 18px;
    height: 64px;
    border-radius: 0 0 10px 10px;
    background-color: #ffffff;
    .item {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 20%;
    }
  }
}
</style>
