<template>
  <div class="publish-post">
    <van-nav-bar
      title="发图文"
      left-text="返回"
      right-text="发布"
      left-arrow
      @click-left="back"
      @click-right="comfirmPublishPost"
    />
    <van-cell-group>
      <van-field v-model="title" placeholder="标题" size="large" />
      <van-field
        v-model="content"
        rows="2"
        autosize
        type="textarea"
        maxlength="5000"
        placeholder="写点什么"
        show-word-limit
      />
    </van-cell-group>
    <div class="upload-image">
      <div class="label">上传封面</div>
      <van-uploader
        :after-read="uploadCoverImg"
        v-model="coverImgList"
        :max-count="1"
      />
      <div class="label">上传图片</div>
      <van-uploader :after-read="uploadEssayImg" v-model="essayImgList" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import { useRouter } from 'vue-router'
import { useUserStore, useCommunityStore } from '@/stores'
import { publishPost, userUpload } from '@/api'
// 确认框样式问题
import 'vant/es/toast/style'
import { showSuccessToast, showFailToast } from 'vant'

// 路由回退
const router = useRouter()
const back = () => {
  router.back()
}

// 文件上传
// 1. 文章封面
const coverImgList = ref([])
// 上传文件封面
const uploadCoverImg = async (file) => {
  file.status = 'uploading'
  file.message = '上传中...'

  const res = await userUpload(file, 'community/post/cover_img/')
  coverImgList.value[0].objectUrl = res.data

  file.status = 'done'
  file.message = '上传成功'
}
// 2. 文章图片
const essayImgList = ref([])
// 上传文章图片
const uploadEssayImg = async (file) => {
  file.status = 'uploading'
  file.message = '上传中...'

  const res = await userUpload(file, 'community/post/essay_img/')
  essayImgList.value[essayImgList.value.length - 1].objectUrl = res.data

  file.status = 'done'
  file.message = '上传成功'
}

// 发布帖子
const title = ref('')
const content = ref('')
const userStore = useUserStore()
const communityStore = useCommunityStore()
const publishPostDTO = ref({
  userId: userStore.userInfo.id,
  title: title.value,
  content: content.value,
  categoryId: communityStore.categoryId,
  columnId: undefined,
  name: userStore.userInfo.name,
  avatarUrl: userStore.userInfo.avatar,
})
const comfirmPublishPost = async () => {
  publishPostDTO.value.title = title.value
  publishPostDTO.value.content = content.value
  publishPostDTO.value.coverUrl = coverImgList.value[0].objectUrl
  publishPostDTO.value.imageUrlsD = essayImgList.value.map((item) => {
    return item.objectUrl
  })
  const res = await publishPost(publishPostDTO.value)
  if (res.code) {
    showSuccessToast('发帖成功！经验+5')
  } else {
    showFailToast('发帖失败！')
  }
}
</script>

<style lang="scss" scoped>
.upload-image {
  padding-left: 10px;
  min-height: 200px;
  background-color: #ffffff;
  .label {
    line-height: 50px;
    font-size: 16px;
    font-weight: 530;
  }
}
</style>
