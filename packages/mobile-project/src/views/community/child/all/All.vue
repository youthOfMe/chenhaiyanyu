<template>
  <div class="all">
    <van-tree-select v-model:main-active-index="activeIndex" :items="items">
      <template #content>
        <BlockList :categoryList="categoryList"></BlockList>
      </template>
    </van-tree-select>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { storeToRefs } from 'pinia'
import { useCommunityStore } from '@/stores'
import BlockList from './cpns/BlockList.vue'
import { watch } from 'vue'
const activeIndex = ref(0)

// 获取一级分类数据
const items = ref([{ text: '分组 1' }, { text: '分组 2' }])
const communityStore = useCommunityStore()
communityStore.fetchParentList()
const { parentList } = storeToRefs(communityStore)
watch(parentList, (newValue) => {
  items.value = newValue.map((item: any) => {
    item.text = item.name
    return item
  })
})

// 获取板块数据
communityStore.fetchCategoryList(undefined, 1)
const { categoryList } = storeToRefs(communityStore)
watch(activeIndex, (newValue) => {
  if (newValue > 0) {
    communityStore.fetchCategoryList(parentList.value[newValue].id, undefined)
  } else {
    communityStore.fetchCategoryList(undefined, 1)
  }
})
</script>

<style lang="scss" scoped>
.all {
  position: relative;
  overflow-y: auto;
  height: calc(100vh - 50px - 124px);
  .van-tree-select {
    height: calc(100vh - 50px - 124px) !important;
  }
}
</style>
