<template>
  <div class="order-item">
    <div class="head">
      <div class="select-shop">
        <van-radio name="1"></van-radio>
        <div class="shop">
          <SvgIcon name="order-shop" width="25px" height="25px"></SvgIcon>
          <div class="shop-name nowrap_ellipsis">辰海烟雨</div>
          <SvgIcon name="common-right"></SvgIcon>
        </div>
      </div>
      <div class="status">等待牛马付款</div>
    </div>
    <div class="content">
      <OrderCardV1></OrderCardV1>
      <div class="other-info">
        <div class="other-pay-info">付款后,48小时内发货</div>
        <van-tag plain type="primary">7天无理由退货</van-tag>
      </div>
      <div class="notify-info">
        <SvgIcon name="order-time" width="25px" height="25px"></SvgIcon>
        <div class="text">订单即将关闭, 建议尽快付款</div>
      </div>
      <div class="pay-money">
        <div class="money">需付款￥888</div>
        <div class="other-info">含运费服务</div>
      </div>
    </div>
    <div class="foot">
      <template v-if="true">
        <!-- 更多组件 -->
        <!-- <order-more @on-detail="showDetail()"></order-more> -->
        <van-button class="gray" plain size="small" round>取消订单</van-button>
        <van-button type="primary" plain size="small" round>去支付</van-button>
      </template>
    </div>
  </div>
</template>

<script setup lang="ts">
import OrderCardV1 from '@/views/order/cpns/order-card-v1/OrderCardV1.vue'
</script>

<style lang="scss" scoped>
.order-item {
  padding: 10px;
  background-color: #ffffff;
  .head {
    display: flex;
    align-items: center;
    .select-shop {
      display: flex;
      flex: 1;
      align-items: center;
      .shop {
        display: flex;
        align-items: center;
        padding-left: 10px;
        flex: 1;
        .shop-name {
          padding-left: 8px;
          font-size: 18px;
          font-weight: 600;
        }
      }
    }
    .status {
      font-size: 16px;
      color: orange;
    }
  }
  .content {
    .other-info {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-top: 5px;
      .other-pay-info {
        font-size: 16px;
        color: orange;
      }
    }
    .notify-info {
      display: flex;
      align-items: center;
      margin-top: 10px;
      padding: 15px;
      border-radius: 6px;
      background-color: #eeeeee;
      .text {
        position: relative;
        top: 1px;
        padding-left: 15px;
        font-size: 16px;
        color: red;
      }
    }
    .pay-money {
      display: flex;
      align-items: center;
      margin-top: 10px;
      flex-direction: row-reverse;
      .other-info {
        margin-right: 5px;
        font-size: 16px;
        color: var(--fourth-color);
      }
      .money {
        font-size: 18px;
        font-weight: 600;
      }
    }
  }
  .foot {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding: 15px 0 0;
    .van-button {
      margin-left: 10px;
      padding: 0 16px;
      &.gray {
        color: var(--cp-text3);
        background-color: var(--cp-bg);
      }
    }
    .more {
      font-size: 13px;
      color: var(--primary-color);
      flex: 1;
    }
  }
}
</style>
