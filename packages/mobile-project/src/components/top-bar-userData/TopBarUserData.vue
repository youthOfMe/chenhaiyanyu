<template>
  <div class="TopBarUserData">
    <div class="top" v-if="!isHeadImgDisplay">
      <div class="left-icon">
        <div class="back-icon">
          <svg-icon name="message-left" color="black" @click="back"></svg-icon>
        </div>
      </div>

      <van-tabs
        v-model:active="tabActive"
        scrollspy
        background-color="rgb(255 255 255)"
        class="tabs"
        color="black"
        title-active-color="#6e737c"
        title-inactive-color="#000"
        style="width: 76%"
      >
        <van-tab
          v-for="(item, index) in tabBarData"
          :title="item.title"
          :key="index"
          :to="item.path"
        ></van-tab>
      </van-tabs>

      <div class="set-icon">
        <svg-icon
          name="person-set"
          style="width: 28px; height: 28px"
        ></svg-icon>
      </div>
    </div>
    <van-search v-model="value" placeholder="搜索用户备注或名字" />
    <text>
      我的粉丝
      <span>(734人)</span>
    </text>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

//输入框
const value = ref('')

const router = useRouter()
const back = () => {
  router.back()
}
const props = defineProps({
  themeColor: {
    type: String,
    default: '',
  },
  isHeadImgDisplay: {
    type: Boolean,
    default: true,
  },
  tabBarData: {
    type: Array,
    // eslint-disable-next-line vue/require-valid-default-prop
    default: [],
  },
  hallTabBarIndex: {
    type: Number,
    default: 0,
  },
})

// 控制tabs
const tabActive = ref(props.hallTabBarIndex)

const color = props.themeColor
const searchBarPLR = props.isHeadImgDisplay ? '0px' : '11px'
const messagePR = props.isHeadImgDisplay ? '0px' : '6px'
</script>

<style lang="scss" scoped>
.TopBarUserData {
  display: flex;
  flex-direction: column;
}
.top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  margin: 25px 0 10px;
  width: 100%;
  .left-icon {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding-left: 15px;
    padding-right: 20px;
    height: 8vw;
  }
  .set-icon {
    display: flex;
    align-items: center;
    width: 10vw;
    height: 10vw;
    margin-right: 2vw;
  }
}
text {
  color: #6e737c;
  margin-left: 3vw;
}
</style>
