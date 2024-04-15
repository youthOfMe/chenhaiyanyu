<script setup lang="ts">
// import { getConsultOrderPayUrl } from '@/service/consult'
import { showLoadingToast, showToast } from 'vant'
import { onMounted } from 'vue'
import { ref } from 'vue'
import SvgIcon from '../svg-icon/SvgIcon.vue'

const props = defineProps<{
  show: boolean
  orderId: string
  actualPayment: number
  onClose?: () => void
  payCallback?: string
}>()

// 配置进行支付橱窗是否显示
const emit = defineEmits<{
  (e: 'update:show', show: boolean): void
}>()
const paymentMethod = ref<0 | 1 | 2 | 3>()

// 支付逻辑
const pay = async () => {
  if (paymentMethod.value === undefined) return showToast('请选择支付方式')
  if (paymentMethod.value === 1) return showToast('暂不支持')
  if (paymentMethod.value === 2) return showToast('暂不支持')
  // 默认只能进行使用星海币进行支付
  showLoadingToast({ message: '跳转支付', duration: 0 })
  // const res = await getConsultOrderPayUrl({
  //   orderId: props.orderId,
  //   paymentMethod: paymentMethod.value,
  //   payCallback: import.meta.env.VITE_APP_CALLBACK + props.payCallback,
  // })
  // window.location.href = res.data.payUrl
}
onMounted(() => {})
</script>

<template>
  <div class="consult-pay-page">
    <van-action-sheet
      :show="show"
      @update:show="emit('update:show', $event)"
      title="选择支付方式"
      :close-on-popstate="false"
      :closeable="false"
      :before-close="onClose"
    >
      <div class="pay-type">
        <p class="amount">￥{{ props.actualPayment.toFixed(2) }}</p>
        <van-cell-group>
          <van-cell title="微信支付" @click="paymentMethod = 0">
            <template #icon>
              <SvgIcon width="18px" height="18px" name="order-wechat" />
            </template>
            <template #extra>
              <van-checkbox :checked="paymentMethod === 0" />
            </template>
          </van-cell>
          <van-cell title="支付宝支付" @click="paymentMethod = 1">
            <template #icon>
              <SvgIcon width="18px" height="18px" name="order-alipay" />
            </template>
            <template #extra>
              <van-checkbox :checked="paymentMethod === 1" />
            </template>
          </van-cell>
          <van-cell title="星海币支付" @click="paymentMethod = 2">
            <template #icon>
              <SvgIcon width="18px" height="18px" name="order-alipay" />
            </template>
            <template #extra>
              <van-checkbox :checked="paymentMethod === 1" />
            </template>
          </van-cell>
        </van-cell-group>
        <div class="btn">
          <van-button type="primary" round block @click="pay()">
            立即支付
          </van-button>
        </div>
      </div>
    </van-action-sheet>
  </div>
</template>

<style scoped lang="scss">
.pay-type {
  .amount {
    padding: 20px;
    font-size: 16px;
    font-weight: bold;
    text-align: center;
  }
  .btn {
    padding: 15px;
  }
  .van-cell {
    align-items: center;
    .svg {
      margin-right: 10px;
    }
    .van-checkbox :deep(.van-checkbox__icon) {
      font-size: 16px;
    }
  }
}
</style>
