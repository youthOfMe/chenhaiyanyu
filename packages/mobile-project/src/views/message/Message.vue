<template>
  <div class="message">
    <div class="top-info">
      <svg-icon
        class="left-icon"
        name="message-left"
        color="black"
        width="35px"
        height="35px"
        @click="goBack()"
      ></svg-icon>
      <text>通知</text>
      <div class="right-icon">
        <svg-icon
          class="icon"
          name="message-message-read"
          color="black"
          width="45px"
          height="45px"
        ></svg-icon>
        <svg-icon
          class="icon"
          name="message-delete"
          color="black"
          width="45px"
          height="45px"
        ></svg-icon>
      </div>
    </div>
    <hr width="100%" size="20" />
    <div class="message-list">
      <div class="every-item">
        <div class="dynamic-icon">
          <svg-icon
            name="message-dynamic"
            color="black"
            width="45px"
            height="45px"
          ></svg-icon>
        </div>
        <text class="text">@我的动态</text>
        <div class="arrow-icon">
          <svg-icon
            name="message-arrow"
            color="black"
            width="30px"
            height="30px"
          ></svg-icon>
        </div>
      </div>

      <div class="every-item">
        <div class="comment-icon">
          <svg-icon
            name="message-comment"
            color="black"
            width="45px"
            height="45px"
          ></svg-icon>
        </div>
        <text class="text">@我的评论</text>
        <div class="arrow-icon">
          <svg-icon
            name="message-arrow"
            color="black"
            width="30px"
            height="30px"
          ></svg-icon>
        </div>
      </div>

      <div class="every-item">
        <div class="like-icon">
          <svg-icon
            name="message-like"
            color="black"
            width="45px"
            height="45px"
          ></svg-icon>
        </div>
        <text class="text">我收到的赞</text>
        <div class="arrow-icon">
          <svg-icon
            name="message-arrow"
            color="black"
            width="30px"
            height="30px"
          ></svg-icon>
        </div>
      </div>

      <div class="every-item">
        <div class="follow-icon">
          <svg-icon
            name="message-follow"
            color="black"
            width="45px"
            height="45px"
          ></svg-icon>
        </div>
        <text class="text">好友关注</text>
        <div class="arrow-icon">
          <svg-icon
            name="message-arrow"
            color="black"
            width="30px"
            height="30px"
          ></svg-icon>
        </div>
      </div>
      <router-link to="/privateMsg">
        <div class="every-item">
          <div class="personalMsg-icon">
            <svg-icon
              name="message-personalMsg"
              color="black"
              width="45px"
              height="45px"
            ></svg-icon>
          </div>
          <text class="text">私信</text>
          <div class="arrow-icon">
            <svg-icon
              name="message-arrow"
              color="black"
              width="30px"
              height="30px"
            ></svg-icon>
          </div>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useRouter } from 'vue-router'
const router = useRouter()

let goBack = () => {
  router.go(-1)
}
</script>

<style lang="scss" scoped>
.message {
  display: flex;
  flex-direction: column;
}
.top-info {
  display: flex;
  flex-direction: row;
  margin: 15px 0 10px;
  text {
    display: flex;
    align-items: center;
    margin-left: 20px;
    width: 100px;
    font-size: 20px;
    font-weight: 700;
    color: #6b7280;
  }
  .left-icon {
    margin-left: 10px;
    width: 40px;
    height: 40px;
  }
  .right-icon {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    margin-right: 10px;
    width: 100%;
    flex-direction: row;
    .icon {
      margin-left: 20px;
      width: 25px;
      height: 25px;
    }
  }
}
hr {
  border: none;
  border-top: 1px solid #cccccc;
}
.every-item {
  display: flex;
  flex-direction: row;
  padding: 10px;
  &:active {
    color: white;
    background-color: #cccccc;
  }
}
.arrow-icon {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
}
.text {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-left: 12px;
  width: 150px;
  font-size: 17px;
  font-weight: 500;
}
</style>
