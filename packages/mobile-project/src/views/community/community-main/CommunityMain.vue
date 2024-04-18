<template>
  <div class="community-main">
    <van-nav-bar
      title="社区主页"
      left-text="返回"
      right-text="发帖"
      left-arrow
      @click-left="back"
      @click-right="switchPostShow"
    />
    <TabControl :titles="names"></TabControl>
    <van-dropdown-menu>
      <van-dropdown-item v-model="value1" :options="option1" />
      <van-dropdown-item v-model="value2" :options="option2" />
    </van-dropdown-menu>
    <div class="content" ref="contentRef">
      <ForumNav></ForumNav>
      <div class="announcement-list">
        <AnnouncementCardV1 v-for="i in 3" :key="i"></AnnouncementCardV1>
      </div>
      <div class="post-list">
        <PostBlock
          v-for="item in postList"
          :key="item"
          :postItem="item"
        ></PostBlock>
      </div>
    </div>
  </div>
  <van-action-sheet v-model:show="postShow" title="发帖">
    <PostContent></PostContent>
  </van-action-sheet>
</template>

<script lang="ts">
export default {
  name: 'communityMain',
}
</script>
<script setup lang="ts">
import {
  ref,
  onDeactivated,
  onActivated,
  onUnmounted,
  watch,
  onBeforeUnmount,
} from 'vue'
import { useRouter } from 'vue-router'
import { storeToRefs } from 'pinia'
import { useCommunityStore } from '@/stores'
import useScroll from '@/hooks/useScroll.js'
import ForumNav from './cpns/ForumNav.vue'
import PostContent from './cpns/PostContent.vue'

// tab-control显示的数据
const names = ['论坛', '综合', '官方', '专栏', '资源', '阿东']

// 路由回退
const router = useRouter()
const back = () => {
  router.back()
}

// 展示选项
const value1 = ref(0)
const value2 = ref('a')
const option1 = [
  { text: '单列', value: 0 },
  { text: '双列', value: 1 },
]
const option2 = [
  { text: '默认排序', value: 'a' },
  { text: '好评排序', value: 'b' },
  { text: '销量排序', value: 'c' },
]

// 获取帖子数据
const communityStore = useCommunityStore()
const { categoryId, postList } = storeToRefs(communityStore)
communityStore.fetchPostListById(categoryId.value)

// 发帖逻辑
const postShow = ref(false)
const switchPostShow = () => {
  postShow.value = true
}

// 记录页面滚动状态
const contentRef = ref()
const { isReachBottom, scrollTop } = useScroll(contentRef)
onActivated(() => {
  contentRef.value?.scrollTo({
    top: scrollTop.value,
  })
})
</script>

<style lang="scss" scoped>
.content {
  overflow-y: auto;
  height: calc(100vh - 138px);
  .announcement-list {
    padding: 10px 15px;
    background-color: #ffffff;
  }
}
</style>
