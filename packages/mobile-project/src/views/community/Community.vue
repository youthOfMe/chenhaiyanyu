<template>
  <div class="community">
    <TopBarMain
      themeColor="var(--primary-color)"
      :isHeadImgDisplay="false"
    ></TopBarMain>
    <div class="content">
      <Recommend></Recommend>
      <div class="plate">
        <div class="title">科技</div>
        <div class="plate-content">
          <div class="item">
            <img :src="getAssetURL('community/synthesis.jpg')" alt="" />
            <div class="info">
              <div class="plate-title nowrap_ellipsis">综合板块</div>
              <div class="plate-data nowrap_ellipsis">
                <span>热度&nbsp;</span>
                <span>6666666</span>
              </div>
            </div>
          </div>
          <div class="item">
            <img :src="getAssetURL('community/synthesis.jpg')" alt="" />
            <div class="info">
              <div class="plate-title nowrap_ellipsis">Python专区</div>
              <div class="plate-data nowrap_ellipsis">
                <span>热度&nbsp;</span>
                <span>666</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { getAssetURL } from '@/utils/LoadAssetsImg'
import Recommend from './cpns/Recommend.vue'
</script>

<style lang="scss" scoped>
.content {
  margin: 14px 9px 0;
}
.plate {
  margin-top: 8px;
  padding: 5px 0 0 25px;
  border-radius: 10px;
  background-color: #ffffff;
  .plate-content {
    display: flex;
    flex-wrap: wrap;
    padding: 12px 0 32px 8px;
    .item {
      display: flex;
      width: 50%;
      img {
        width: 53px;
        height: 53px;
      }
      .info {
        overflow: hidden;
        padding-left: 7px;
        flex: 1;
        .plate-title {
          font-size: 18px;
          font-weight: 700;
        }
        .plate-data {
          margin-top: 11px;
          padding-left: 6px;
          color: var(--fourth-color);
        }
      }
    }
  }
}
</style>
