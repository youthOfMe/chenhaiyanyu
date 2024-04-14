<template>
  <div class="xinghai-money">
    <van-nav-bar
      title="星海币"
      left-text="返回"
      right-text="支付设置"
      left-arrow
      @click-left="back"
      @click-right="onClickRight"
    />
    <div class="authentication">
      <div class="status">待实名</div>
      <div class="info">为保证资金以及账户安全, 请尽快认证</div>
      <SvgIcon
        name="common-right"
        color="var(--second-color)"
        width="12px"
        height="12px"
      ></SvgIcon>
    </div>
    <div class="content">
      <div class="balance">
        <div class="head">余额(1￥ = 10星海币)</div>
        <div class="money">
          星海币:
          <span>{{ userInfo.xinghaibi }}</span>
        </div>
        <van-button plain type="primary" class="recharge" size="small">
          立即充值
        </van-button>
      </div>
      <div class="info-content">
        <div class="item">
          <div class="text">充值券</div>
          <div class="data">0</div>
        </div>
        <div class="item">
          <div class="text">津贴</div>
          <div class="data">0</div>
        </div>
        <div class="item">
          <div class="text">银行卡</div>
          <div class="data">去绑定</div>
        </div>
        <div class="item">
          <div class="text">信誉值</div>
          <div class="data">0</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
import { storeToRefs } from 'pinia'
import { useUserStore } from '@/stores'

// 路由回退
const router = useRouter()
const back = () => {
  router.back()
}

// 获取星海币
const userStore = useUserStore()
userStore.fetchUserInfo()
const { userInfo } = storeToRefs(userStore)
</script>

<style lang="scss" scoped>
.xinghai-money {
  .authentication {
    display: flex;
    align-items: center;
    margin: 10px 9px 0;
    padding: 10px;
    background-color: #ffffff;
    .status {
      font-size: 12px;
    }
    .info {
      padding-left: 15px;
      font-size: 12px;
      color: var(--second-color);
    }
  }
  .content {
    margin: 10px 9px 0;
    padding-bottom: 20px;
    background-color: #ffffff;
    .balance {
      position: relative;
      padding: 20px 20px 0;
      .head {
        font-size: 18px;
        font-weight: 600;
        color: var(--third-color);
      }
      .money {
        margin-top: 10px;
        span {
          font-size: 18px;
          font-weight: 600;
          color: var(--primary-color);
        }
      }
      .recharge {
        position: absolute;
        top: 50%;
        right: 20px;
        transform: translate(0, -22px);
      }
    }
    .info-content {
      display: flex;
      height: 68px;
      .item {
        display: flex;
        justify-content: center;
        margin-top: 15px;
        text-align: center;
        flex: 1;
        flex-direction: column;
        .data {
          padding-top: 10px;
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
}
</style>
