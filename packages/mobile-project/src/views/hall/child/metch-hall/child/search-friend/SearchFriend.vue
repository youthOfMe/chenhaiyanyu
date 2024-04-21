<template>
  <div class="search-friend">
    <van-nav-bar
      title="寻找伙伴"
      left-text="返回"
      left-arrow
      @click-left="back"
    ></van-nav-bar>
    <van-search
      v-model="searchText"
      show-action
      placeholder="请输入搜索关键词"
      @search="onSearchTagList"
    >
      <template #action>
        <div @click="onSearchTagList">搜索</div>
      </template>
    </van-search>
    <div class="content">
      <van-divider content-position="left">已选标签</van-divider>
      <div class="choose" v-if="!activeIds.length">请选择标签</div>
      <van-row gutter="16" style="padding: 0 16px">
        <van-col v-for="tag in activeIds" :key="tag">
          <van-tag closeable size="small" type="primary" @close="doClose(tag)">
            {{ tag }}
          </van-tag>
        </van-col>
      </van-row>
      <van-divider content-position="left">选择标签</van-divider>
      <van-tree-select
        v-model:active-id="activeIds"
        v-model:main-active-index="activeIndex"
        :items="dispalyTagList"
      />
    </div>
    <div style="padding: 12px" class="bottom">
      <van-button block type="primary" @click="onSearchClick">搜索</van-button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import { useRouter } from 'vue-router'
import { storeToRefs } from 'pinia'
import { useUserStore } from '@/stores'

// 路由回退
const router = useRouter()
const back = () => {
  router.back()
}

// 标签列表
const userStore = useUserStore()
const { tagList } = storeToRefs(userStore)
const dispalyTagList = ref([])
userStore.fetchTags()
const parentIndex = ref(0)
watch(tagList, (newValue) => {
  newValue.map((item: any, index: number) => {
    if (!item.parentId) {
      dispalyTagList.value[parentIndex.value] = {}
      dispalyTagList.value[parentIndex.value].children = []
      dispalyTagList.value[parentIndex.value].text = item.tagName
      parentIndex.value++
    }
    if (item.parentId) {
      parentIndex.value--
      dispalyTagList.value[parentIndex.value].children.push({
        text: item.tagName,
        id: item.tagName,
      })
      parentIndex.value++
    }
  })
  console.log(dispalyTagList)
})
// const tagList = ref(originTagList)
// const tagList = ref(originTagList)
// 已选中的标签
const activeIds = ref([])
const activeIndex = ref(0)

// 进行根据标签搜索用户
const onSearchClick = () => {
  userStore.chooseTagList = activeIds.value
  userStore.fetchUsersByTagList(activeIds.value)
  router.push('/search/friend/result')
}

// 搜索标签
const searchText = ref('')
const onSearchTagList = () => {
  dispalyTagList.value = dispalyTagList.value.map((parentTag: any) => {
    const tempChildren = [...parentTag.children]
    const tempParentTag = { ...parentTag }
    tempParentTag.children = tempChildren.filter((item) =>
      item.text.includes(searchText.value),
    )
    return tempParentTag
  })
}

// 移除标签
const doClose = (tag) => {
  activeIds.value = activeIds.value.filter((item) => {
    return item !== tag
  })
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
