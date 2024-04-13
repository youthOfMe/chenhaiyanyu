<template>
  <div>
    <router-view></router-view>
    <tab-bar
      class="bottom"
      v-if="!route.meta.hideTabBar"
      :tabbarData="tabbarData"
    ></tab-bar>
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useSettingStore } from '@/stores'
import { useRoute } from 'vue-router'
import { getCityAll } from '@/api/index'
const route = useRoute()

// 持久化tab-bar状态
const settingStore = useSettingStore()
const { tabbarData } = storeToRefs(settingStore)
</script>

<style lang="scss" scoped>
.bottom {
  height: 50px;
}
</style>
