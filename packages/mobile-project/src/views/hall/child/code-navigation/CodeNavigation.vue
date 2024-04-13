<template>
  <div class="code-navigation">
    <div class="my-story">
      <div class="content-title">
        <span class="main-title">我们的故事</span>
        <div class="more">
          <SvgIcon name="common-right"></SvgIcon>
        </div>
      </div>
      <div class="content">
        <OurStoryCard></OurStoryCard>
        <OurStoryCard></OurStoryCard>
        <OurStoryCard></OurStoryCard>
        <OurStoryCard></OurStoryCard>
      </div>
    </div>
    <div class="code-web">
      <div class="content-title">
        <span class="main-title">编程推荐网站</span>
        <div class="more">
          <SvgIcon name="common-right"></SvgIcon>
        </div>
      </div>
      <div class="content">
        <CodeWebCard></CodeWebCard>
      </div>
    </div>
    <div class="code-resource">
      <div class="content-title">
        <span class="main-title">编程学习路线</span>
        <div class="more">
          <SvgIcon name="common-right"></SvgIcon>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onUnmounted } from 'vue'
import { useRoute } from 'vue-router'
import { storeToRefs } from 'pinia'
import { useSettingStore } from '@/stores'
import { getAssetURL } from '@/utils/LoadAssetsImg.js'

// 持久化页面 可抽取为hooks
const settingStore = useSettingStore()
const { tabbarData } = storeToRefs(settingStore)
const route = useRoute()
const path = route.path
onUnmounted(() => {
  settingStore.tabbarData[1].path = path
  settingStore.hallTabBarIndex = 2
})
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
  .content {
    display: flex;
    overflow-x: auto;
    margin-top: 8px;
    padding: 0 10px 20px;
    &::-webkit-scrollbar {
      display: none;
    }
    > div {
      margin-right: 10px;
    }
  }
}
.code-web {
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
.code-resource {
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
</style>
