<template>
  <div class="privateMsg">
    <div class="top-info">
      <div class="left-icon">
        <svg-icon
          name="message-left"
          color="black"
          width="28px"
          height="28px"
          @click="goBack()"
        ></svg-icon>
      </div>
      <text>我的消息</text>
      <button>标为已读</button>
    </div>
    <hr width="100%" size="20" />
    <div class="chat-list">
      <div class="chat-item">
        <div class="left-content">
          <img
            class="avatar"
            :src="getAssetURL('privateMsg/avatar1.jpg')"
            alt=""
          />
        </div>
        <div></div>
        <div class="center-content">
          <div class="name">哈哈哈</div>
          <div style="width: 250px; height: 20px">
            <p>
              11111111111111111111111111111111111111111111111111111111111111
            </p>
          </div>
        </div>
        <div class="right-content">
          <div class="time">15:49</div>
          <div class="msg-prompt"><p>67</p></div>
        </div>
      </div>
      <hr />
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
.privateMsg {
  display: flex;
  flex-direction: column;
}
.top-info {
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  margin: 25px 0 10px;
  text {
    display: flex;
    justify-content: center;
    align-items: center;
    padding-left: 30px;
    width: 100px;
    font-size: 20px;
    font-weight: 700;
    color: #6b7280;
  }
  .left-icon {
    display: flex;
    align-items: center;
    padding-left: 15px;
    width: 35px;
    height: 35px;
  }
  button {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    margin-right: 10px;
    padding: 0 16px;
    width: 80px;
    height: 32px;
    font-size: 12px;
    font-weight: 500;
    border: none;
    border-radius: 50px;
    color: white;
    background-color: #43c9a1;
    outline: 0;
    cursor: pointer;
    :hover {
      background-color: #2222221a;
    }
  }
}
.chat-list {
  display: flex;
  flex-direction: column;
  .chat-item {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    .left-content {
      display: flex;
      align-items: center;
      padding: 0 8px;
      width: 17%;
      img {
        width: 60px;
        height: 60px;
        border-radius: 30px;
        background: no-repeat center;
        background-size: 60px;
      }
    }
    .center-content {
      justify-content: space-between;
      align-items: center;
      padding: 0 10px;
      width: 100%;
      font-size: 20px;
      .name {
        padding-top: 10px;
        font-size: 23px;
        font-weight: 500;
      }
      p {
        overflow: hidden;
        margin: 0;
        text-overflow: ellipsis;
        white-space: nowrap;
        color: #8f8f8f;
      }
    }
    .right-content {
      display: flex;
      align-items: center;
      padding-top: 14px;
      padding-right: 5px;
      flex-direction: column;
      font-size: 15px;
      .msg-prompt {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 6px;
        width: auto;
        min-width: 22px;
        height: auto;
        min-height: 22px;
        border-radius: 100%;
        background-color: red;
        p {
          overflow: hidden;
          margin: 1px;
          text-overflow: ellipsis;
          white-space: nowrap;
          color: white;
        }
      }
    }
  }
  hr {
    position: fixed;
    top: 19%;
    right: 0;
    width: 81%;
    border: none;
    border-top: 1px solid #cccccc;
  }
}
hr {
  border: none;
  border-top: 1px solid #cccccc;
}
</style>
@/api/message/privateMsg
