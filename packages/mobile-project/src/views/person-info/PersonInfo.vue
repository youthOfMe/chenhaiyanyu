<template>
  <div class="person-info">
    <div class="person-bg">
      <img :src="getAssetURL('home/head-bg.jpg')" alt="" />
    </div>
    <TopBar></TopBar>
    <div class="content">
      <div class="base-info">
        <div class="head">
          <img :src="getAssetURL('home/head.jpg')" alt="" />
        </div>
        <div class="edit">编辑资料</div>
        <div class="name">
          <span>点击设置牛马名字</span>
          <SvgIcon
            name="personinfo-edit"
            width="25px"
            height="25px"
            class="icon"
          ></SvgIcon>
          <SvgIcon
            name="personinfo-boy"
            width="20px"
            height="20px"
            class="icon"
          ></SvgIcon>
          <SvgIcon
            name="personinfo-girl"
            width="20px"
            height="20px"
            class="icon"
          ></SvgIcon>
        </div>
        <div class="data-info">
          <div class="item">
            <div class="data">0</div>
            <div class="text">获赞和收藏</div>
          </div>
          <div class="item">
            <div class="data">0</div>
            <div class="text">粉丝</div>
          </div>
          <div class="item">
            <div class="data">0</div>
            <div class="text">关注</div>
          </div>
          <div class="item">
            <div class="data">0</div>
            <div class="text">动态</div>
          </div>
        </div>
        <div class="signature">爱已随风起, 风止意难平</div>
        <div class="ip-time">
          <div class="ip item">IP属地: 山东省</div>
          <div class="time item">加入辰海烟雨520天</div>
        </div>
      </div>
      <van-tabs v-model:active="active" class="tab">
        <van-tab title="动态">
          <div class="list">
            <PostBlock></PostBlock>
            <PostBlock></PostBlock>
          </div>
        </van-tab>
        <van-tab title="视频">内容 2</van-tab>
        <van-tab title="收藏">内容 3</van-tab>
        <van-tab title="赞过">内容 4</van-tab>
        <van-tab title="私密">内容 4</van-tab>
      </van-tabs>
    </div>
  </div>
</template>

<script setup lang="ts">
import { getAssetURL } from '@/utils/LoadAssetsImg.js'

import TopBar from './cpns/top-bar/TopBar.vue'
</script>

<style lang="scss" scoped>
.person-info {
  position: relative;
  overflow-y: auto;
  height: 100vh;
}
.person-bg {
  position: absolute;
  right: 0;
  left: 0;
  z-index: -1;
  height: 220px;
  img {
    width: 100%;
    height: 100%;
  }
}
.content {
  position: relative;
  margin-top: 160px;
  padding: 70px 15px 0;
  height: calc(100vh - 270px);
  border-radius: 15px 15px 0 0;
  background-color: #ffffff;
  .base-info {
    .head {
      position: absolute;
      top: -50px;
      left: 20px;
      img {
        width: 100px;
        height: 100px;
        border-radius: 50%;
      }
    }
    .edit {
      position: absolute;
      top: 15px;
      right: 20px;
      width: 100px;
      height: 30px;
      box-sizing: border-box;
      border: 1px solid #dddddd;
      text-align: center;
      line-height: 30px;
    }
    .name {
      display: flex;
      align-items: center;
      font-size: 18px;
      font-weight: 600;
      .icon {
        margin-left: 5px;
      }
    }
    .data-info {
      display: flex;
      height: 68px;
      .item {
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: center;
        text-align: center;
        .data {
          font-size: 18px;
          font-weight: 600;
          line-height: 26px;
        }
        .text {
          font-size: 12px;
          color: var(--second-color);
        }
      }
    }
  }
  .signature {
    margin-top: 5px;
    font-size: 14px;
    color: var(--second-color);
  }
  .ip-time {
    display: flex;
    margin-top: 15px;
    .item {
      margin-right: 5px;
      padding: 5px;
      font-size: 10px;
      color: #aaaaaa;
      background-color: #eeeeee;
    }
  }
  .tab {
    margin-top: 15px;
  }
}
</style>
