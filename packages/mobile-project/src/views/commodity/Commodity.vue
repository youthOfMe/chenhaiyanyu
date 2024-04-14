<template>
  <div class="commodity">
    <div class="commodity-bg">
      <img :src="commodity.image" alt="" />
    </div>
    <TabBar></TabBar>
    <div class="content-wrap">
      <div class="content">
        <div class="img-list">
          <SvgIcon name="commodity-left" color="#000000"></SvgIcon>
          <div class="list">
            <img :src="commodity.image" alt="" />
          </div>
          <SvgIcon name="commodity-right" color="#000000"></SvgIcon>
        </div>
      </div>
      <detail-infos
        name="描述"
        :ref="getSectionRef"
        :info="commodity"
        v-if="mainPart?.topModule"
      ></detail-infos>
      <!-- <detail-facility
        name="设施"
        :ref="getSectionRef"
        :house-facility="mainPart.dynamicModule.facilityModule.houseFacility"
      ></detail-facility> -->
      <!-- <detail-land-lord
        name="房东"
        :ref="getSectionRef"
        :landlord="mainPart.dynamicModule.landlordModule"
      ></detail-land-lord> -->
      <detail-comment
        name="评论"
        :ref="getSectionRef"
        :comment="mainPart.dynamicModule.commentModule"
      ></detail-comment>
      <!-- <detail-notice
        name="须知"
        :ref="getSectionRef"
        :order-rules="mainPart.dynamicModule.rulesModule.orderRules"
      ></detail-notice> -->
      <detail-map
        name="周边"
        :ref="getSectionRef"
        :position="mainPart.dynamicModule.positionModule"
      ></detail-map>
      <detail-intro :price-intro="mainPart.introductionModule"></detail-intro>
    </div>
    <div class="footer">
      <img src="@/assets/img/detail/icon_ensure.png" alt="" />
      <div class="text">辰海烟雨, 永无止境!</div>
    </div>
  </div>
  <van-action-bar>
    <van-action-bar-icon icon="chat-o" text="客服" color="#ee0a24" />
    <van-action-bar-icon icon="cart-o" text="购物车" />
    <van-action-bar-icon icon="star" text="已收藏" color="#ff5000" />
    <van-action-bar-button type="warning" text="加入购物车" />
    <van-action-bar-button type="danger" text="立即购买" @click="buy" />
  </van-action-bar>
</template>

<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { storeToRefs } from 'pinia'
import axios from 'axios'
import { useOfficailShopStore, useAddressBookStore } from '@/stores'
import { getDetailInfos } from '@/api'
import TabBar from './cpns/TabBar.vue'
import DetailInfos from './cpns/Detail02Infos.vue'
import DetailFacility from './cpns/Detail03Facility.vue'
import DetailLandLord from './cpns/Detail04LandLord.vue'
import DetailComment from './cpns/Detail05Comment.vue'
import DetailNotice from './cpns/Detail06Notice.vue'
import DetailMap from './cpns/Detail07Map.vue'
import DetailIntro from './cpns/Detail08Intro.vue'
import { getAssetURL } from '@/utils/LoadAssetsImg.js'

// 发送网络请求获取数据
const detailInfos = ref({})
const mainPart = computed(() => detailInfos.value.mainPart)
axios
  .request({
    url: 'http://123.207.32.32:1888/api/detail/infos',
    params: {
      houseId: 44173741,
    },
  })
  .then((res) => {
    detailInfos.value = res.data.data
    console.log(res.data, 666)
  })

// 获取商品数据
const route = useRoute()
const officialShopStore = useOfficailShopStore()
officialShopStore.fetchCommodityDetail(route.params.id)
const { commodity } = storeToRefs(officialShopStore)

// 获取地址数据
const addressBookStore = useAddressBookStore()
addressBookStore.fetchAddressBookList()
const { addressBookList } = storeToRefs(addressBookStore)
// 下单购买
const router = useRouter()
const buy = () => {
  if (!addressBookList.value.length) {
    // eslint-disable-next-line no-undef
    showDialog({
      title: '地址未填写',
      message: '您还未进行填写地址, 点击下方按钮完善地址信息',
    }).then(() => {
      // on close
      router.push('/addressBook')
    })
  }
}
</script>

<style lang="scss" scoped>
.commodity {
  position: relative;
  overflow-y: auto;
  height: 100vh;
}
.commodity-bg {
  position: absolute;
  right: 0;
  left: 0;
  z-index: -1;
  height: 338px;
  img {
    width: 100%;
    height: 100%;
  }
}
.content-wrap {
  padding: 298px 0 0;
  .content {
    background-color: #ffffff;
    .img-list {
      display: flex;
      align-items: center;
      padding: 15px 9px 0;
      .list {
        flex: 1;
        padding: 0 9px;
        img {
          width: 50px;
          height: 50px;
        }
      }
    }
  }
}
.footer {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 120px;
  flex-direction: column;
  img {
    width: 123px;
  }
  .text {
    margin-top: 12px;
    font-size: 12px;
    color: #7688a7;
  }
}
</style>
