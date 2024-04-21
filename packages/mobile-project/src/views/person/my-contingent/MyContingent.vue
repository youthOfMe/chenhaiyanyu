<template>
  <div class="my-contingent">
    <van-nav-bar
      title="我的组队"
      left-text="返回"
      left-arrow
      @click-left="back"
    >
      <template #right>
        <van-icon name="search" size="18" />
      </template>
    </van-nav-bar>
    <div class="content">
      <van-tabs v-model:active="type">
        <van-tab title="我创建的">
          <div class="open-list" v-if="myTeamList?.length > 0">
            <MatchCardV2
              v-for="item in myTeamList"
              :key="item.id"
              :item="item"
            ></MatchCardV2>
          </div>
          <van-empty v-if="myTeamList?.length < 1" description="数据为空" />
        </van-tab>
        <van-tab title="我加入的">
          <div class="secret-list" v-if="myTeamList?.length > 0">
            <MatchCardV2
              v-for="item in myTeamList"
              :key="item.id"
              :item="item"
            ></MatchCardV2>
          </div>
          <van-empty v-if="myTeamList?.length < 1" description="数据为空" />
        </van-tab>
      </van-tabs>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
import { storeToRefs } from 'pinia'
import { useTeamStore } from '@/stores'

// 路由回退
const router = useRouter()
const back = () => {
  router.back()
}

// 获取我的组队的数据
const teamStore = useTeamStore()
const { myTeamList } = storeToRefs(teamStore)
teamStore.fetchMyTeamList({
  searchText: undefined,
  pageNum: 1,
})
</script>

<style lang="scss" scoped></style>
