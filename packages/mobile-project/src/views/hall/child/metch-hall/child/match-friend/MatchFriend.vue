<template>
  <div class="match-friend">
    <van-nav-bar
      title="匹配搭子"
      left-text="返回"
      right-text="支付设置"
      left-arrow
      @click-left="back"
    >
      <template #right>
        <van-icon name="search" size="18" />
      </template>
    </van-nav-bar>
    <van-cell center title="心动模式">
      <template #right-icon>
        <van-switch v-model="isMatchMode" size="24" />
      </template>
    </van-cell>
    <div class="content">
      <MatchCardV1></MatchCardV1>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'

// 路由回退
const router = useRouter()
const back = () => {
  router.back()
}

// 心动模式
const isMatchMode = ref(false)
</script>

<style lang="scss" scoped>
.content {
  overflow-y: auto;
  padding-top: 5px;
  height: calc(100vh - 48px - 46px);
}
</style>
