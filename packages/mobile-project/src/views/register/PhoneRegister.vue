<template>
  <div class="register">
    <div class="topContent">
      <div class="top-back">
        <svg-icon
          class="left-icon"
          name="login-back"
          @click="goBack()"
        ></svg-icon>
      </div>
      <text>欢迎新用户</text>
    </div>
    <div class="userinfo">
      <van-form autocomplete="off" @submit="onSubmit">
        <text>手机号</text>
        <van-field type="tel" v-model="mobile" :rules="mobileRules" />
        <text>验证码</text>
        <div class="verCode">
          <van-field style="width: 63%" v-model="verCode" type="tel" />
          <van-button style="margin-left: 25px" @click="getVerCode">
            获取验证码
          </van-button>
          <van-notify v-model:show="show" type="warning">
            <van-icon name="warning-o" style="margin-right: 4px" />
            <span>请先填写手机号</span>
          </van-notify>
        </div>
        <div class="cp-cell">
          <van-button type="primary" native-type="submit">注 册</van-button>
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
      <router-link to="/login" replace>
        <div class="bottom-words">
          <text>已 有 账 号</text>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useRouter } from 'vue-router'
import { ref } from 'vue'
import { mobileRules, usernameRules } from '@/utils/Rules.ts'
import { useUserStore } from '@/stores'

const mobile = ref('')
const verCode = ref('')
//消息提示
const show = ref(false)
const router = useRouter()
let goBack = () => {
  router.replace('/register')
}

// 手机号登录
const userStore = useUserStore()
const getVerCode = () => {
  if (mobile.value === '') {
    console.log('输入不能为空')
    show.value = true
    setTimeout(() => {
      show.value = false
    }, 2000)
  } else {
    console.log('输入有效')
  }
}

const onSubmit = async () => {
  await userStore.fetchLogin({
    phone: mobile.value,
    verCode: verCode.value,
    type: 2,
  })
  router.replace('/')
}
</script>

<style lang="scss" scoped>
.register {
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
  background-color: rgb(18 205 127 / 97.8%);
  text {
    position: absolute;
    top: 22vw;
    left: 11vw;
    font-size: 12vw;
    color: white;
  }
  .left-icon {
    margin: 10px;
    width: 8vw;
    height: 8vw;
  }
}
.userinfo {
  display: flex;
  margin-top: 30vw;
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
  background-color: rgb(18 205 127 / 97.8%) !important;
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
      margin: 1vw;
      font-size: 4vw;
      color: #888888f9;
    }
  }
}
</style>
