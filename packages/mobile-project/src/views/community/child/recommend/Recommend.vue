<template>
  <div class="recommend">
    <div class="nav-block">
      <div class="item" v-for="i in 6" :key="i">
        <img :src="getAssetURL('home/head-bg.jpg')" alt="" />
        <div class="name nowrap_ellipsis">牛马社区</div>
      </div>
    </div>
    <div class="list">
      <div class="item" v-for="i in 5" :key="i">
        <img :src="getAssetURL('home/head-bg.jpg')" alt="" />
        <div class="item-title">已经不抱任何玩下去这个游戏的念头了</div>
        <div class="info">
          <img :src="getAssetURL('home/head-bg.jpg')" alt="" />
          <div class="name nowrap_ellipsis">我是牛马</div>
          <div class="thumb">
            <SvgIcon
              name="postblock-thumb"
              width="15px"
              height="15px"
            ></SvgIcon>
            <span class="count">888</span>
          </div>
        </div>
      </div>
      <div class="item">
        <img :src="getAssetURL('home/head-bg.jpg')" alt="" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { getAssetURL } from '@/utils/LoadAssetsImg'
</script>

<style lang="scss" scoped>
.recommend {
  .nav-block {
    display: flex;
    overflow-x: auto;
    background-color: #ffffff;
    &::-webkit-scrollbar {
      display: none;
    }
    .item {
      flex-shrink: 0;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 80px;
      height: 100px;
      flex-direction: column;
      img {
        width: 50px;
        height: 50px;
        border-radius: 5px;
      }
      .name {
        padding-top: 5px;
        font-size: 12px;
      }
    }
  }
  .list {
    display: flex;
    flex-wrap: wrap;
    background-color: #ffffff;
    .item {
      padding: 0 9px;
      flex: 1;
      img {
        width: 100%;
        height: 120px;
        border-radius: 5px;
      }
      &:nth-child(2n) {
        padding-left: 0;
      }
      .item-title {
        padding: 10px 5px 0;
        font-size: 16px;
        font-weight: 520;
      }
      .info {
        display: flex;
        align-items: center;
        padding: 10px 5px;
        img {
          width: 25px;
          height: 25px;
          border-radius: 50%;
        }
        .name {
          flex: 1;
          padding-left: 5px;
        }
        .thumb {
          display: flex;
          align-items: center;
          .count {
            padding-left: 5px;
          }
        }
      }
    }
  }
}
</style>
