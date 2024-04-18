<template>
  <div class="topbar-head-v1">
    <SvgIcon
      name="community-post-back"
      width="20px"
      height="20px"
      @click="back"
    ></SvgIcon>
    <div class="block">
      <div class="base-info">
        <img :src="postDetail.avatarUrl" @click="toPersonInfo" alt="" />
        <div class="info">
          <div class="name-title">
            <span class="name nowrap_ellipsis">{{ postDetail.name }}</span>
          </div>
          <div class="signature">
            <span>{{ postDetail.activeStatus ? '在线' : '离线' }}</span>
            <span class="text nowrap_ellipsis">爱已随风起, 风止意难平</span>
          </div>
        </div>
      </div>
      <van-button icon="plus" type="primary" size="small" round>
        关注
      </van-button>
    </div>
    <SvgIcon name="community-post-more" width="25px" height="25px"></SvgIcon>
  </div>
  <div class="line"></div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
import { storeToRefs } from 'pinia'
import { useCommunityStore } from '@/stores'
import { getAssetURL } from '@/utils/LoadAssetsImg.js'

// 路由回退
const router = useRouter()
const back = () => {
  router.back()
}

// 信息获取
const communityStore = useCommunityStore()
const { postDetail } = storeToRefs(communityStore)
</script>

<style lang="scss" scoped>
.topbar-head-v1 {
  display: flex;
  align-items: center;
  padding: 0 9px;
  background-color: #ffffff;
  .block {
    display: flex;
    align-items: center;
    padding: 15px 9px;
    flex: 1;
    .base-info {
      display: flex;
      flex: 1;
      img {
        width: 50px;
        height: 50px;
        border-radius: 50%;
      }
      .info {
        padding-top: 5px;
        padding-left: 15px;
        .name-title {
          .name {
            font-size: 18px;
            font-weight: 600;
            color: #000000;
          }
        }
        .signature {
          margin-top: 5px;
          font-size: 12px;
          font-weight: normal;
          color: var(--fourth-color);
          .text {
            padding-left: 5px;
          }
        }
      }
    }
  }
}
.line {
  height: 1px;
  background-color: #dddddd;
}
</style>
