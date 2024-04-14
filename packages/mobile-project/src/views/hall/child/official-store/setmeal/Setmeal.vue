<template>
  <div class="setmeal">
    <van-nav-bar
      title="特惠套餐"
      left-text="返回"
      right-text="加油"
      left-arrow
      @click-left="back"
      @click-right="onClickRight"
    />
    <div class="list">
      <template v-for="item in setmealList.records" :key="item.id">
        <CommodityCardV2 :info="item"></CommodityCardV2>
      </template>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
import { storeToRefs } from 'pinia'
import { useOfficailShopStore } from '@/stores'

// 路由回退
const router = useRouter()
const back = () => {
  router.back()
}

// 数据展示
const officialShopStore = useOfficailShopStore()
officialShopStore.fetchSetmealList({
  page: 1,
  pageSize: 2,
})
const { setmealList } = storeToRefs(officialShopStore)
</script>

<style lang="scss" scoped>
.list {
  padding: 10px;
  background-color: #ffffff;
}
</style>
