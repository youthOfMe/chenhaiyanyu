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
// import tabbarData from '@/assets/data/tabbar'
import { ref, watch, onMounted } from 'vue'
import { useRoute } from 'vue-router'

const props = defineProps({
  tabbarData: {
    type: Array,
    default: () => [],
  },
})

// 监听路由改变时, 找到对应的索引, 设置currentIndex

const route = useRoute()
onMounted(() => {
  let index = props.tabbarData.findIndex((item) => item.path === route.path)
  if (route.path.includes('hall')) index = 1
  currentIndex.value = index
})
const currentIndex = ref(0)
watch(route, (newRoute) => {
  console.log(newRoute.path, 666)

  // 找不到就返回-1
  let index = props.tabbarData.findIndex((item) => item.path === newRoute.path)
  if (route.path.includes('hall')) index = 1
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
