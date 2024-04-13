<template>
  <div class="tab-bar">
    <div class="left">
      <SvgIcon name="person-scancode" width="20px" height="20px"></SvgIcon>
    </div>
    <div class="right">
      <SvgIcon name="person-set" width="20px" height="20px"></SvgIcon>
      <SvgIcon name="person-message" width="20px" height="20px"></SvgIcon>
    </div>
  </div>
</template>

<script setup>
import SvgIcon from '@/components/svg-icon/SvgIcon.vue'
</script>

<style lang="less" scoped>
.tab-bar {
  display: flex;
  padding: 14px 9px 0;
  background-color: #fff;
  .left {
    flex: 1;
  }
  .right {
    display: flex;
    justify-content: space-between;
    width: 50px;
  }
}
</style>
