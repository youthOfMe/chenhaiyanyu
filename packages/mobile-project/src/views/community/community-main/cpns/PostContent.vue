<template>
  <div class="post-content">
    <div class="nav">
      <div class="item" @click="goPulishPost">
        <div class="icon fan-icon">
          <SvgIcon
            name="community-main-nav-signIn"
            width="25px"
            height="25px"
          ></SvgIcon>
        </div>
        <div class="text">图文</div>
      </div>
      <div class="item">
        <div class="icon commit-icon">
          <SvgIcon
            name="community-main-nav-hot"
            width="25px"
            height="25px"
          ></SvgIcon>
        </div>
        <div class="text">热点</div>
      </div>
      <div class="item">
        <div class="icon aite-icon">
          <SvgIcon
            name="community-main-nav-perimeter"
            width="25px"
            height="25px"
          ></SvgIcon>
        </div>
        <div class="text">周边</div>
      </div>
      <div class="item">
        <div class="icon party-icon">
          <SvgIcon
            name="community-main-nav-party"
            width="25px"
            height="25px"
          ></SvgIcon>
        </div>
        <div class="text">聚会</div>
      </div>
      <div class="item">
        <div class="icon notify-icon">
          <SvgIcon
            name="socail-chat-nav-notify"
            width="25px"
            height="25px"
          ></SvgIcon>
        </div>
        <div class="text">消息</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'

// 路由跳转
const router = useRouter()
const goPulishPost = () => {
  router.push('/publishPost')
}
</script>

<style lang="scss" scoped>
.post-content {
  .nav {
    display: flex;
    background-color: #ffffff;
    .item {
      flex: 0 1 20%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding: 10px 0;
      .icon {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 45px;
        height: 45px;
        border-radius: 50%;
      }
      .fan-icon {
        background-color: #1e90ff;
      }
      .commit-icon {
        background-color: #ff6a6a;
      }
      .aite-icon {
        background-color: var(--primary-color);
      }
      .party-icon {
        background-color: #8a2be2;
      }
      .notify-icon {
        background-color: orange;
      }
      .text {
        margin-top: 5px;
      }
    }
  }
}
</style>
