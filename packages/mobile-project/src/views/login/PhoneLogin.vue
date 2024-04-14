<template>
  <div class="login">
    <div class="topContent">
      <div class="top-back">
        <svg-icon
          class="left-icon"
          name="login-back"
          @click="goBack()"
        ></svg-icon>
      </div>
      <div class="user-avatar"></div>
    </div>
    <div class="userinfo">
      <van-form autocomplete="off" @submit="onSubmit">
        <text>手机号</text>
        <van-field type="tel" v-model="mobile" :rules="mobileRules" />
        <text>密码</text>
        <van-field type="password" v-model="password" :rules="passwordRules" />
        <div class="cp-cell">
          <van-button type="primary" native-type="submit">登 录</van-button>
        </div>
      </van-form>
    </div>
    <div class="bottom-style">
      <div class="bottom-round">
        <div class="roundOne"></div>
        <div class="roundTwo"></div>
        <div class="roundTre"></div>
        <div class="roundFour"></div>
      </div>
      <div class="bottom-words">
        <router-link to="/register">
          <text>注册</text>
        </router-link>
        <text>|</text>
        <router-link to="/foundAccount">
          <text>找回</text>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useRouter } from 'vue-router'
import { ref } from 'vue'
import { mobileRules, passwordRules, usernameRules } from '@/utils/Rules.ts'

const mobile = ref('')
const password = ref('')
const onSubmit = () => {
  console.log('ok')
}
const router = useRouter()
let goBack = () => {
  router.go(-1)
}
</script>

<style lang="scss" scoped>
.login {
  display: flex;
  align-items: center;
  width: 100%;
  height: 217vw;
  background-color: #fffefb;
  flex-direction: column;
}
.topContent {
  width: 100%;
  height: 70vw;
  border-radius: 0% 0% 95% 10% / 0% 0% 45% 0%;
  background-color: rgb(15 98 254);
  .left-icon {
    margin: 10px;
    width: 8vw;
    height: 8vw;
  }
  .user-avatar {
    margin: 40vw 0 0 31vw;
    width: 30vw;
    height: 30vw;
    border-radius: 50%;
    background: #5bfded;
  }
}
.userinfo {
  display: flex;
  margin-top: 25vw;
  width: 80vw;
  text-align: left;
  flex-direction: column;
  text {
    margin-left: 1vw;
    font-size: 4vw;
    color: #8888889c;
  }
  p {
    margin-left: 1vw;
    font-size: 3vw;
    color: #888888ab;
  }
}
.van-cell {
  margin: 0 0 5vw;
  width: 80vw;
  font-size: 5vw;
  border: none;
  border-bottom: 2px solid #88888860 !important;
  color: black;
  background-color: transparent !important;
}
.van-button--primary {
  position: absolute;
  top: 175vw;
  display: inline-block;
  align-items: center;
  margin-left: 5vw;
  width: 70vw;
  height: 13vw;
  font-size: 7vw;
  font-weight: 400;
  color: #ffffff;
  background-color: rgb(15 98 254) !important;
  outline: none;
  cursor: pointer;
}
.bottom-style {
  position: absolute;
  bottom: 0;
  display: flex;
  margin-bottom: 4vw;
  flex-direction: row;
  .bottom-round {
    display: flex;
    flex-direction: row;
    .roundOne {
      margin: 0 1vw;
      width: 7vw;
      height: 7vw;
      border-radius: 50%;
      background: #3664ed;
    }
    .roundTwo {
      margin: 0 1vw;
      width: 7vw;
      height: 7vw;
      border-radius: 50%;
      background: #5bfded;
    }
    .roundTre {
      margin: 0 1vw;
      width: 7vw;
      height: 7vw;
      border-radius: 50%;
      background: #66f466;
    }
    .roundFour {
      margin: 0 1vw;
      width: 7vw;
      height: 7vw;
      border-radius: 50%;
      background: #ff0e02af;
    }
  }
  .bottom-words {
    display: flex;
    align-items: center;
    margin: 0 3vw;
    text {
      margin: 0 1vw;
      font-size: 4vw;
      color: #888888f9;
    }
  }
}
</style>
