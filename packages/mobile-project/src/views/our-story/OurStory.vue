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
        <van-grid square class="nav-content" icon-size="50px">
          <van-grid-item
            v-for="value in columnList"
            :key="value"
            :icon="value.coverUrl"
            :text="value.name"
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
import { ref } from 'vue'
import { getOurStoryColumnList } from '@/api'
import { useRouter } from 'vue-router'
import { storeToRefs } from 'pinia'
import { useOurStoryStore } from '@/stores'

// 获取数据
const ourStoryStore = useOurStoryStore()
ourStoryStore.fetchColumnList()
const { columnList } = storeToRefs(ourStoryStore)
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
