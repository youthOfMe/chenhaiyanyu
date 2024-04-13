<template>
  <div class="code-navigation">
    <div class="my-story">
      <div class="content-title">
        <span class="main-title">我们的故事</span>
        <div class="more">
          <SvgIcon name="common-right"></SvgIcon>
        </div>
      </div>
      <div class="content">
        <OurStoryCard></OurStoryCard>
        <OurStoryCard></OurStoryCard>
        <OurStoryCard></OurStoryCard>
        <OurStoryCard></OurStoryCard>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.my-story {
  margin: 14px 9px 0;
  padding: 10px 10px 0;
  background-color: #ffffff;
  .content-title {
    display: flex;
    justify-content: space-between;
    .main-title {
      font-size: 18px;
      font-weight: 600;
      color: var(--third-color);
    }
    .more {
      display: flex;
      align-items: center;
    }
  }
  .content {
    display: flex;
    overflow-x: auto;
    margin-top: 8px;
    padding: 0 10px 20px;
    &::-webkit-scrollbar {
      display: none;
    }
    > div {
      margin-right: 10px;
    }
  }
}
</style>
