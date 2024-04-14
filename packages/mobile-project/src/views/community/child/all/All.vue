<template>
  <div class="all">
    <van-tree-select v-model:main-active-index="activeIndex" :items="items">
      <template #content>
        <BlockList v-if="activeIndex === 0"></BlockList>
        <van-image
          v-if="activeIndex === 1"
          src="https://fastly.jsdelivr.net/npm/@vant/assets/apple-2.jpeg"
        />
      </template>
    </van-tree-select>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import BlockList from './cpns/BlockList.vue'
const activeIndex = ref(0)
const items = [{ text: '分组 1' }, { text: '分组 2' }]
</script>

<style lang="scss" scoped>
.all {
  position: relative;
  overflow-y: auto;
  height: calc(100vh - 50px - 124px);
  .van-tree-select {
    height: calc(100vh - 50px - 124px) !important;
  }
}
</style>
