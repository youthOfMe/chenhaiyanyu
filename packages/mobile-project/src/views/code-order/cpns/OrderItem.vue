<template>
  <div class="order-item">
    <div class="head">
      <div class="head-title nowrap_ellipsis">订单名称</div>
      <div class="order-status">订单状态</div>
    </div>
    <div class="content">
      <div class="item buy">
        <div class="item-title">买家</div>
        <img :src="getAssetURL('home/head-bg.jpg')" alt="" />
        <div class="name nowrap_ellipsis">她说万幸得以相识</div>
      </div>
      <div class="item sell">
        <div class="item-title">卖家</div>
        <img :src="getAssetURL('home/head.jpg')" alt="" />
        <div class="name nowrap_ellipsis">爱意随风起</div>
      </div>
      <SvgIcon
        name="codeOrder-trade"
        class="trade-icon"
        width="40px"
        height="40px"
      ></SvgIcon>
    </div>
    <div class="foot">
      <template v-if="true">
        <!-- 更多组件 -->
        <!-- <order-more @on-detail="showDetail()"></order-more> -->
        <van-button class="gray" plain size="small" round>取消订单</van-button>
        <van-button type="primary" plain size="small" round>去交易</van-button>
      </template>
    </div>
  </div>
</template>

<script setup lang="ts">
import { getAssetURL } from '@/utils/LoadAssetsImg.js'
</script>

<style lang="scss" scoped>
.order-item {
  background-color: #ffffff;
}
.head {
  position: relative;
  display: flex;
  align-items: center;
  .head-title {
    padding: 10px;
    font-size: 18px;
    font-weight: 600;
    color: var(--third-color);
    flex: 1;
  }
  .order-status {
    padding-right: 10px;
    color: orange;
  }
  ::before {
    position: absolute;
    bottom: 0;
    content: '';

    /* width: 100%; */
    height: 1px;
    background-color: var(--line-color);
  }
}
.content {
  position: relative;
  display: flex;
  height: 160px;
  .item {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    img {
      margin: 5px 0;
      width: 60px;
      height: 60px;
      border-radius: 50%;
    }
    .item-title {
      font-size: 18px;
      font-weight: 600;
      color: var(--primary-color);
    }
    .name {
      color: 16px;
    }
  }
  .trade-icon {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-20px, -20px);
  }
}
.foot {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 0 15px 15px;
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
</style>
