<template>
  <div class="good-post-block" @click="goOurStory">
    <img :src="item?.coverUrl" alt="" class="big-img" />
    <div class="content">
      <div class="base-info">
        <img :src="item?.avatarUrl" alt="" />
        <div class="info">
          <div class="name-title">
            <span class="name nowrap_ellipsis">{{ item?.name }}</span>
          </div>
          <div class="signature nowrap_ellipsis">
            {{ item?.title || item?.description }}
          </div>
        </div>
      </div>
      <div class="label">
        <van-tag class="item" color="#7232dd" plain>二本</van-tag>
        <van-tag class="item" color="#7232dd" plain>逆袭</van-tag>
        <van-tag class="item" color="#7232dd" plain>考研成功</van-tag>
        <van-tag class="item" color="#7232dd" plain>大厂上岸</van-tag>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
import { getAssetURL } from '@/utils/LoadAssetsImg.js'

defineProps({
  item: {
    type: Object,
    default: () => {},
  },
})

const router = useRouter()
const goOurStory = () => {
  router.push('/ourstory')
}
</script>

<style lang="scss" scoped>
.big-img {
  width: 140px;
  height: 120px;
  border-radius: 5px 5px 0 0;
}
.content {
  padding-bottom: 10px;
  width: 140px;
  background-color: #ffffff;
  box-shadow:
    rgb(50 50 93 / 25%) 0 13px 27px -5px,
    rgb(0 0 0 / 30%) 0 8px 16px -8px;
  .base-info {
    display: flex;
    flex: 1;
    img {
      margin-top: 5px;
      margin-left: 5px;
      width: 30px;
      height: 30px;
      border-radius: 50%;
    }
    .info {
      /* flex布局中 flex: 1突出问题解决 文字不省略 */
      overflow: hidden;
      padding-top: 5px;
      padding-left: 10px;
      .name-title {
        .name {
          font-size: 12px;
          font-weight: 600;
          color: var(--third-color);
        }
      }
      .signature {
        margin-top: 2px;
        font-size: 12px;
        color: var(--second-color);
      }
    }
  }
  .label {
    display: flex;
    padding: 0 5px;
    flex-wrap: wrap;
    .item {
      margin-top: 5px;
      margin-right: 5px;
    }
  }
}
</style>
