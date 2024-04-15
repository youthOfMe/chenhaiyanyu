<template>
  <div class="privateMsg">
    <div class="top-info">
      <div class="left-icon">
        <div class="back-icon">
          <svg-icon
            name="message-left"
            color="black"
            @click="goBack()"
          ></svg-icon>
        </div>
        <text>消息</text>
      </div>
      <div class="right-icon">
        <button>标为已读</button>
        <div class="search-icon">
          <svg-icon
            name="message-search"
            color="black"
            style="width: 28px; height: 28px"
            @click="goBack()"
          ></svg-icon>
        </div>
      </div>
    </div>
    <div class="chat-list">
      <div class="chat-item">
        <div class="left-content">
          <img
            class="avatar"
            :src="getAssetURL('privateMsg/avatar1.jpg')"
            alt=""
          />
        </div>
        <div class="userInfo">
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
      </div>
      <div class="chat-item">
        <div class="left-content">
          <img
            class="avatar"
            :src="getAssetURL('privateMsg/avatar1.jpg')"
            alt=""
          />
        </div>
        <div class="userInfo">
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
.privateMsg {
  display: flex;
  flex-direction: column;
  background-color: rgb(255 255 255);
}
.top-info {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  margin: 25px 0 10px;
  width: 100%;
  text {
    display: flex;
    align-items: center;
    width: 15vw;
    font-size: 22px;
    font-weight: 700;
    color: black;
  }
  .left-icon {
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    align-items: center;
    padding-left: 15px;
    width: 25vw;
    height: 8vw;
  }
  .right-icon {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 35vw;
    .search-icon {
      display: flex;
      align-items: center;
      width: 10vw;
      height: 10vw;
    }
  }
  button {
    margin-right: 1vw;
    width: 20vw;
    height: 32px;
    font-size: 12px;
    font-weight: 500;
    border-radius: 50px;
    outline: 0;
    border: solid rgba(0, 0, 0, 0.355) 1px;
    border-radius: 50px;
    background-color: rgb(255 255 255);
    color: #222222d1;
  }
}
.chat-list {
  display: flex;
  flex-direction: column;
  .chat-item {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-top: 7px;
    .left-content {
      display: flex;
      align-items: center;
      padding-left: 20px;
      margin-right: 10px;
      width: 17%;
      img {
        width: 60px;
        height: 60px;
        border-radius: 30px;
        background: no-repeat center;
      }
    }
    .userInfo {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      width: 77%;
      height: 100%;
      padding-bottom: 10px;
      border-bottom: #16161622 1px solid;
      .center-content {
        display: flex;
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
        padding-top: 14px;
        padding-right: 10px;
        flex-direction: column;
        font-size: 15px;
        height: 100%;
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
</style>
