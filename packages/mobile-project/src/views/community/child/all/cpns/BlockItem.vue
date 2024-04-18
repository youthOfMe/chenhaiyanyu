<template>
  <div class="block-item" @click="goCommunityMain">
    <img :src="item?.coverUrl || getAssetURL('home/head-bg.jpg')" alt="" />
    <div class="info">
      <div class="info-title">{{ item?.name }}</div>
      <div class="hot">热度</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
import { useCommunityStore } from '@/stores'
import { getAssetURL } from '@/utils/LoadAssetsImg'
import { SET_CATEGORY_ID } from '@/utils/community'

const props = defineProps({
  item: {
    type: Object,
    default: () => {},
  },
})

// 路由跳转并存储数据
const router = useRouter()
const communityStore = useCommunityStore()
const goCommunityMain = () => {
  SET_CATEGORY_ID(props.item.id)
  communityStore.categoryId = props.item.id
  router.push('/communityMain')
}
</script>

<style lang="scss" scoped>
.block-item {
  margin-right: 9px;
  margin-bottom: 10px;
  padding-bottom: 10px;
  width: 46%;
  box-shadow:
    rgb(50 50 93 / 25%) 0 13px 27px -5px,
    rgb(0 0 0 / 30%) 0 8px 16px -8px;
  img {
    width: 100%;
    height: 100px;
    border-radius: 3px 3px 0 0;
  }
  .info {
    margin-top: 5px;
    text-align: center;
    .info-title {
      font-size: 16px;
      font-weight: 600;
      color: var(--primary-color);
    }
    .hot {
      font-size: 12px;
      color: var(--second-color);
    }
  }
}
</style>
