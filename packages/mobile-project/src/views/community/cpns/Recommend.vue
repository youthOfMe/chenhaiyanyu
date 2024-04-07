<template>
  <div class="recommend">
    <div class="recommend">
      <div class="title">推荐</div>
      <div class="item">
        <span>官方交流群</span>
      </div>
      <div class="item">
        <span>官方交流群</span>
      </div>
      <div class="item">
        <span>官方交流群</span>
      </div>
      <div class="item">
        <span>哈哈</span>
      </div>
      <div class="item">
        <span>官方交流群</span>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.recommend {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  .title {
    margin-right: 14px;
    padding-left: 8px;
    width: 53px;
    height: 40px;
    text-align: center;
  }
}
.item {
  margin-right: 14px;
  padding: 6px;
  height: 30px;
  font-size: 13px;
  border-radius: 7px;
  color: var(--second-color);
  background-color: #ffffff;
  box-sizing: border-box;
  span {
    vertical-align: middle;
    height: 13px;
    line-height: 13px;
  }
}
</style>
