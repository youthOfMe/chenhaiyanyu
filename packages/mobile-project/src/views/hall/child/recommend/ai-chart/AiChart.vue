<template>
  <div class="ai-chart">
    <van-nav-bar
      title="智能AI"
      left-text="返回"
      left-arrow
      @click-left="back"
    ></van-nav-bar>
    <div class="content">
      <ChatMessage
        :person="item.person"
        :item="item"
        v-for="item in messageList"
        :key="item.message"
      ></ChatMessage>
    </div>
    <div class="chat-operation">
      <van-search
        v-model="message"
        shape="round"
        placeholder="请输入搜索关键词"
      />
      <div class="button" @click="sendMessage">发送</div>
    </div>
  </div>
  <van-overlay :show="isLoading">
    <div class="wrapper" @click.stop>
      <van-loading color="var(--primary-color)" />
    </div>
  </van-overlay>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { storeToRefs } from 'pinia'
import { useUserStore } from '@/stores'
import { showFailToast, showSuccessToast } from 'vant'
// vant提示框样式问题处理
import 'vant/es/toast/style'
import { getAiChat } from '@/api'
import ChatMessage from './cpns/chat-message/ChatMessage.vue'

// 路由回退
const router = useRouter()
const back = () => {
  router.back()
}

// 获取用户信息
const userStore = useUserStore()
const { userInfo } = storeToRefs(userStore)

// 发送消息
const message = ref('')

// 消息列表
const messageList = ref([])

// 控制加载
const isLoading = ref(false)

// 发送消息
const sendMessage = async () => {
  isLoading.value = true
  let date = new Date()
  const hours = date.getHours()
  const minutes = date.getMinutes()
  const seconds = date.getSeconds()
  messageList.value.push({
    person: 'me',
    message: message.value,
    time: hours + ':' + minutes + ':' + seconds,
    userInfo,
  })
  const res = await getAiChat(message.value)
  if (res.code === 1) {
    isLoading.value = false
    date = new Date()
    messageList.value.push({
      person: 'ai',
      message: res.data,
      time: hours + ':' + minutes + ':' + seconds,
    })
  } else {
    isLoading.value = false
    showFailToast('获取AI聊天失败')
  }
}
</script>

<style lang="scss" scoped>
.ai-chart {
  position: relative;
  .content {
    overflow-y: auto;
    height: calc(100vh - 46px - 50px);
    background-color: #ffffff;
  }
  .chat-operation {
    position: fixed;
    right: 0;
    bottom: 0;
    left: 0;
    display: flex;
    height: 50px;
    .van-search {
      flex: 1;
    }
    .button {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 50px;
      color: var(--primary-color);
      background-color: #ffffff;
    }
  }
}
.wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
}
</style>
