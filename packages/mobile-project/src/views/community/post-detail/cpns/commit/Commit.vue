<template>
  <div class="commit">
    <div class="commit-wrap">
      <div class="commit">
        <div class="head-img">
          <img :src="getAssetURL('home/head-bg.jpg')" alt="" />
        </div>
        <div class="content">
          <div class="name-time">
            <div class="name nowrap_ellipsis">
              <span class="reply" v-if="false">回复</span>
              作者
            </div>
            <div class="time">{{ item.createdTime }}</div>
          </div>
          <div class="text">{{ item.content }}</div>
        </div>
        <div class="operation">
          <SvgIcon></SvgIcon>
          <SvgIcon name="postblock-thumb" width="20px" height="20px"></SvgIcon>
          <!-- <SvgIcon
                    name="postblock-thumb_active"
                    width="20px"
                    height="20px"
                  ></SvgIcon> -->
        </div>
      </div>
      <!-- <div class="reply-list">
        <div class="commit">
          <div class="head-img">
            <img :src="getAssetURL('home/head-bg.jpg')" alt="" />
          </div>
          <div class="content">
            <div class="name-time">
              <div class="name nowrap_ellipsis">
                <span class="reply" v-if="false">回复牛马</span>
                我不是星海
              </div>
              <div class="time">2024-03-23</div>
            </div>
            <div class="text">评论内容</div>
          </div>
          <div class="operation">
            <SvgIcon></SvgIcon>
            <SvgIcon
              name="postblock-thumb"
              width="20px"
              height="20px"
            ></SvgIcon> -->
      <!-- <SvgIcon
                    name="postblock-thumb_active"
                    width="20px"
                    height="20px"
                  ></SvgIcon> -->
      <!-- </div>
        </div>
        <div class="commit">
          <div class="head-img">
            <img :src="getAssetURL('home/head-bg.jpg')" alt="" />
          </div>
          <div class="content">
            <div class="name-time">
              <div class="name nowrap_ellipsis">
                <span class="reply">回复牛马</span>
                我不是星海
              </div>
              <div class="time">2024-03-23</div>
            </div>
            <div class="text">评论内容</div>
          </div>
          <div class="operation">
            <SvgIcon></SvgIcon>
            <SvgIcon
              name="postblock-thumb"
              width="20px"
              height="20px"
            ></SvgIcon> -->
      <!-- <SvgIcon
                    name="postblock-thumb_active"
                    width="20px"
                    height="20px"
                  ></SvgIcon> -->
      <!-- </div>
        </div>
        <div class="bottom-operation">
          查看全部5条回复
          <SvgIcon name="community-post_detail-down" class="icon"></SvgIcon>
        </div>
      </div>  -->
    </div>
  </div>
</template>

<script setup lang="ts">
import { getAssetURL } from '@/utils/LoadAssetsImg.js'

defineProps({
  item: {
    type: Object,
    default: () => {},
  },
})
</script>

<style lang="scss" scoped>
.commit-wrap {
  .commit {
    display: flex;
    margin-top: 10px;
    width: 100%;
    .head-img {
      img {
        width: 30px;
        height: 30px;
        border-radius: 50%;
      }

      padding-right: 10px;
    }
    .content {
      padding-top: 5px;
      flex: 1;
      .reply {
        color: #cccccc;
      }
      .name-time {
        display: flex;
        justify-content: space-between;
        overflow: hidden;
        .name {
          flex: 1;
        }
      }
    }
  }
  .reply-list {
    padding-left: 50px;
    .bottom-operation {
      position: relative;
      left: 40px;
      color: #cccccc;
      .icon {
        position: relative;
        top: 3px;
      }
    }
  }
}
</style>
