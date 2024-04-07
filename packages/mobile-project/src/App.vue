<template>
  <div>
    <router-view></router-view>
    <tab-bar></tab-bar>
  </div>
</template>

<script setup lang="ts">
import { getCityAll } from '@/api/index'
getCityAll().then((res) => {
  console.log(res, 66)
})
</script>

<style lang="scss" scoped>
/* body {
  width: 55px;
  font-size: 55px;
  background-color: '';
} */
</style>
