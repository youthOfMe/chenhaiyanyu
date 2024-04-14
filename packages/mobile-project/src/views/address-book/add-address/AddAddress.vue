<template>
  <div class="add-address">
    <van-nav-bar
      title="新增地址"
      left-text="返回"
      right-text="支付设置"
      left-arrow
      @click-left="back"
      @click-right="onClickRight"
    />
    <van-address-edit
      :area-list="areaList"
      show-delete
      show-set-default
      show-search-result
      :search-result="searchResult"
      :area-columns-placeholder="['请选择', '请选择', '请选择']"
      @save="onSave"
      @delete="onDelete"
      @change-detail="onChangeDetail"
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useAddressBookStore, useUserStore } from '@/stores'
import { addAddress } from '@/api'
import { areaList } from '@vant/area-data'

// 路由回退
const router = useRouter()
const back = () => {
  router.back()
}

const searchResult = ref([])

// 新增地址数据
const userStore = useUserStore()
const onSave = async (info) => {
  const addressData = {}
  addressData.userId = userStore.userInfo.id
  addressData.consignee = info.name
  addressData.phone = info.tel
  addressData.sex = 0
  addressData.provinceCode = info.areaCode.slice(0, 2)
  addressData.provinceName = info.province
  addressData.cityCode = info.areaCode.slice(0, 4)
  addressData.cityName = info.city
  addressData.districtCode = info.areaCode
  addressData.districtName = info.county
  addressData.detail = info.addressDetail
  addressData.label = '默认'
  addressData.isDefault = info.isDefault ? 1 : 0
  const res = await addAddress(addressData)
  if (res.code === 1) {
    // eslint-disable-next-line no-undef
    showSuccessToast('添加成功！')
  } else {
    // eslint-disable-next-line no-undef
    showFailToast('添加失败')
  }
}
// eslint-disable-next-line no-undef
const onDelete = () => showToast('delete')
const onChangeDetail = (val) => {
  if (val) {
    searchResult.value = [
      {
        name: '黄龙万科中心',
        address: '杭州市西湖区',
      },
    ]
  } else {
    searchResult.value = []
  }
}
</script>

<style lang="scss" scoped></style>
