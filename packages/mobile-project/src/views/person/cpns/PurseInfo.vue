<template>
  <div class="pursse-info">
    <div class="purse-info">
      <div class="info-title">钱包</div>
      <div class="info-content">
        <div class="item" @click="goXingHai">
          <div class="data">{{ userInfo.xinghaibi }}</div>
          <div class="data">0</div>
          <div class="text">星海币</div>
        </div>
        <div class="item" @click="goRenMin">
          <div class="data">0</div>
          <div class="text">人民币</div>
        </div>
        <div class="item" @click="goClock">
          <div class="data">0</div>
          <div class="text">签到币</div>
        </div>
        <div class="item" @click="goCred">
          <div class="data">0</div>
          <div class="text">信誉币</div>
        </div>
        <div class="item" @click="goCoupons">
          <div class="data">0</div>
          <div class="text">优惠券</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
defineProps({
  userInfo: {
    type: Object,
    default: () => {},
  },
})

const router = useRouter()
// 星海币
const goXingHai = () => {
  router.push('/xinghaiMoney')
}
// 人民币
const goRenMin = () => {
  router.push('/renminbi')
}
// 签到币
const goClock = () => {
  router.push('/clockMoney')
}
// 信誉币
const goCred = () => {
  router.push('/credMoney')
}
// 优惠券
const goCoupons = () => {
  router.push('/coupons')
}
</script>

<style lang="scss" scoped>
.purse-info {
  margin: 15px 0;
  padding: 15px 9px;
  background-color: #ffffff;
  .info-title {
    font-size: 18px;
    font-weight: 600;
    color: var(--third-color);
  }
  .info-content {
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
