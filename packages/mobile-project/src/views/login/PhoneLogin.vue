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
        <van-field v-model="mobile" :rules="mobileRules" />
        <text>验证码</text>
        <div class="verCode">
          <van-field
            style="width: 63%"
            v-model="verCode"
            :rules="verCodeRules"
            type="tel"
          />
          <van-button
            style="margin-left: 25px"
            @click="getVerCode"
            :loading="isLoading"
          >
            获取验证码
          </van-button>
        </div>
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
        <router-link to="/register" replace>
          <text>注册</text>
        </router-link>
        <text>|</text>
        <router-link to="/foundAccount" replace>
          <text>找回</text>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useRouter } from 'vue-router'
import { ref } from 'vue'
import { mobileRules, verCodeRules } from '@/utils/Rules.ts'
import { useUserStore } from '@/stores'
// vant提示框样式问题处理
import 'vant/es/dialog/style'
import { showSuccessToast, showFailToast } from 'vant'
import { getVeriCode } from '@/api'

const mobile = ref('')
const verCode = ref('')

const router = useRouter()
let goBack = () => {
  router.replace('/login')
}

// 手机号登录
const isLoading = ref(false)
const userStore = useUserStore()

const getVerCode = async () => {
  isLoading.value = true
  if (mobile.value === '') {
    showFailToast('请先填写手机号')
  } else {
    const res = await getVeriCode(mobile.value)
    if (res.msg != null) {
      showFailToast(res.msg)
    }
    showSuccessToast('获取验证码成功')
  }
}
const onSubmit = async () => {
  if (mobile.value === '' || verCode.value === '') {
    showFailToast('手机号和验证码不许为空')
  }
  try {
    await userStore.fetchLogin({
      phone: mobile.value,
      code: verCode.value,
      type: 2,
    })
    showSuccessToast('登录成功')
    router.replace('/')
  } catch (error) {
    showFailToast('登录失败')
  }
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
.verCode {
  display: flex;
  flex-direction: row;
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
