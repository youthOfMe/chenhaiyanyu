<template>
  <div class="submit-order">
    <van-nav-bar
      title="提交订单"
      left-text="返回"
      right-text="支付设置"
      left-arrow
      @click-left="back"
    />
  </div>
  <div class="content">
    <div class="address-info">
      <div class="pan-information">
        <SvgIcon name="order-address" width="20px" height="20px"></SvgIcon>
        <div class="text nowrap_ellipsis">
          {{
            addressDefaultInfo.provinceName +
            addressDefaultInfo.cityName +
            addressDefaultInfo.districtName
          }}
        </div>
      </div>
      <div class="detail-info nowrap_ellipsis">
        {{ addressDefaultInfo.detail }}
      </div>
      <div class="user-info">
        <div class="name">{{ addressDefaultInfo.consignee }}</div>
        <div class="tel">{{ addressDefaultInfo.phone }}</div>
      </div>
    </div>
    <div class="commodity-info">
      <div class="head">
        <div class="shop-title">辰海烟雨</div>
        <div class="shop-info">璐璐璐说的不好她赔钱</div>
      </div>
      <div class="commodity-list">
        <template v-for="item in shoppingCart" :key="item.id">
          <OrderCardV1 :item="item"></OrderCardV1>
        </template>
      </div>
    </div>

    <div class="order-detail">
      <van-cell-group>
        <van-cell title="商品金额" :value="`￥${allMoney}`" />
        <van-cell title="运费" :value="`￥18`" />
        <van-cell title="优惠券" :value="`-￥0`" />
        <van-cell title="实付款" :value="`￥${payMoney}`" class="price" />
      </van-cell-group>
    </div>
    <div class="other-info">
      <van-cell title="备注" is-link />
      <van-cell title="发票信息" value="由商家提供" />
    </div>
  </div>
  <CpPaySheet
    :show="show"
    :order-id="'123456'"
    :actual-payment="payMoney"
    :on-close="onClose"
    :pay-callback="'/payOrder'"
  ></CpPaySheet>
  <van-submit-bar
    :price="payMoney * 100"
    button-text="提交订单"
    @submit="onSubmit"
    button-color="var(--primary-color)"
    :loading="loading"
  >
    <van-checkbox v-model="checked">全选</van-checkbox>
    <template #tip>
      你的收货地址不支持配送,
      <span @click="onClickLink">修改地址</span>
    </template>
  </van-submit-bar>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { storeToRefs } from 'pinia'
import {
  useAddressBookStore,
  useShoppingCartStore,
  useOrderStore,
} from '@/stores'
import OrderCardV1 from '../cpns/order-card-v1/OrderCardV1.vue'
import { watch } from 'vue'
import { showConfirmDialog } from 'vant'
// 确认框样式问题
import 'vant/es/dialog/style'
// 路由回退
const router = useRouter()
const back = () => {
  router.back()
}

// 获取默认地址数据
const addressBookStore = useAddressBookStore()
addressBookStore.fetchDefaultAddress()
const { addressDefaultInfo } = storeToRefs(addressBookStore)

// 获取购物车数据
const shoppingCartStore = useShoppingCartStore()
shoppingCartStore.fecthShoppingCartList()
const { shoppingCart } = storeToRefs(shoppingCartStore)

// 商品总金额
const allMoney = ref(0)
watch(shoppingCart, (newValue) => {
  allMoney.value = newValue.reduce((prev: any, cur: any) => {
    return cur.amount * cur.number + prev
  }, 0)
})
// 运费
const freight = 18
// 优惠券
const preferential = 0
// 最终价格
const payMoney = ref(0)
watch(allMoney, (newValue) => {
  payMoney.value = newValue + freight - preferential
})

// 提交订单
const orderId = ref(0)
const loading = ref(false)
const orderStore = useOrderStore()
// 测试阻塞函数
function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}
const onSubmit = async () => {
  // 提交订单
  loading.value = true
  const orderSubmitData = {
    addressBookId: addressDefaultInfo.value.id,
    payMethod: 3,
    remark: '默认备注',
    estimatedDeliveryTime: '2024-04-15 23:42:00',
    deliveryStatus: 1,
    packAmount: freight,
    amount: allMoney.value,
    tablewareNumber: 0,
    tablewareStatus: 0,
  }
  orderStore.fetchSubmitOrder(orderSubmitData)
  loading.value = false
  // 展示橱窗
  show.value = true
}

// 显示提交订单
const show = ref(false)
const onClose = () => {
  return showConfirmDialog({
    title: '牛马提示',
    message: '是否确认取消呢',
    cancelButtonText: '狠心离开',
    confirmButtonText: '狠心支付',
  })
    .then(() => {
      return false
    })
    .catch(() => {
      // orderId.value = ''
      router.replace('/order')
      orderStore.orderData = {}
      show.value = false
      return true
    })
}

// 判断用户是否执行了刷新
// if (sessionStorage.getItem('isReload')) {
//   console.log('页面被刷新')
// } else {
//   console.log('首次被加载')
//   sessionStorage.setItem('isReload', true)
// }
</script>

<style lang="scss" scoped>
.content {
  padding: 10px 9px 0;
  .address-info {
    padding: 20px 5px;
    background-color: #ffffff;
    .pan-information {
      display: flex;
      align-items: center;
      color: var(--second-color);
    }
    .detail-info {
      margin-top: 10px;
      margin-left: 5px;
      font-size: 18px;
      font-weight: 600;
    }
    .user-info {
      display: flex;
      margin-top: 10px;
      margin-left: 5px;
      font-weight: 600;
      .tel {
        padding-left: 5px;
      }
    }
  }
  .commodity-info {
    margin-top: 10px;
    padding: 10px 9px;
    background-color: #ffffff;
    .head {
      display: flex;
      align-items: center;
      .shop-title {
        font-size: 18px;
        font-weight: 600;
      }
      .shop-info {
        padding-left: 10px;
        color: var(--primary-color);
      }
    }
  }
  .order-detail {
    margin-top: 10px;
  }
  .other-info {
    margin-top: 10px;
  }
}
</style>
