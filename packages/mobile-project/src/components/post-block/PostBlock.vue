<template>
  <div class="post-block" @click="goPostDetail">
    <div class="head">
      <img
        :src="postItem?.avatar || postItem?.avatarUrl"
        alt=""
        class="head-img"
      />
      <div class="info">
        <div class="name nowrap_ellipsis">{{ postItem?.name }}</div>
        <div class="other nowrap_ellipsis">
          来自辰海烟雨超级牛逼无敌推荐系统推荐的
        </div>
      </div>
      <div class="operator">
        <SvgIcon name="postblock-down"></SvgIcon>
      </div>
    </div>
    <div class="body">
      <div class="title">{{ postItem?.title }}</div>
      <div class="img" v-if="imgCount > 0">
        <div class="one-img" v-if="imgCount == 1">
          <img :src="imgList[0]" alt="" />
        </div>
        <div class="list" v-if="imgCount > 1">
          <img
            :src="item"
            alt=""
            v-for="item in imgList?.slice(0, 3)"
            :key="item"
          />
          <img
            :src="getAssetURL('home/home-bg.jpg')"
            alt=""
            v-if="imgCount === 2"
          />
          <div class="img-count">
            {{ imgCount > 9 ? 9 + '+' : imgCount }}
          </div>
        </div>
      </div>
      <div class="content">
        {{ postItem?.content }}
        <!-- 简单的说，“ 自动卓 ” 是一个脚本工具，在 App
        里定好时间或者设置好通知触发后，就可以让我们的手机自动运行事先录制好的动作。
        像某些 App
        签到、钉钉自动打卡、支付宝收集绿色能量、领取积分什么的，对它来说都是小意思啦，到点自动运行简直不要太爽。 -->
      </div>
    </div>
    <div class="bottom">
      <div class="item thumb">
        <SvgIcon name="postblock-thumb" width="15px" height="15px"></SvgIcon>
        <span>{{ postItem?.thumbNumber || postItem?.thumb }}</span>
      </div>
      <div class="item commit">
        <SvgIcon name="postblock-commit" width="15px" height="15px"></SvgIcon>
        <span>{{ postItem?.collectionNumber || postItem?.commit }}</span>
      </div>
      <div class="item share">
        <SvgIcon name="postblock-share" width="15px" height="15px"></SvgIcon>
        <span>{{ postItem?.share || 999 }}</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, watch, computed } from 'vue'
import { useRouter } from 'vue-router'
import SvgIcon from '../svg-icon/SvgIcon.vue'
import { getAssetURL } from '@/utils/LoadAssetsImg.js'

const props = defineProps({
  postItem: {
    type: Object,
    default: () => {},
  },
})
// eslint-disable-next-line vue/no-dupe-keys
const postItem = ref(props?.postItem)
const imgList = ref([])
imgList.value.push(postItem.value?.coverUrl)
imgList.value.push(...(postItem.value?.imgUrlList || []))
const imgCount = computed(() => imgList.value.length)

// 跳转路由到帖子详情页
const router = useRouter()
const goPostDetail = () => {
  router.push('/postDetail')
}
</script>

<style lang="scss" scoped>
.post-block {
  margin-top: 10px;
  padding: 15px 10px 0;
  border-radius: 12px;
  background-color: #ffffff;
}
.head {
  display: flex;
  .head-img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: rgb(245 245 245 / 100%);
  }
  .info {
    flex: 1;
    padding: 0 15px;
    .name {
      font-size: 16px;
      font-weight: 500;
      color: var(--third-color);
    }
    .other {
      display: flex;
      padding-top: 5px;
      font-size: 12px;
      color: var(--fourth-color);
    }
  }
  .operator {
    padding-right: 15px;
    width: 10px;
  }
}
.body {
  padding-top: 5px;
  .title {
    font-size: 18px;
  }
  .img {
    .one-img {
      width: 100%;
      height: 227px;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .list {
      position: relative;
      display: flex;
      justify-content: space-between;
      width: 100%;
      height: 125px;
      img {
        width: 32%;
      }
      .img-count {
        position: absolute;
        top: 0;
        right: 0;
        width: 40px;
        height: 20px;
        line-height: 20px;
        text-align: center;
        color: #ffffff;
        background-color: rgb(0 0 0 / 50%);
      }
    }
  }
  .content {
    /* stylelint-disable-next-line value-no-vendor-prefix */
    display: -webkit-box;
    overflow: hidden;
    margin-top: 10px;
    text-overflow: ellipsis;
    color: var(--second-color);
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    line-height: 25px;
  }
}
.bottom {
  display: flex;
  justify-content: space-between;
  .item {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 33.3%;
    height: 40px;
    span {
      position: relative;
      left: 3px;
      color: var(--second-color);
    }
  }
}
</style>
