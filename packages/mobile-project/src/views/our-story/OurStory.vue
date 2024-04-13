<template>
  <div class="our-story">
    <van-nav-bar
      title="我们的故事"
      left-text="返回"
      right-text="按钮"
      left-arrow
      @click-left="back"
      @click-right="onClickRight"
    />
    <div class="my-story">
      <div class="content-title">
        <span class="main-title">专栏</span>
        <div class="more">
          <SvgIcon name="common-right"></SvgIcon>
        </div>
      </div>
      <div class="content">
        <van-grid square class="nav-content">
          <van-grid-item
            v-for="value in 8"
            :key="value"
            icon="photo-o"
            text="阿东"
          />
        </van-grid>
      </div>
    </div>
    <div class="list">
      <PostBlock></PostBlock>
      <PostBlock></PostBlock>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'

// 路由回退
const router = useRouter()
const back = () => {
  router.back()
}
</script>

<style lang="scss" scoped>
.my-story {
  margin: 14px 9px 0;
  padding: 10px 10px 0;
  background-color: #ffffff;
  .content-title {
    display: flex;
    justify-content: space-between;
    .main-title {
      font-size: 18px;
      font-weight: 600;
      color: var(--third-color);
    }
    .more {
      display: flex;
      align-items: center;
    }
  }
}
.list {
  margin: 14px 9px 0;
  border-radius: 12px;
}
</style>
