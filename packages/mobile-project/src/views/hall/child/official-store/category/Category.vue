<template>
  <div class="category">
    <van-nav-bar
      title="商品目录"
      left-text="返回"
      right-text="加油"
      left-arrow
      @click-left="back"
      @click-right="onClickRight"
    />
    <van-tree-select
      v-model:main-active-index="activeIndex"
      :items="categories"
      nav-text="name"
    >
      <template #content>
        <CommodityCardV2
          v-for="item in commodityList"
          :key="item.id"
          :commodity="item"
        ></CommodityCardV2>
      </template>
    </van-tree-select>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import { useRouter } from 'vue-router'
import { storeToRefs } from 'pinia'
import { useOfficailShopStore } from '@/stores'
// 路由回退
const router = useRouter()
const back = () => {
  router.back()
}

// 数据展示
const categories = ref([])
const activeIndex = ref(0)
const officialShopStore = useOfficailShopStore()
officialShopStore.fetchCategoryList()
officialShopStore.fetchCommodityList(16)
const { categoryList, commodityList } = storeToRefs(officialShopStore)
watch(categoryList, (newValue) => {
  categories.value = categoryList.value
  categories.value.map((item) => {
    item.text = item.name
  })
})
// 点击切换分类事件
watch(activeIndex, (newValue) => {
  officialShopStore.fetchCommodityList(categories.value[activeIndex.value].id)
})

const items = [{ text: '分组 1' }, { text: '分组 2' }]
</script>

<style lang="scss" scoped>
.category {
  position: relative;
  overflow-y: auto;
  .van-tree-select {
    height: calc(100vh - 46px) !important;
  }
}
</style>
