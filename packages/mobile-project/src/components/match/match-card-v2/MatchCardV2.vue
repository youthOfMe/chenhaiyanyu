<template>
  <div class="match-card-v2">
    <div class="head-img">
      <img :src="item?.avatar ?? ''" alt="" />
    </div>
    <div class="content">
      <div class="name nowrap_ellipsis">队伍名称</div>
      <div class="desc">队伍描述</div>
      <div class="tag"><van-tag plain type="danger">标签</van-tag></div>
      <div class="person-number">队伍人数: 2 / 4</div>
      <div class="create-time">创建时间</div>
      <div class="update-time">更新时间</div>
    </div>
    <div class="operation">
      <van-button type="success" plain hairline size="small">
        加入队伍
      </van-button>
      <van-button type="danger" plain hairline size="small">
        解散队伍
      </van-button>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.match-card-v2 {
  display: flex;
  margin-top: 5px;
  padding: 10px 9px;
  background-color: #ffffff;
  .head-img {
    width: 100px;
    height: 100px;
    img {
      width: 100px;
      height: 100px;
      border-radius: 5px;
    }
  }
  .content {
    flex: 1;
    overflow: hidden;
    padding: 0 5px;
    .name {
      font-size: 16px;
      font-weight: 550;
      color: var(--primary-color);
    }
    .desc {
      margin-top: 5px;
      color: #aaaaaa;
    }
    .tag {
      margin-top: 2px;
    }
    .person-number {
      margin-top: 2px;
      font-size: 12px;
    }
    .create-time {
      margin-top: 2px;
      font-size: 12px;
    }
    .update-time {
      margin-top: 2px;
      font-size: 12px;
    }
  }
  .operation {
    display: flex;
    flex-direction: column;
    .van-button {
      margin-bottom: 5px;
    }
  }
}
</style>
