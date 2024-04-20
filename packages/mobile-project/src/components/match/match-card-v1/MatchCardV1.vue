<template>
  <div class="match-card-v1">
    <div class="head-img">
      <img :src="userInfo.avatarUrl" alt="" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useUserStore } from '@/stores'

// 获取用户数据
const userStore = useUserStore()
const { userInfo } = storeToRefs(userStore)
</script>

<style lang="scss" scoped>
.match-card-v1 {
  display: flex;
  .head-img {
    width: 100px;
    height: 100px;
    img {
      width: 100px;
      height: 100px;
    }
  }
}
</style>
