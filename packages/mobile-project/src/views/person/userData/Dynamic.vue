<template>
  <div class="fans">
    <div class="user-list">
      <div class="user-item">
        <div class="left-content">
          <img
            class="avatar"
            :src="getAssetURL('privateMsg/avatar1.jpg')"
            alt=""
          />
        </div>
        <div class="center-content">
          <div class="name">动态</div>
          <p>11111111111111111111111111111111</p>
        </div>
        <div class="right-content">
          <van-button
            style="
              padding: 0 6vw;
              background-color: var(--primary-color);
              color: white;
            "
          >
            回关
          </van-button>
          <svg-icon
            name="person-more"
            style="width: 28px; height: 28px"
          ></svg-icon>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { getAssetURL } from '@/utils/LoadAssetsImg'
import { useRouter } from 'vue-router'
const router = useRouter()
let goBack = () => {
  router.go(-1)
}
</script>

<style lang="scss" scoped>
.fans {
  display: flex;
  flex-direction: column;
  background-color: rgb(255 255 255);
}
.user-list {
  display: flex;
  flex-direction: column;
  .user-item {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-top: 7px;
    margin-bottom: 7px;
    .left-content {
      display: flex;
      align-items: center;
      padding-left: 13px;
      margin-right: 10px;
      width: 12%;
      img {
        width: 60px;
        height: 60px;
        border-radius: 30px;
        background: no-repeat center;
      }
    }
    .center-content {
      display: flex;
      width: 45%;
      flex-direction: column;
      font-size: 20px;
      .name {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        padding-top: 10px;
        font-size: 21px;
        font-weight: 600;
        color: var(--third-color);
      }
      p {
        overflow: hidden;
        margin: 0;
        text-overflow: ellipsis;
        white-space: nowrap;
        margin-top: 5px;
        font-size: 16px;
        color: var(--second-color);
      }
    }
    .right-content {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding-top: 8px;
      padding-right: 10px;
      flex-direction: row;
      font-size: 15px;
      height: 100%;
      width: 28%;
    }
  }
}
</style>
