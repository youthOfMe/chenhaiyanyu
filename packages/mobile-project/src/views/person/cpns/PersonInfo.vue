<template>
  <div class="person-info">
    <div class="base-info">
      <img :src="userInfo.avatar" @click="toPersonInfo" alt="" />
      <div class="info">
        <div class="name-title">
          <span class="name">{{ userInfo.name }}</span>
        </div>
        <div class="signature">{{ userInfo.signature }}</div>
      </div>
    </div>
    <div class="grade">
      <van-progress :percentage="50" class="progress" />
      <div class="text">
        <span>Lv.4</span>
        <span>&nbsp;/&nbsp;</span>
        <span>Lv.5</span>
      </div>
    </div>
    <div class="data-info">
      <div class="item" @click="goLikeFavorite">
        <div class="data">0</div>
        <div class="text">获赞和收藏</div>
      </div>
      <div class="item" @click="goFans">
        <div class="data">0</div>
        <div class="text">粉丝</div>
      </div>
      <div class="item" @click="goFollow">
        <div class="data">0</div>
        <div class="text">关注</div>
      </div>
      <div class="item" @click="goDynamic">
        <div class="data">0</div>
        <div class="text">动态</div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
import { getAssetURL } from '@/utils/LoadAssetsImg.js'

defineProps({
  userInfo: {
    type: Object,
    default: () => {},
  },
})

const router = useRouter()
const toPersonInfo = () => {
  router.push('/personInfo')
}
// 获赞和收藏
const goLikeFavorite = () => {
  router.push('/userData/likeFavorite')
}
// 粉丝
const goFans = () => {
  router.push('/userData/fans')
}
// 关注
const goFollow = () => {
  router.push('/userData/follow')
}
// 动态
const goDynamic = () => {
  router.push('/userData/dynamic')
}
</script>

<style lang="less" scoped>
.person-info {
  padding: 15px 9px 0;
  padding-top: 15px;
  background-color: #ffffff;
  .base-info {
    display: flex;
    img {
      width: 68px;
      height: 68px;
      border-radius: 50%;
    }
    .info {
      padding-top: 10px;
      padding-left: 15px;
      .name-title {
        .name {
          font-size: 18px;
          font-weight: 600;
          color: var(--third-color);
        }
      }
      .signature {
        margin-top: 5px;
        font-size: 12px;
        color: var(--second-color);
      }
    }
  }
  .grade {
    display: flex;
    align-items: center;
    margin-top: 10px;
    padding-bottom: 5px;
    .progress {
      flex: 1;
      margin-right: 5px;
    }
    .text {
      text-align: end;
    }
  }
  .data-info {
    display: flex;
    height: 68px;
    .item {
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: center;
      text-align: center;
      .data {
        font-size: 18px;
        font-weight: 600;
        line-height: 26px;
      }
      .text {
        font-size: 12px;
        color: var(--second-color);
      }
    }
  }
}
</style>
