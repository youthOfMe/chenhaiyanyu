<template>
  <div class="post-detail">
    <TopbarHeadV1></TopbarHeadV1>
    <div class="content">
      <div class="content-title">
        当我们回顾 GitHub 过去十年，我们并不会想起某一款软件，而是想到人们用
        GitHub 发生了何种改变。
      </div>
      <div class="text">
        十年前，GitHub 正式上线。初衷何其简单：连接开发者，通过 Git
        更好开展项目。过去十年，我们已经成为一家公司、一个平台，慢慢壮大，但是初衷从未变过。并不是一个好点子或者什么大事件让这个平台特别，而是使用它的人，感谢
        GitHub 十年，感谢有你。
        当我们回顾过去十年，我们不会记得某一款软件，而是人们用 GitHub
        做的事。全世界各地都可以用 GitHub 来分享、教授、修补、构建。在最初上线
        GitHub
        的时候，我们完全没有预料到它能成长如斯，如此大的体量，如此多的贡献和连接。
        展望未来，我们依旧会保持简单。未来在你的手中，由你来定义。我们愿意跟随你。
        与此同时，感谢你的代码，你的合并、你的文档，你共享的项目以及你在 GitHub
        所做的一切。 谢谢你，10 years。
      </div>
      <div class="img" v-if="imgCount > 0">
        <div class="one-img" v-if="imgCount == 1">
          <img :src="getAssetURL('home/home-bg.jpg')" alt="" />
        </div>
        <div class="list" v-if="imgCount > 1">
          <img
            :src="getAssetURL('home/home-bg.jpg')"
            alt=""
            v-for="i in imgCount > 6 ? 6 : imgCount"
            :key="i"
          />
          <img
            :src="getAssetURL('home/home-bg.jpg')"
            alt=""
            v-if="imgCount === 2 || imgCount == 5"
          />
          <div class="img-count">
            {{ imgCount > 9 ? 9 + '+' : imgCount }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { getAssetURL } from '@/utils/LoadAssetsImg.js'

const imgCount = ref(88)
</script>

<style lang="scss" scoped>
.content {
  padding: 15px 9px;
  background-color: #ffffff;
  .content-title {
    font-size: 22px;
    font-weight: 600;
  }
  .text {
    margin-top: 10px;
    font-size: 16px;
  }
  .img {
    margin-top: 10px;
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
      flex-wrap: wrap;
      justify-content: space-between;
      width: 100%;
      img {
        margin-bottom: 5px;
        width: 32%;
        height: 125px;
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
}
</style>
