<template>
  <div class="announcement-card-v1">
    <van-tag type="primary">标签</van-tag>
    <div class="title nowrap_ellipsis">
      我喜欢旧金山, 喜欢洛杉矶, 喜欢一号公路, 更喜欢你
    </div>
    <SvgIcon name="common-right"></SvgIcon>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.announcement-card-v1 {
  display: flex;
  align-items: center;
  .van-tag {
    padding: 3px;
  }
  .title {
    padding-left: 10px;
    font-size: 16px;
    font-weight: 530;
    flex: 1;
  }
}
</style>
