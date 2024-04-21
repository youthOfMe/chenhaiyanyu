<template>
  <div class="person-info">
    <div class="person-bg">
      <img :src="userInfo.backgroundUrl" alt="" />
    </div>
    <TopBar></TopBar>
    <div class="content">
      <div class="base-info">
        <div class="head" @click="showList = true">
          <img :src="userInfo.avatar" alt="" />
        </div>
        <div class="edit" @click="toeditPersonInfo">编辑资料</div>
        <div class="name">
          <span>{{ userInfo.name }}</span>
          <SvgIcon
            name="personinfo-edit"
            width="25px"
            height="25px"
            class="icon"
            @click="showResetBlock"
          ></SvgIcon>
          <SvgIcon
            name="personinfo-boy"
            width="20px"
            height="20px"
            class="icon"
            v-if="userInfo.sex"
          ></SvgIcon>
          <SvgIcon
            name="personinfo-girl"
            width="20px"
            height="20px"
            class="icon"
            v-if="!userInfo.sex"
          ></SvgIcon>
        </div>
        <div class="data-info">
          <div class="item">
            <div class="data">0</div>
            <div class="text">获赞和收藏</div>
          </div>
          <div class="item">
            <div class="data">0</div>
            <div class="text">粉丝</div>
          </div>
          <div class="item">
            <div class="data">0</div>
            <div class="text">关注</div>
          </div>
          <div class="item">
            <div class="data">0</div>
            <div class="text">动态</div>
          </div>
        </div>
        <div class="signature">{{ userInfo.signature }}</div>
        <div class="ip-time">
          <div class="ip item">IP属地: 山东省</div>
          <div class="time item">加入辰海烟雨520天</div>
        </div>
      </div>
      <van-tabs v-model:active="active" class="tab">
        <van-tab title="动态">
          <div class="list">
            <PostBlock
              v-for="item in postList"
              :key="item.id"
              :postItem="item"
            ></PostBlock>
          </div>
        </van-tab>
        <van-tab title="视频">内容 2</van-tab>
        <van-tab title="收藏">内容 3</van-tab>
        <van-tab title="赞过">内容 4</van-tab>
        <van-tab title="私密">内容 4</van-tab>
      </van-tabs>
    </div>
    <van-dialog
      v-model:show="showResetName"
      title="标题"
      show-cancel-button
      @confirm="submitResetUserName"
    >
      <van-cell-group inset>
        <van-field
          v-model="nameInput"
          label="昵称"
          label-width="10vw"
          placeholder="请输入昵称"
          label-class="user-name"
        />
      </van-cell-group>
    </van-dialog>
    <van-popup
      v-model:show="showList"
      round
      position="bottom"
      style="padding-top: 4px; height: 40%"
    >
      <van-cell-group :columns="columns">
        <van-cell
          style="font-size: 14px; color: rgb(0 0 0 / 50%) !important"
          title="设置你的头像"
        />
        <van-cell title="从微信导入" />
        <van-cell title="从QQ导入" />
        <van-cell title="从手机相册中选择" @click="goUpdateHeadImg" />
        <van-cell
          style="position: absolute; margin-top: 30px"
          title="取消"
          @click="onCancel"
        />
      </van-cell-group>
    </van-popup>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, watch } from 'vue'
import { useRouter, use } from 'vue-router'
import { storeToRefs } from 'pinia'
import { useUserStore, useCommunityStore } from '@/stores'
import { getAssetURL } from '@/utils/LoadAssetsImg.js'
import TopBar from './cpns/top-bar/TopBar.vue'
// vant提示框样式问题处理
import 'vant/es/dialog/style'
import 'vant/es/toast/style'
import { showFailToast } from 'vant'

const router = useRouter()
const toeditPersonInfo = () => {
  router.push('/editPersonInfo')
}

// 获取用户数据
const userStore = useUserStore()
const { userInfo } = storeToRefs(userStore)

// 设置用户昵称
const showResetName = ref(false)
const nameInput = ref(userInfo.value.name)
const showResetBlock = () => {
  showResetName.value = true
}
const submitResetUserName = () => {
  if (!nameInput.value) {
    showFailToast('用户昵称不可为空')
    return
  }
  userStore.fetchResetUserInfo({ name: nameInput.value, type: 1 })
  showResetName.value = false
}

// 设置用户头像
const column = [
  { text: '从微信导入', value: 'weixin' },
  { text: '从QQ导入', value: 'qq' },
  { text: '从手机相册选择', value: 'photoAlbum' },
]
const columns = ref([column])
const showList = ref(false)

const onConfirm = (index) => {
  // console.log(index)
  // showList.value = false
}
const onCancel = (index) => {
  showList.value = false
}
// 更换头像
const goUpdateHeadImg = () => {
  router.push('/switch/headImg')
}

// 获取个人帖子列表
const communityStore = useCommunityStore()
const { postList } = storeToRefs(communityStore)
communityStore.fetchPostListById(undefined, undefined, userInfo.id)
</script>

<style lang="scss" scoped>
.person-info {
  position: relative;
  overflow-y: auto;
  height: 100vh;
}
.person-bg {
  position: absolute;
  right: 0;
  left: 0;
  z-index: -1;
  height: 220px;
  img {
    width: 100%;
    height: 100%;
  }
}
.content {
  position: relative;
  margin-top: 160px;
  padding: 70px 15px 0;
  min-height: calc(100vh - 270px);
  border-radius: 15px 15px 0 0;
  background-color: #ffffff;
  .base-info {
    .head {
      position: absolute;
      top: -50px;
      left: 20px;
      img {
        width: 100px;
        height: 100px;
        border-radius: 50%;
      }
    }
    .edit {
      position: absolute;
      top: 15px;
      right: 20px;
      width: 100px;
      height: 30px;
      box-sizing: border-box;
      border: 1px solid #dddddd;
      text-align: center;
      line-height: 30px;
    }
    .name {
      display: flex;
      align-items: center;
      font-size: 18px;
      font-weight: 600;
      .icon {
        margin-left: 5px;
      }
    }
    .data-info {
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
  .signature {
    margin-top: 5px;
    font-size: 14px;
    color: var(--second-color);
  }
  .ip-time {
    display: flex;
    margin-top: 15px;
    .item {
      margin-right: 5px;
      padding: 5px;
      font-size: 10px;
      color: #aaaaaab6;
      background-color: #eeeeee;
    }
  }
  .tab {
    margin-top: 15px;
  }
}
.van-cell {
  position: relative;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 15vw;
  font-size: 20px;
  text-align: center;
  color: black !important;
}
.user-name {
  font-size: 12px !important;
}
#van-field-7-label {
  font-size: 12px !important;
}
</style>
