<template>
  <div class="top-bar">
    <div class="head-img-wrapper">
      <div class="head-img" v-if="isHeadImgDisplay">
        <img :src="userInfo.avatar" alt="" />
      </div>
    </div>
    <div class="search-bar">
      <van-search left-icon="">
        <template #right-icon>
          <svg-icon
            class="search-icon"
            name="home-search"
            color="#ffffff"
            width="15px"
            height="16px"
          ></svg-icon>
        </template>
      </van-search>
    </div>
    <div class="message" @click="goPost">
      <router-link to="/message">
        <svg-icon
          class="message-icon"
          name="home-message"
          width="29px"
          height="32px"
          color="rgba(255, 255, 255, 0.59)"
        ></svg-icon>
      </router-link>
    </div>
  </div>
  <div class="line" v-if="!isHeadImgDisplay"></div>
  <div class="bottom" v-if="!isHeadImgDisplay">
    <van-tabs
      v-model:active="tabActive"
      scrollspy
      sticky
      background="none"
      class="tabs"
      color="#fff"
      title-active-color="#fff"
      title-inactive-color="#000"
    >
      <van-tab
        v-for="(item, index) in tabBarData"
        :title="item.title"
        :key="index"
        :to="item.path"
      ></van-tab>
    </van-tabs>
  </div>
</template>

<script lang="ts" setup>
import { GridItem } from 'vant'
import { ref, onMounted } from 'vue'
import { useRouter, useRoute } from 'vue-router'
const props = defineProps({
  themeColor: {
    type: String,
    default: '',
  },
  isHeadImgDisplay: {
    type: Boolean,
    default: true,
  },
  tabBarData: {
    type: Array,
    // eslint-disable-next-line vue/require-valid-default-prop
    default: () => [],
  },
  hallTabBarIndex: {
    type: Number,
    default: 0,
  },
  userInfo: {
    type: Object,
    default: () => {},
  },
})

// 监听路由
const route = useRoute()
onMounted(() => {
  let index = props.tabBarData.findIndex((item) => item.path === route.path)
  tabActive.value = index
})

// 控制tabs
const tabActive = ref(props.hallTabBarIndex)

const color = props.themeColor
const searchBarPLR = props.isHeadImgDisplay ? '0px' : '11px'
const messagePR = props.isHeadImgDisplay ? '0px' : '6px'

// 跳转路由
const router = useRouter()
const goPost = () => {
  router.push('/publishPost')
}
</script>

<style lang="scss" scoped>
.top-bar {
  display: flex;
  padding: 20px 9px 0;
  height: 40px;
  background-color: v-bind('color');
  .head-img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: rgb(245 245 245 / 100%);
    img {
      width: 40px;
      height: 40px;
      border-radius: 50%;
    }
  }
  .search-bar {
    --van-search-padding: 0;
    --van-search-input-height: 33px;
    --van-search-background: rgb(255 255 255 / 21%);
    --van-search-content-background: none;

    margin: 0 8px;
    padding: 0 v-bind('searchBarPLR');
    flex: 1;
    .van-search {
      margin-top: 5px;
      border-radius: 20px;
      .search-icon {
        position: relative;
        top: 2px;
        right: 5px;
      }
    }
  }
  .message {
    position: relative;
    padding-right: v-bind('messagePR');
    width: 29px;
    .message-icon {
      position: absolute;
      top: 0;
      bottom: 0;
      margin: auto;
    }
  }
}
.line {
  height: 10px;
  background-color: var(--primary-color);
}
.bottom {
  height: 54px;
  background-color: var(--primary-color);
  .tabs {
    --van-tabs-line-height: 44px;
  }
}
</style>
