<template>
  <div class="recommend">
    <div class="nav-block">
      <div class="item" v-for="item in categoryList" :key="item">
        <img :src="item?.coverUrl" alt="" />
        <div class="name nowrap_ellipsis">{{ item?.name }}</div>
      </div>
    </div>
    <div class="list">
      <div class="item" v-for="item in postList" :key="item">
        <img :src="item.coverUrl" alt="" />
        <div class="item-title nowrap_ellipsis">{{ item.title }}</div>
        <div class="info">
          <img :src="item?.avatarUrl" alt="" />
          <div class="name nowrap_ellipsis">{{ item?.name }}</div>
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
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { storeToRefs } from 'pinia'
import { useCommunityStore } from '@/stores'
import { getAssetURL } from '@/utils/LoadAssetsImg'

// 获取板块数据
const communityStore = useCommunityStore()
communityStore.fetchCategoryList(undefined, 1)
const { categoryList } = storeToRefs(communityStore)

// 获取推荐帖子列表
const { postList } = storeToRefs(communityStore)
communityStore.fetchPostListById(undefined, 1)
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
      overflow: hidden;
      padding: 0 5px;
      flex: 0 1 48%;
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
