<template>
  <div class="infos">
    <div class="name">{{ info.name }}</div>
    <!-- <div class="tags">
      <template v-for="(item, index) in topInfos.houseTags" :key="index">
        <span
          class="item"
          v-if="item.tagText"
          :style="{
            color: item.tagText.color,
            background: item.tagText.background.color,
          }"
        >
          {{ item.tagText.text }}
        </span>
      </template>
    </div> -->
    <div class="comment extra">
      <div class="left">
        <span class="score">5.0</span>
        <span class="title">超赞</span>
        <span class="brief">官方认证一流服务</span>
      </div>
      <div class="right">
        <div class="count">
          888条评论
          <van-icon name="arrow"></van-icon>
        </div>
      </div>
    </div>
    <div class="position extra">
      <div class="left address">济宁市曲阜市 辰海烟雨科技公司</div>
      <div class="right">地图·周边 ></div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  info: {
    type: Object,
    default: () => ({}),
  },
})
</script>

<style lang="less" scoped>
.infos {
  padding: 16px;
  background-color: #fff;

  .name {
    font-weight: 700;
    font-size: 20px;
    color: #333;
    text-align: justify;
    line-height: 24px;
    overflow: hidden;
    margin-bottom: 6px;
  }

  .tags {
    margin: 10px 0;

    .item {
      font-size: 12px;
      margin: 0 2px;
      padding: 1px 3px;
    }
  }

  .extra {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 8px 12px;
    margin: 12px 0;
    border-radius: 5px;
    font-size: 12px;
    background-color: #f5f7fa;

    .right {
      color: #ff9645;
    }
  }

  .comment {
    .score {
      font-size: 18px;
      font-weight: 700;
      color: #333;
    }

    .title {
      color: #333;
      font-weight: 700;
      margin: 0 3px;
    }

    .brief {
      color: #666;
    }
  }

  .position {
    .address {
      font-size: 14px;
      font-weight: 700;
      color: #333;
    }
  }
}
</style>
