<template>
  <div class="search-friend">
    <van-nav-bar
      title="寻找伙伴"
      left-text="返回"
      left-arrow
      @click-left="back"
    ></van-nav-bar>
    <van-search
      v-model="value"
      show-action
      placeholder="请输入搜索关键词"
      @search="onSearch"
    >
      <template #action>
        <div @click="onClickButton">搜索</div>
      </template>
    </van-search>
    <div class="content">
      <van-divider content-position="left">已选标签</van-divider>
      <div class="choose">请选择标签</div>
      <van-row gutter="16" style="padding: 0 16px">
        <van-col>
          <van-tag closeable size="small" type="primary" @close="doClose(tag)">
            {{ tag }}
          </van-tag>
        </van-col>
      </van-row>
      <van-divider content-position="left">选择标签</van-divider>
      <van-tree-select
        v-model:active-id="activeIds"
        v-model:main-active-index="activeIndex"
        :items="tagList"
      />
    </div>
    <div style="padding: 12px" class="bottom">
      <van-button block type="primary" @click="doSearchResult">搜索</van-button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { storeToRefs } from 'pinia'
import { useUserStore } from '@/stores'

// 路由回退
const router = useRouter()
const back = () => {
  router.back()
}

const originTagList = [
  {
    text: '性别',
    children: [
      { text: '男', id: '男' },
      { text: '女', id: '女' },
    ],
  },
  {
    text: '年级',
    children: [
      { text: '大一', id: '大一' },
      { text: '大二', id: '大二' },
      { text: '大3', id: '大3' },
      { text: '大4', id: '大4' },
      { text: '大5', id: '大5aaaaaaa' },
      { text: '大6', id: '大6aaaaaaa' },
    ],
  },
]

// 标签列表
const tagList = ref(originTagList)
// 已选中的标签
const activeIds = ref(['JAVA', '前端'])
const activeIndex = ref(0)

// 进行根据标签搜索用户
const userStore = useUserStore()
const onClickButton = () => {
  userStore.fetchUsersByTagList(activeIds.value)
}
</script>

<style lang="scss" scoped>
.search-friend {
  /* background-color: #ffffff; */
  .content {
    height: calc(100vh - 54px - 46px - 68px);
    .van-divider {
      margin: 0;
      padding: 16px 0;
      background-color: #ffffff;
    }
    .choose {
      padding-left: 9px;
      background-color: #ffffff;
    }
    .van-row {
      background-color: #ffffff;
    }
  }
}
</style>
