<template>
  <div class="nav">
    <div class="item">
      <div class="icon fan-icon">
        <SvgIcon name="chat-nav-fan" width="35px" height="35px"></SvgIcon>
      </div>
      <div class="text">粉丝</div>
    </div>
    <div class="item">
      <div class="icon commit-icon">
        <SvgIcon name="chat-nav-commit" width="35px" height="35px"></SvgIcon>
      </div>
      <div class="text">评论</div>
    </div>
    <div class="item">
      <div class="icon aite-icon">
        <SvgIcon name="chat-nav-aite" width="35px" height="35px"></SvgIcon>
      </div>
      <div class="text">@我</div>
    </div>
    <div class="item">
      <div class="icon notify-icon">
        <SvgIcon name="chat-nav-notify" width="35px" height="35px"></SvgIcon>
      </div>
      <div class="text">通知</div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.nav {
  display: flex;
  background-color: #ffffff;
  .item {
    flex: 0 1 25%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 10px 0;
    .icon {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 60px;
      height: 60px;
      border-radius: 50%;
    }
    .fan-icon {
      background-color: #ff6a6a;
    }
    .commit-icon {
      background-color: #1e90ff;
    }
    .aite-icon {
      background-color: var(--primary-color);
    }
    .notify-icon {
      background-color: orange;
    }
    .text {
      margin-top: 15px;
    }
  }
}
</style>
