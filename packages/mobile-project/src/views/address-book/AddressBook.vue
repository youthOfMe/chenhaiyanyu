<template>
  <div class="address-book">
    <van-nav-bar
      title="地址管理"
      left-text="返回"
      right-text="支付设置"
      left-arrow
      @click-left="back"
      @click-right="onClickRight"
    />
    <van-address-list
      v-model="chosenAddressId"
      :list="addressList"
      :disabled-list="disabledList"
      disabled-text="以下地址超出配送范围"
      default-tag-text="默认"
      @add="onAdd"
      @edit="onEdit"
    />
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import { useRouter } from 'vue-router'
import { storeToRefs } from 'pinia'
import { useAddressBookStore } from '@/stores'

// 展示地址数据
const addressBookStore = useAddressBookStore()
addressBookStore.fetchAddressBookList()
const { addressBookList } = storeToRefs(addressBookStore)
const addressList = ref([])
watch(addressBookList, (newList) => {
  addressList.value = newList.map((item) => {
    return {
      id: item.id,
      name: item.consignee,
      tel: item.phone,
      address:
        item.provinceName + item.cityName + item.districtName + item.detail,
      isDefault: item.isDefault ? true : false,
    }
  })
})
const chosenAddressId = ref('1')
// 路由回退
const router = useRouter()
const back = () => {
  router.back()
}
// 新增地址
const onAdd = () => {
  router.push('/addAddress')
}
</script>

<style lang="scss" scoped></style>
