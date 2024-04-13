<template>
  <div class="recommend">
    <div class="carousel">
      <van-swipe class="swipe" :autoplay="3000" indicator-color="white">
        <van-swipe-item>
          <img :src="getAssetURL('home/head-bg.jpg')" alt="" />
        </van-swipe-item>
        <van-swipe-item>
          <img :src="getAssetURL('home/head-bg.jpg')" alt="" />
        </van-swipe-item>
        <van-swipe-item>
          <img :src="getAssetURL('home/head-bg.jpg')" alt="" />
        </van-swipe-item>
        <van-swipe-item>
          <img src="@/assets/img/home/home-bg.jpg" alt="" />
        </van-swipe-item>
      </van-swipe>
    </div>
    <van-grid square class="nav-content">
      <van-grid-item
        v-for="value in 8"
        :key="value"
        icon="photo-o"
        text="文字"
      />
    </van-grid>
    <div class="good-post">
      <div class="content-title">优质帖子</div>
      <div class="content">
        <GoodPostBlock></GoodPostBlock>
        <GoodPostBlock></GoodPostBlock>
        <GoodPostBlock></GoodPostBlock>
      </div>
    </div>
    <div class="good-seller">
      <div class="content-title">优质商品</div>
      <div class="content">
        <GoodPostBlock></GoodPostBlock>
        <GoodPostBlock></GoodPostBlock>
        <GoodPostBlock></GoodPostBlock>
      </div>
    </div>
    <div class="list">
      <PostBlock></PostBlock>
      <PostBlock></PostBlock>
    </div>
    <div class="block"></div>
  </div>
</template>

<script setup lang="ts">
import { getAssetURL } from '@/utils/LoadAssetsImg.js'
</script>

<style lang="scss" scoped>
.recommend {
  position: relative;
  overflow-y: auto;
  height: calc(100vh - 50px - 124px);
}
.carousel {
  margin: 14px 9px 0;
  .swipe {
    height: 163px;
    img {
      width: 100%;
    }
  }
}
.nav-content {
  margin: 0 9px;
  background-color: #ffffff;
}
.good-post {
  margin: 14px 9px 0;
  padding: 10px 0 0 10px;
  background-color: #ffffff;
  .content-title {
    font-size: 18px;
    font-weight: 600;
    color: var(--third-color);
  }
  .content {
    display: flex;
    overflow-x: auto;
    margin-top: 8px;
    padding: 0 10px 20px;
    &::-webkit-scrollbar {
      display: none;
    }
    > div {
      margin-right: 10px;
    }
  }
}
.good-seller {
  margin: 14px 9px 0;
  padding: 10px 0 0 10px;
  background-color: #ffffff;
  .content-title {
    font-size: 18px;
    font-weight: 600;
    color: var(--third-color);
  }
  .content {
    display: flex;
    overflow-x: auto;
    margin-top: 8px;
    padding: 0 10px 20px;
    &::-webkit-scrollbar {
      display: none;
    }
    > div {
      margin-right: 10px;
    }
  }
}
.list {
  margin: 14px 9px 0;
  border-radius: 12px;
}
.block {
  height: 20px;
}
</style>
