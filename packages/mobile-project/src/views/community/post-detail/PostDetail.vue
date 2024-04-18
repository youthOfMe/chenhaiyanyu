<template>
  <div class="post-detail">
    <TopbarHeadV1></TopbarHeadV1>
    <div class="content">
      <div class="content-title">
        <!-- 当我们回顾 GitHub 过去十年，我们并不会想起某一款软件，而是想到人们用
        GitHub 发生了何种改变。 -->
        {{ postDetail?.title }}
      </div>
      <div class="text" v-html="postDetail.content"></div>
      <div class="img" v-if="imgCount > 0">
        <div class="one-img" v-if="imgCount == 1">
          <img :src="getAssetURL('home/home-bg.jpg')" alt="" />
        </div>
        <div class="list" v-if="imgCount > 1">
          <img
            :src="getAssetURL('home/home-bg.jpg')"
            alt=""
            v-for="i in imgCount > 6 ? 6 : imgCount"
            :key="i"
          />
          <img
            :src="getAssetURL('home/home-bg.jpg')"
            alt=""
            v-if="imgCount === 2 || imgCount == 5"
          />
          <div class="img-count">
            {{ imgCount > 9 ? 9 + '+' : imgCount }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import { storeToRefs } from 'pinia'
import { useCommunityStore } from '@/stores'
import { getAssetURL } from '@/utils/LoadAssetsImg.js'
// import { GET_POST_ID } from '@/utils/community'

const imgCount = ref(88)

// 发送请求获取详情
const communityStore = useCommunityStore()
communityStore.fetchPostDetailById(communityStore.postId)
const { postDetail } = storeToRefs(communityStore)
</script>

<style lang="scss" scoped>
.content {
  padding: 15px 9px;
  background-color: #ffffff;
  .content-title {
    font-size: 22px;
    font-weight: 600;
  }
  .text {
    margin-top: 10px;
    font-size: 16px;
    white-space: pre-wrap;
  }
  .img {
    margin-top: 10px;
    .one-img {
      width: 100%;
      height: 227px;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .list {
      position: relative;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      width: 100%;
      img {
        margin-bottom: 5px;
        width: 32%;
        height: 125px;
      }
      .img-count {
        position: absolute;
        top: 0;
        right: 0;
        width: 40px;
        height: 20px;
        line-height: 20px;
        text-align: center;
        color: #ffffff;
        background-color: rgb(0 0 0 / 50%);
      }
    }
  }
}
</style>
