<template>
  <div class="EditPersonInfo">
    <div class="top-info">
      <svg-icon
        class="left-icon"
        name="message-left"
        color="black"
        @click="goBack()"
      ></svg-icon>
      <text>编辑资料</text>
    </div>
    <hr width="100%" size="20" />
    <div class="message-list">
      <div class="every-item">
        <text class="text">头像</text>
        <div class="right-content">
          <img
            class="avatar"
            :src="getAssetURL('privateMsg/avatar1.jpg')"
            alt=""
          />
          <div class="arrow-icon">
            <svg-icon
              name="message-arrow"
              color="black"
              width="30px"
              height="30px"
            ></svg-icon>
          </div>
        </div>
      </div>

      <div class="every-item">
        <text class="text">昵称</text>
        <div class="right-content">
          <text>用户7895</text>
          <div class="arrow-icon">
            <svg-icon
              name="message-arrow"
              color="black"
              width="30px"
              height="30px"
            ></svg-icon>
          </div>
        </div>
      </div>

      <div class="every-item">
        <text class="text">签名</text>
        <div class="right-content">
          <text>未设置</text>
          <div class="arrow-icon">
            <svg-icon
              name="message-arrow"
              color="black"
              width="30px"
              height="30px"
            ></svg-icon>
          </div>
        </div>
      </div>

      <div class="every-item">
        <text class="text">性别</text>
        <div class="right-content">
          <text>女</text>
          <div class="arrow-icon">
            <svg-icon
              name="message-arrow"
              color="black"
              width="30px"
              height="30px"
            ></svg-icon>
          </div>
        </div>
      </div>
      <div class="every-item">
        <text class="text">生日</text>
        <div class="right-content">
          <text>2023-01</text>
          <div class="arrow-icon">
            <svg-icon
              name="message-arrow"
              color="black"
              width="30px"
              height="30px"
            ></svg-icon>
          </div>
        </div>
      </div>
      <div class="every-item">
        <text class="text">城市</text>
        <div class="right-content">
          <text>济宁</text>
          <div class="arrow-icon">
            <svg-icon
              name="message-arrow"
              color="black"
              width="30px"
              height="30px"
            ></svg-icon>
          </div>
        </div>
      </div>
      <div class="every-item">
        <text class="text">学校</text>
        <div class="right-content">
          <text>济宁学院</text>
          <div class="arrow-icon">
            <svg-icon
              name="message-arrow"
              color="black"
              width="30px"
              height="30px"
            ></svg-icon>
          </div>
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
.EditPersonInfo {
  display: flex;
  flex-direction: column;
  background-color: rgb(255 255 255 / 68.6%);
}
.top-info {
  display: flex;
  align-items: center;
  margin: 15px 0 10px;
  flex-direction: row;
  text {
    display: flex;
    align-items: center;
    margin-left: 20px;
    width: 20vw;
    font-size: 5vw;
    font-weight: 700;
    color: #000000be;
  }
  .left-icon {
    margin-left: 5vw;
    width: 8vw;
    height: 5vw;
  }
}
img {
  margin-right: 5vw;
  width: 15vw;
  height: 15vw;
  border-radius: 20vw;
  background: no-repeat center;
  background-size: 60px;
}
hr {
  border: none;
  border-top: 1px solid #cccccc;
}
.every-item {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 10px;
  height: 10vw;
  &:active {
    color: white;
    background-color: #cccccc;
  }
}
.arrow-icon {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 6vw;
}
.text {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-left: 12px;
  width: 40vw;
  font-size: 17px;
  font-weight: 500;
}
.right-content {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding-top: 14px;
  padding-right: 5px;
  font-size: 15px;
  flex-direction: row;
  text {
    margin-right: 2vw;
    width: auto;
  }
}
</style>
