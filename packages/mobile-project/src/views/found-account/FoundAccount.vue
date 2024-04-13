<template>
  <div class="retrieve-account">
    <div class="topContent">
      <div class="top-back">
        <svg-icon class="left-icon" name="login-back"></svg-icon>
      </div>
      <text>找回账号</text>
    </div>
    <div class="userinfo">
      <text>手机号/邮箱</text>
      <input type="text" />
      <text>验证码</text>
      <input type="text" />
    </div>
    <button>下一步</button>
    <div class="bottom-style">
      <div class="bottom-round">
        <div class="roundOne"></div>
        <div class="roundTwo"></div>
        <div class="roundTre"></div>
        <div class="roundFour"></div>
      </div>
      <div class="bottom-words">
        <text>登录</text>
        <text>|</text>
        <text>注册</text>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
.retrieve-account {
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
  background-color: rgb(254 103 15);
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
  margin-top: 35vw;
  text-align: left;
  flex-direction: column;
  text {
    font-size: 4vw;
    color: #888888b4;
    flex: 1;
  }

  /* 鼠标hover */
  input:hover {
    border-color: rgb(254 103 15);
  }

  /* 获得焦点 */
  input:focus {
    border-color: rgb(254 103 15);
  }
  input {
    margin: 0 0 5vw;
    width: 80vw;
    height: 13vw;
    font-size: 5vw;
    border: none;
    border-bottom: 2px solid #8888887d;
    color: black;
    background-color: transparent;
  }
}
button {
  position: absolute;
  top: 175vw;
  display: inline-block;
  align-items: center;
  width: 65vw;
  height: 13vw;
  font-size: 7vw;
  font-weight: 400;
  border: 1px solid transparent;
  color: #ffffff;
  background-color: rgb(254 103 15);
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
      color: #888888b7;
    }
  }
}
</style>
