<template>
  <div class="find-contingent">
    <van-nav-bar
      title="寻找队伍"
      left-text="返回"
      left-arrow
      @click-left="back"
      @click-right="goSearch"
    >
      <template #right>
        <van-icon name="search" size="18" />
      </template>
    </van-nav-bar>
    <van-search
      v-model="value"
      show-action
      placeholder="请输入搜索关键词"
      @search="onSearch"
    >
      <template #action>
        <div @click="onClickButton">搜索</div>
      </template>
    </van-search>
    <van-tabs v-model:active="type">
      <van-tab title="公开">
        <div class="open-list" v-if="teamList?.length > 0">
          <MatchCardV2
            v-for="item in teamList"
            :key="item.id"
            :item="item"
          ></MatchCardV2>
        </div>
        <van-empty v-if="teamList?.length < 1" description="数据为空" />
      </van-tab>
      <van-tab title="加密">
        <div class="secret-list" v-if="teamList?.length > 0"></div>
        <van-empty v-if="teamList?.length < 1" description="数据为空" />
      </van-tab>
    </van-tabs>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import { useRouter } from 'vue-router'
import { storeToRefs } from 'pinia'
import { useUserStore, useTeamStore } from '@/stores'

// 路由回退
const router = useRouter()
const back = () => {
  router.back()
}

// 跳转到搜索搭子页面
const goSearch = () => {
  router.push('/search/friend')
}

// 获取队伍列表
const type = ref(0)
const teamStore = useTeamStore()
const { teamList } = storeToRefs(teamStore)
teamStore.fetchTeamList({
  searchText: undefined,
  pageNum: 1,
  status: 0,
})
watch(type, (newValue) => {
  if (newValue === 0) {
    teamStore.fetchTeamList({
      searchText: undefined,
      pageNum: 1,
      status: 0,
    })
  }
  if (newValue === 1) {
    teamStore.fetchTeamList({
      searchText: undefined,
      pageNum: 1,
      status: 2,
    })
  }
})
</script>

<style lang="scss" scoped></style>
