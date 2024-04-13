<template>
  <div>
    <router-view></router-view>
    <tab-bar class="bottom" v-if="!route.meta.hideTabBar"></tab-bar>
  </div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'
import { getCityAll } from '@/api/index'
// getCityAll().then((res) => {
//   console.log(res, 66)
// })

const route = useRoute()
</script>

<style lang="scss" scoped>
.bottom {
  height: 50px;
}
</style>
