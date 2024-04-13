<template>
  <div class="home">
    <van-nav-bar
      title="优惠券"
      left-text="返回"
      right-text="按钮"
      left-arrow
      @click-left="back"
      @click-right="onClickRight"
    />
    <!-- 优惠券单元格 -->
    <van-coupon-cell
      :coupons="coupons"
      :chosen-coupon="chosenCoupon"
      @click="showList = true"
    />
    <!-- 优惠券列表 -->
    <van-popup
      v-model:show="showList"
      round
      position="bottom"
      style="padding-top: 4px; height: 90%"
    >
      <van-coupon-list
        :coupons="coupons"
        :chosen-coupon="chosenCoupon"
        :disabled-coupons="disabledCoupons"
        @change="onChange"
        @exchange="onExchange"
      />
    </van-popup>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'

// 路由回退
const router = useRouter()
const back = () => {
  router.back()
}

const coupon = {
  available: 1,
  condition: '无门槛\n最多优惠12元',
  reason: '',
  value: 150,
  name: '优惠券名称',
  startAt: 1489104000,
  endAt: 1514592000,
  valueDesc: '1.5',
  unitDesc: '元',
}

const coupons = ref([coupon])
const showList = ref(false)
const chosenCoupon = ref(-1)

const onChange = (index) => {
  showList.value = false
  chosenCoupon.value = index
}
const onExchange = (code) => {
  coupons.value.push(coupon)
}
</script>

<style lang="scss" scoped></style>
