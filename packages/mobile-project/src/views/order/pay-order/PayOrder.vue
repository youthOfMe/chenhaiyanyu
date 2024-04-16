<template>
  <div class="pay-order">
    <van-nav-bar
      title="支付订单"
      left-text="返回"
      right-text="支付设置"
      left-arrow
      @click-left="back"
    />
    <div class="content">
      <div class="pay-info">
        <van-count-down :time="time" @finish="finish" />
        <div class="pay-money">￥{{ orderData?.orderAmount || 188 }}</div>
        <div class="order-id">
          辰海烟雨-{{ orderData?.orderNumber || 1008611 }}
        </div>
      </div>
      <van-cell
        title="星海币"
        clickable
        @click="switchCheck"
        icon="gold-coin-o"
      >
        <template #left-icon>
          <van-icon name="gold-coin-o" color="#00baad" />
        </template>
        <template #right-icon>
          <van-radio-group v-model="checked">
            <van-radio name="1"></van-radio>
          </van-radio-group>
        </template>
      </van-cell>
    </div>
    <van-button type="primary" round @click="comfirmPayOrder">
      确认支付
    </van-button>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { showDialog, showLoadingToast, closeToast } from 'vant'
// vant提示框样式问题处理
import 'vant/es/dialog/style'
import { useOrderStore } from '@/stores'
import { payOrder } from '@/api'
import { REMOVE_ORDER_INFO } from '@/utils/order'

// 获取支付页面的信息
const orderStore = useOrderStore()
const { orderData } = orderStore

// 路由回退
const router = useRouter()
const back = () => {
  router.back()
}

// 剩余时间处理
const time = ref(new Date().setTime(15 * 1000 * 60))
const finish = () => {
  showDialog({
    title: '支付超时',
    message: '订单长时间未支付, 已超时',
  }).then(() => {
    // on close
  })
}

// 进行支付
const checked = ref('1')
const switchCheck = () => {
  checked.value = checked.value === '0' ? '1' : '0'
}
// 确认支付
const comfirmPayOrder = async () => {
  showLoadingToast({
    message: '加载中...',
    forbidClick: true,
    duration: 0,
  })
  await payOrder(
    orderData.orderNumber,
    orderData.payMethod,
    orderData.orderAmount,
  )

  closeToast()
  REMOVE_ORDER_INFO()
  router.replace('/order')
}
</script>

<style lang="scss" scoped>
.content {
  .pay-info {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 80px;
    .pay-money {
      padding: 10px 0;
      font-size: 36px;
      font-weight: 600;
    }
  }
  .van-cell {
    margin-top: 30px;
  }
}
.van-button {
  position: absolute;
  right: 5px;
  bottom: 0;
  left: 5px;
}
</style>
