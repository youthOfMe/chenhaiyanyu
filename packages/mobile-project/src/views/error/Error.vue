<template>
  <div class="error">
    <div class="return-upper">
      <svg-icon
        class="return-icon"
        name="error-return"
        color="black"
        width="35px"
        height="35px"
      ></svg-icon>
    </div>
    <div class="error-illustration">
      <img :src="getAssetURL('error/notFound.png')" alt="" />
    </div>
    <div class="error-prompt">
      <h1>404错误!</h1>
      <p>对不起，您正在寻找的网页不存在，尝试刷新或者返回首页！</p>
    </div>
    <div class="return-btn">
      <router-link to="/">
        <button>返回首页</button>
      </router-link>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { getAssetURL } from '@/utils/LoadAssetsImg'
</script>

<style lang="scss" scoped>
.error {
  display: flex;
  flex-direction: column;
}
.error-illustration {
  display: flex;
  justify-content: center;
  margin-top: 120px;
  img {
    width: 350px;
    height: 350px;
  }
}
.error-prompt {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: larger;
  color: var(--primary-color);
}
.return-btn {
  display: flex;
  justify-content: center;
  margin: 8px;
  button {
    display: inline-block;
    padding: 0 14px;
    width: 90px;
    height: 32px;
    font-size: 13px;
    font-weight: 500;
    border: none;
    border-radius: 50px;
    color: var(--primary-color);
    background-color: #2222220d;
    outline: 0;
    cursor: pointer;
    :hover {
      background-color: #2222221a;
    }
  }
}
</style>
