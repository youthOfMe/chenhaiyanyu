<template>
  <div class="setting">
    <div class="top-info">
      <svg-icon
        class="left-icon"
        name="message-left"
        color="black"
        @click="goBack()"
      ></svg-icon>
      <text>设置</text>
    </div>
    <div class="setting-list-1">
      <div class="every-item">
        <text class="text">账号安全</text>
        <div class="right-content">
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
        <text class="text">支付设置</text>
        <div class="right-content">
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
        <text class="text">身份认证</text>
        <div class="right-content">
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
        <text class="text">地址管理</text>
        <div class="right-content">
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
    <div class="setting-list-2">
      <div class="every-item">
        <text class="text">隐私设置</text>
        <div class="right-content">
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
        <text class="text">消息设置</text>
        <div class="right-content">
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
        <text class="text">通用设置</text>
        <div class="right-content">
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
    <div class="setting-list-3">
      <div class="every-item">
        <text class="text">反馈与建议</text>
        <div class="right-content">
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
        <text class="text">投诉维权</text>
        <div class="right-content">
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
        <text class="text">应用权限</text>
        <div class="right-content">
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
        <text class="text">隐私政策</text>
        <div class="right-content">
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
        <text class="text">关于我们</text>
        <div class="right-content">
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
      <div class="exit">
        <van-button class="exit-button">退出登录</van-button>
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
.setting {
  display: flex;
  flex-direction: column;
}
.top-info {
  display: flex;
  align-items: center;
  padding: 20px 0 0;
  flex-direction: row;
  background-color: rgb(255 255 255 / 68.6%);
  text {
    display: flex;
    align-items: center;
    margin-left: 34vw;
    width: 20vw;
    font-size: 5vw;
    font-weight: 800;
    color: #000000be;
  }
  .left-icon {
    margin-left: 5vw;
    width: 5vw;
    height: 5vw;
  }
}
.setting-list-1 {
  padding-top: 6vw;
  background-color: rgb(255 255 255 / 68.6%);
}
.setting-list-2 {
  margin-top: 2vw;
  background-color: rgb(255 255 255 / 68.6%);
}
.setting-list-3 {
  margin-top: 2vw;
  background-color: rgb(255 255 255 / 68.6%);
}
.every-item {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 10px;
  height: 12vw;
  border-bottom: solid 1px #cccccc89;
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
  font-size: 16px;
  font-weight: 600;
}
.right-content {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding-right: 5px;
  font-size: 15px;
  flex-direction: row;
  text {
    margin-right: 2vw;
    width: auto;
  }
}
.exit {
  display: flex;
  justify-content: center;
  .exit-button {
    margin: 5vw 0;
    padding: 6vw 0;
    width: 90vw;
    background-color: rgb(255 255 255 / 68.6%) !important;
  }
}
</style>
