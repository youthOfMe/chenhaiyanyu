<template>
  <!-- <div class="line"></div> -->
  <div class="tab-bar">
    <van-tabbar
      v-model="currentIndex"
      active-color="var(--primary-color)"
      route
      @change="onChange"
      class="tab-bar-wrapper"
    >
      <template v-for="(item, index) in tabbarData" :key="index">
        <van-tabbar-item :to="item.path" class="item">
          <template #icon>
            <svg-icon
              v-if="currentIndex !== index"
              :name="item.image"
              width="30px"
              height="30px"
            ></svg-icon>
            <svg-icon
              v-if="currentIndex === index"
              :name="item.imageActive"
              width="30px"
              height="30px"
            ></svg-icon>
          </template>
        </van-tabbar-item>
      </template>
    </van-tabbar>
  </div>
</template>

<script setup lang="ts">
import tabbarData from '@/assets/data/tabbar'
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'

// 监听路由改变时, 找到对应的索引, 设置currentIndex
const route = useRoute()
const currentIndex = ref(0)
watch(route, (newRoute) => {
  // 找不到就返回-1
  const index = tabbarData.findIndex((item) => item.path === newRoute.path)
  if (index === -1) return
  currentIndex.value = index
})

const onChange = (active) => {
  currentIndex.value = active
}
</script>

<style lang="scss" scoped>
/* .line {
  position: absolute;
  bottom: 50px;
  z-index: 999;
  width: 100vw;
  height: 1px;
  background-color: var(--line-color);
} */
.tab-bar {
  --van-tabbar-item-icon-margin-bottom: 0;
  .item {
    margin-top: 10px;
  }
  img {
    height: 30px;
  }
}
</style>
