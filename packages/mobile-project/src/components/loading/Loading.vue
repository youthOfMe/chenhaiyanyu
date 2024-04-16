<template>
  <div class="loading" v-if="commonStore.isLoading" @click="loadingClick">
    <div class="bg">
      <img src="@/assets/img/common/full-screen-loading.gif" alt="" />
    </div>
  </div>
</template>

<script setup>
import { storeToRefs } from 'pinia'
import { useCommonStore } from '@/stores'

const commonStore = useCommonStore()
const { isLoading } = storeToRefs(commonStore)

const loadingClick = () => {
  // commonStore.isLoading = false
}
</script>

<style lang="scss" scoped>
.loading {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 999;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
  background-color: rgb(0 0 0 / 20%);
  .bg {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 104px;
    height: 104px;
    background: url(@/assets/img/common/loading-bg.png) 0 0 / 100% 100%;
    img {
      margin-bottom: 10px;
      width: 70px;
      height: 70px;
    }
  }
}
</style>
