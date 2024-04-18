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
        maxlength="50"
        placeholder="写点什么"
        show-word-limit
      />
    </van-cell-group>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import { useRouter } from 'vue-router'
import { useUserStore, useCommunityStore } from '@/stores'
import { publishPost } from '@/api'
// 确认框样式问题
import 'vant/es/toast/style'
import { showSuccessToast, showFailToast } from 'vant'

// 路由回退
const router = useRouter()
const back = () => {
  router.back()
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
  const res = await publishPost(publishPostDTO.value)
  if (res.code) {
    showSuccessToast('发帖成功！经验+5')
  } else {
    showFailToast('发帖失败！')
  }
}
</script>

<style lang="scss" scoped></style>
