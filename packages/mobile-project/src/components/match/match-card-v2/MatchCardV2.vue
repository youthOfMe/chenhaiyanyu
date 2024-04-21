<template>
  <div class="match-card-v2">
    <div class="head-img">
      <img :src="item?.createUser?.avatar ?? ''" alt="" />
    </div>
    <div class="content">
      <div class="name nowrap_ellipsis">{{ item?.name || '队伍名称' }}</div>
      <div class="desc">{{ item?.description || '队伍描述' }}</div>
      <div class="tag">
        <van-tag plain type="danger" v-if="item?.status === 0">公开</van-tag>
      </div>
      <div class="person-number">
        队伍人数: {{ item?.hasJoinNum }} / {{ item?.maxNum }}
      </div>
      <div class="create-time">创建时间: {{ item?.createTime }}</div>
      <div class="update-time">更新时间: {{ item?.updateTime }}</div>
    </div>
    <div class="operation">
      <van-button
        type="success"
        plain
        hairline
        size="small"
        @click="preJoinTeam(item)"
        v-if="item.userId !== userInfo?.id && !item.hasJoin"
      >
        加入队伍
      </van-button>
      <van-button
        v-if="item.userId === userInfo?.id"
        size="small"
        plain
        type="success"
      >
        更新队伍
      </van-button>
      <!-- 仅加入队伍可见 -->
      <van-button
        v-if="item.userId !== userInfo?.id && item.hasJoin"
        size="small"
        plain
        type="danger"
      >
        退出队伍
      </van-button>
      <van-button
        v-if="item.userId === userInfo?.id"
        size="small"
        type="danger"
        plain
      >
        解散队伍
      </van-button>
    </div>
    <van-dialog
      v-model:show="showPasswordDialog"
      title="请输入密码"
      show-cancel-button
      @confirm="doJoinTeam"
      @cancel="doJoinCancel"
    >
      <van-field v-model="password" placeholder="请输入密码" />
    </van-dialog>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { storeToRefs } from 'pinia'
import { showSuccessToast, showFailToast } from 'vant'
import { joinTeam } from '@/api'
import { useUserStore } from '@/stores'

defineProps({
  item: {
    type: Object,
    default: () => {},
  },
})

// 获取关于我的信息
const userStore = useUserStore()
const { userInfo } = storeToRefs(userStore)

// 加入队伍
const showPasswordDialog = ref(false)
const joinTeamId = ref(0)
const password = ref('')
const preJoinTeam = (team: any) => {
  joinTeamId.value = team.id
  if (team.status === 0) {
    doJoinTeam()
  } else {
    showPasswordDialog.value = true
  }
}
const doJoinCancel = () => {
  joinTeamId.value = 0
  password.value = ''
}

/**
 * 加入队伍
 */
const doJoinTeam = async () => {
  if (!joinTeamId.value) {
    return
  }
  const res = await joinTeam({
    teamId: joinTeamId.value,
    password: password.value,
  })
  if (res?.code === 1 && res?.data != null) {
    showSuccessToast('加入成功！')
    doJoinCancel()
  } else {
    showFailToast('加入失败！' + res.msg)
  }
}
</script>

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
