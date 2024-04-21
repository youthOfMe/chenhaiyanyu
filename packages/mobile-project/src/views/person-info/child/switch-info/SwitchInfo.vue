<template>
  <div class="switch-head-img">
    <van-nav-bar
      title="更改头像"
      left-text="返回"
      left-arrow
      @click-left="back"
      @click-right="goSearch"
    />
  </div>
  <div class="content">
    <van-uploader
      :after-read="uploadHeadImg"
      v-model="headImgList"
      :max-count="1"
    />
  </div>
  <div class="bottom">
    <van-button type="primary" block round @click="sumbit">上传头像</van-button>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useUserStore } from '@/stores'
import { userUpload } from '@/api'
// 确认框样式问题
import 'vant/es/toast/style'
import { showSuccessToast, showFailToast } from 'vant'

// 路由回退
const router = useRouter()
const back = () => {
  router.back()
}

// 上传头像
// 1. 文章封面
const headImgList = ref([])
// 上传文件封面
const uploadHeadImg = async (file) => {
  file.status = 'uploading'
  file.message = '上传中...'

  const res = await userUpload(file, 'user/user-info/head-img')
  headImgList.value[0].objectUrl = res.data

  file.status = 'done'
  file.message = '上传成功'
}

// 提交修改用户信息
const userStore = useUserStore()
const sumbit = () => {
  try {
    userStore.fetchResetUserInfo({
      avatar: headImgList.value[0].objectUrl,
      type: 2,
    })
  } catch (error) {
    showFailToast('更改头像成功')
  }

  showSuccessToast('更改头像失败')
}
</script>

<style lang="scss" scoped>
.content {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 150px;
  background-color: #ffffff;
}
.bottom {
  padding: 0 9px 10px;
  background-color: #ffffff;
}
</style>
