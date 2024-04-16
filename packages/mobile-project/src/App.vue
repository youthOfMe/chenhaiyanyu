<template>
  <div>
    <router-view></router-view>
    <van-floating-bubble icon="chat" class="popo" />
    <tab-bar
      class="bottom"
      v-if="!route.meta.hideTabBar"
      :tabbarData="tabbarData"
    ></tab-bar>
    <Loading></Loading>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { storeToRefs } from 'pinia'
import { useSettingStore } from '@/stores'
import { useRoute } from 'vue-router'
import { getCityAll } from '@/api/index'
const route = useRoute()

// 持久化tab-bar状态
const settingStore = useSettingStore()
const { tabbarData } = storeToRefs(settingStore)
const offset = ref({ x: 325, y: 700 })
</script>

<style lang="scss" scoped>
body {
  --van-floating-bubble-initial-gap: 50px;
}
.bottom {
  height: 50px;
}
</style>
