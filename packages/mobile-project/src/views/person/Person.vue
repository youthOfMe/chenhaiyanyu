<template>
  <div class="person">
    <TabBar></TabBar>
    <PersonInfo :userInfo="userInfo"></PersonInfo>
    <div class="grade-info">
      <div class="info-title">更多功能</div>
      <div class="info-content">
        <div class="item">
          <van-circle
            v-model:current-rate="currentRate"
            :rate="30"
            :speed="100"
            text="购物车"
            :color="gradientColor"
          />
        </div>
        <div class="item">
          <van-circle
            v-model:current-rate="currentRate"
            :rate="30"
            :speed="100"
            text="社区等级"
            :color="gradientColor"
          />
        </div>
        <div class="item">
          <van-circle
            v-model:current-rate="currentRate"
            :rate="30"
            :speed="100"
            text="交易等级"
            :color="gradientColor"
          />
        </div>
        <div class="item">
          <van-circle
            v-model:current-rate="currentRate"
            :rate="30"
            :speed="100"
            text="学习等级"
            :color="gradientColor"
          />
        </div>
      </div>
    </div>

    <PurseInfo :userInfo="userInfo"></PurseInfo>

    <OrderInfo></OrderInfo>
    <div class="trade-info">
      <div class="info-title">交易信息</div>
      <div class="info-content">
        <div class="item">
          <div class="data">0</div>
          <div class="text">我发布的</div>
        </div>
        <div class="item">
          <div class="data">0</div>
          <div class="text">我卖出的</div>
        </div>
        <div class="item">
          <div class="data">0</div>
          <div class="text">交易成功</div>
        </div>
        <div class="item">
          <div class="data">0</div>
          <div class="text">我买入的</div>
        </div>
      </div>
    </div>

    <div class="community-info">
      <div class="info-title">社区信息</div>
      <div class="info-content">
        <div class="item">
          <div class="data">0</div>
          <div class="text">我发布的</div>
        </div>
        <div class="item">
          <div class="data">0</div>
          <div class="text">我卖出的</div>
        </div>
        <div class="item">
          <div class="data">0</div>
          <div class="text">交易成功</div>
        </div>
        <div class="item">
          <div class="data">0</div>
          <div class="text">我买入的</div>
        </div>
      </div>
    </div>

    <div class="list">
      <PostBlock
        v-for="item in postList"
        :key="item.id"
        :postItem="item"
      ></PostBlock>
    </div>
    <div class="block"></div>
  </div>
</template>

<script setup>
import { storeToRefs } from 'pinia'
import { useUserStore, useCommunityStore } from '@/stores'
import TabBar from './cpns/TabBar.vue'
import PersonInfo from './cpns/PersonInfo.vue'
import PurseInfo from './cpns/PurseInfo.vue'
import OrderInfo from './cpns/OrderInfo.vue'

const currentRate = 100
const gradientColor = {
  '0%': '#3fecff',
  '100%': '#6149f6',
}

// 获取用户信息数据
const userStore = useUserStore()
userStore.fetchUserInfo()
const { userInfo } = storeToRefs(userStore)

// 获取推荐帖子列表
const communityStore = useCommunityStore()
const { postList } = storeToRefs(communityStore)
communityStore.fetchPostListById(undefined, undefined, userInfo.id)
</script>

<style lang="scss" scoped>
.person {
  position: relative;
  overflow-y: auto;
  height: calc(100vh - 50px);
}
.grade-info {
  margin-top: 15px;
  padding: 15px 9px;
  background-color: #ffffff;
  .info-title {
    font-size: 18px;
    font-weight: 600;
    color: var(--third-color);
  }
  .info-content {
    display: flex;
    margin-top: 15px;
    .item {
      flex: 1;
    }
  }
}
.trade-info {
  padding: 15px 9px;
  background-color: #ffffff;
  .info-title {
    font-size: 18px;
    font-weight: 600;
    color: var(--third-color);
  }
  .info-content {
    display: flex;
    height: 68px;
    .item {
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: center;
      text-align: center;
      .data {
        font-size: 18px;
        font-weight: 600;
        line-height: 26px;
      }
      .text {
        font-size: 12px;
        color: var(--second-color);
      }
    }
  }
}
.community-info {
  margin-top: 15px;
  padding: 15px 9px;
  background-color: #ffffff;
  .info-title {
    font-size: 18px;
    font-weight: 600;
    color: var(--third-color);
  }
  .info-content {
    display: flex;
    height: 68px;
    .item {
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: center;
      text-align: center;
      .data {
        font-size: 18px;
        font-weight: 600;
        line-height: 26px;
      }
      .text {
        font-size: 12px;
        color: var(--second-color);
      }
    }
  }
}
.block {
  height: 20px;
}
</style>
