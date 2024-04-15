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
        <div class="pay-money">￥188</div>
        <div class="order-id">辰海烟雨-1008611</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { showDialog } from 'vant'
import 'vant/es/dialog/style'

// 路由回退
const router = useRouter()
const back = () => {
  router.back()
}

// 剩余时间处理
const time = ref(new Date().setTime(15 * 1000))
const finish = () => {
  showDialog({
    title: '支付超时',
    message: '订单长时间未支付, 已超时',
  }).then(() => {
    // on close
  })
}
</script>

<style lang="scss" scoped></style>
