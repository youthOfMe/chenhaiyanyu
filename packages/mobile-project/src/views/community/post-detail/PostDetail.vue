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
          <img
            :src="postDetail?.coverUrl || imgList[0]"
            alt=""
            @click="showImage"
          />
        </div>
        <div class="list" v-if="imgCount > 1">
          <img
            :src="item"
            alt=""
            v-for="item in imgList.slice(0, 6)"
            :key="item"
            @click="showImage"
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
      <div class="bottom">
        <div class="item thumb">
          <SvgIcon
            name="postblock-thumb"
            width="20px"
            height="20px"
            v-if="!isThumbValue"
          ></SvgIcon>
          <SvgIcon
            name="postblock-thumb_active"
            width="20px"
            height="20px"
            v-if="isThumbValue"
          ></SvgIcon>
          <span>{{ postDetail?.thumb }}</span>
        </div>
        <div class="item commit">
          <SvgIcon name="postblock-commit" width="20px" height="20px"></SvgIcon>
          <span>{{ postDetail?.commit }}</span>
        </div>
        <div class="item share">
          <SvgIcon name="postblock-share" width="20px" height="20px"></SvgIcon>
          <span>{{ postDetail?.share || 999 }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'postDetail',
}
</script>
<script setup lang="ts">
import { ref, watch, computed } from 'vue'
import { isThumb } from '@/api'
import { storeToRefs } from 'pinia'
import { useCommunityStore } from '@/stores'
import { getAssetURL } from '@/utils/LoadAssetsImg.js'
import { showImagePreview } from 'vant'
// 确认框样式问题
import 'vant/es/image-preview/style'

// 发送请求获取详情
const communityStore = useCommunityStore()
const { postDetail } = storeToRefs(communityStore)
communityStore.fetchPostDetailById(communityStore.postId)

const imgList = ref([])
const imgCount = ref(0)
watch(postDetail, (newValue) => {
  imgList.value.push(newValue?.coverUrl)
  imgList.value.push(...(newValue?.imgUrlList || []))
  imgCount.value = imgList.value.length
})

// 预览图片
const showImage = () => {
  showImagePreview(imgList.value)
}

// 判断用户是否进行点赞了
const isThumbValue = ref(false)
const getIsThumb = () => {
  isThumbValue.value = isThumb(postDetail.id)
}
</script>

<style lang="scss" scoped>
.content {
  padding: 15px 9px 5px;
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
  .bottom {
    display: flex;
    justify-content: space-between;
    .item {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 33.3%;
      height: 40px;
      span {
        position: relative;
        left: 3px;
        color: var(--second-color);
      }
    }
  }
}
</style>
