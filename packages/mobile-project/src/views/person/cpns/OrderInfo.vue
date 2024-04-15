<template>
  <div class="order-info">
    <div class="info-title">订单信息</div>
    <van-row>
      <van-col span="6" @click="goOrder">
        <van-badge :content="1">
          <SvgIcon name="orderInfo-paid" width="28px" height="28px" />
        </van-badge>
        <p>待付款</p>
      </van-col>
      <van-col span="6" @click="goOrder">
        <van-badge :content="1">
          <SvgIcon name="orderInfo-shipped" width="28px" height="28px" />
        </van-badge>
        <p>待发货</p>
      </van-col>
      <van-col span="6" @click="goOrder">
        <van-badge :content="1">
          <SvgIcon name="orderInfo-received" width="28px" height="28px" />
        </van-badge>
        <p>待收货</p>
      </van-col>
      <van-col span="6" @click="goOrder">
        <van-badge :content="1">
          <SvgIcon name="orderInfo-finished" width="28px" height="28px" />
        </van-badge>
        <p>已完成</p>
      </van-col>
    </van-row>
    <van-row>
      <van-col span="6" @click="goCodeOrder">
        <van-badge :content="1">
          <SvgIcon name="orderInfo-paid" width="28px" height="28px" />
        </van-badge>
        <p>交流中</p>
      </van-col>
      <van-col span="6" @click="goCodeOrder">
        <van-badge :content="1">
          <SvgIcon name="orderInfo-shipped" width="28px" height="28px" />
        </van-badge>
        <p>交易中</p>
      </van-col>
      <van-col span="6" @click="goCodeOrder">
        <van-badge :content="1">
          <SvgIcon name="orderInfo-received" width="28px" height="28px" />
        </van-badge>
        <p>收货中</p>
      </van-col>
      <van-col span="6" @click="goCodeOrder">
        <van-badge :content="1">
          <SvgIcon name="orderInfo-finished" width="28px" height="28px" />
        </van-badge>
        <p>已完成</p>
      </van-col>
    </van-row>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'

// 路由跳转
const router = useRouter()
// 跳转到商品订单
const goOrder = () => {
  router.push('/order')
}
// 跳转到程序订单
const goCodeOrder = () => {
  router.push('/codeOrder')
}
</script>

<style lang="scss" scoped>
.order-info {
  margin-bottom: 15px;
  padding: 15px 9px;
  background-color: #ffffff;
  .info-title {
    font-size: 18px;
    font-weight: 600;
    color: var(--third-color);
  }
  .van-col {
    margin-top: 10px;
    text-align: center;
    p {
      font-size: 12px;
    }
  }
}
</style>
