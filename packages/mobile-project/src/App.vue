<template>
  <div>
    <router-view v-slot="props">
      <keep-alive include="home,communityMain">
        <component :is="props.Component"></component>
      </keep-alive>
    </router-view>
    <van-floating-bubble icon="chat" class="popo" @click="goChatList" />
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
import { useRouter } from 'vue-router'
import { storeToRefs } from 'pinia'
import { useSettingStore } from '@/stores'
import { useRoute } from 'vue-router'
import { getCityAll } from '@/api/index'
const route = useRoute()

// 持久化tab-bar状态
const settingStore = useSettingStore()
const { tabbarData } = storeToRefs(settingStore)
// const offset = ref({ x: 300, y: 700 })

// 跳转到聊天页面
const router = useRouter()
const goChatList = () => {
  router.push('/socail')
}
</script>

<style lang="scss" scoped>
body {
  --van-floating-bubble-initial-gap: 50px;

  position: relative;
}
.bottom {
  height: 50px;
}
</style>
