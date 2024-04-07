<template>
  <div class="top-bar">
    <div class="head-img-wrapper">
      <div class="head-img" v-if="isHeadImgDisplay"></div>
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
    <div class="message">
      <svg-icon
        class="message-icon"
        name="home-message"
        width="29px"
        height="32px"
        color="rgba(255, 255, 255, 0.59)"
      ></svg-icon>
    </div>
  </div>
  <div class="bottom" v-if="!isHeadImgDisplay"></div>
</template>

<script lang="ts" setup>
const props = defineProps({
  themeColor: {
    type: String,
    default: '',
  },
  isHeadImgDisplay: {
    type: Boolean,
    default: true,
  },
})

const color = props.themeColor
const searchBarPLR = props.isHeadImgDisplay ? '0px' : '11px'
const messagePR = props.isHeadImgDisplay ? '0px' : '6px'
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
.bottom {
  height: 54px;
  background-color: var(--primary-color);
}
</style>
