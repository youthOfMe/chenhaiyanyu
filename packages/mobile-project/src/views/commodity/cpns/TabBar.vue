<template>
  <div class="top-bar">
    <SvgIcon
      name="personinfo-back"
      width="20px"
      height="20px"
      @click="back"
    ></SvgIcon>
    <div class="block"></div>
    <SvgIcon name="personinfo-more" width="25px" height="25px"></SvgIcon>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()
const back = () => {
  router.back()
}
</script>

<style lang="less" scoped>
.top-bar {
  display: flex;
  padding: 15px 9px 0;
  .block {
    flex: 1;
  }
}
</style>
