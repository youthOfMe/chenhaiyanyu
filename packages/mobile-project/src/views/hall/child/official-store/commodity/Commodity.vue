<template>
  <div class="commodity">
    <van-nav-bar
      title="全部商品"
      left-text="返回"
      right-text="加油"
      left-arrow
      @click-left="back"
      @click-right="onClickRight"
    />
    <div class="content">
      <CommodityCardV2
        v-for="item in commodityPageList.records"
        :key="item.id"
        :info="item"
      ></CommodityCardV2>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
import { storeToRefs } from 'pinia'
import { useSettingStore, useOfficailShopStore } from '@/stores'
// 路由回退
const router = useRouter()
const back = () => {
  router.back()
}

// 展示商品数据
const officialShopStore = useOfficailShopStore()
officialShopStore.fetchCommodityPageList({
  page: 1,
  pageSize: 25,
})
const { commodityPageList } = storeToRefs(officialShopStore)
</script>

<style lang="scss" scoped>
.content {
  overflow-y: auto;
  height: calc(100vh - 46px);
}
</style>
