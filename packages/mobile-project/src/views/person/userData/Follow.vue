<template>
  <div class="follow">
    <div class="follow-setting">
      <div class="item">
        <SvgIcon class="icon" name="person-update"></SvgIcon>
        <div class="base-info">
          <div class="info">
            <div class="name-title">
              <span>
                有更新
                <span style="color: grey">(99+)</span>
              </span>
            </div>
          </div>
        </div>
      </div>

      <div class="item">
        <SvgIcon class="icon" name="person-management"></SvgIcon>
        <div class="base-info">
          <div class="info">
            <div class="name-title">
              <span>批量管理</span>
            </div>
          </div>
        </div>
      </div>

      <div class="item">
        <SvgIcon class="icon" name="person-grouping"></SvgIcon>
        <div class="base-info">
          <div class="info">
            <div class="name-title">
              <span>分组</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="less-interact">
      <div class="left-content">
        <img
          class="avatar"
          :src="getAssetURL('privateMsg/avatar8.jpg')"
          alt=""
        />
      </div>
      <div class="center-content">
        <div class="title">近期互动最少的人</div>
        <p>完颜慧德、黏苞米糊糊等用户</p>
      </div>
      <div class="right-content">
        <svg-icon
          name="message-arrow"
          style="width: 28px; height: 28px"
        ></svg-icon>
      </div>
    </div>
    <div class="follow-info">
      <div class="textBox">
        <text>
          我的关注
          <span>(387人)</span>
        </text>
      </div>
      <div class="sort">
        <text>综合排序</text>

        <SvgIcon class="icon" name="person-sort"></SvgIcon>
      </div>
    </div>

    <div class="user-list">
      <div class="user-item">
        <div class="left-content">
          <img
            class="avatar"
            :src="getAssetURL('privateMsg/avatar1.jpg')"
            alt=""
          />
        </div>
        <div class="center-content">
          <div class="name">璐璐璐</div>
        </div>
        <div class="right-content">
          <van-button
            style="
              padding: 0 5vw;
              background-color: var(--primary-color);
              color: white;
            "
          >
            已关注
          </van-button>
          <svg-icon
            name="person-more"
            style="width: 28px; height: 28px"
          ></svg-icon>
        </div>
      </div>
      <div class="user-item">
        <div class="left-content">
          <img
            class="avatar"
            :src="getAssetURL('privateMsg/avatar1.jpg')"
            alt=""
          />
        </div>
        <div class="center-content">
          <div class="name">官方账号</div>
        </div>
        <div class="right-content">
          <van-button
            style="
              padding: 0 5vw;
              background-color: var(--primary-color);
              color: white;
            "
          >
            已关注
          </van-button>
          <svg-icon
            name="person-more"
            style="width: 28px; height: 28px"
          ></svg-icon>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { getAssetURL } from '@/utils/LoadAssetsImg'
import { useRouter } from 'vue-router'
const router = useRouter()
let goBack = () => {
  router.go(-1)
}
</script>

<style lang="scss" scoped>
.fans {
  display: flex;
  flex-direction: column;
  background-color: rgb(255 255 255);
}

.follow-setting {
  display: flex;
  flex-direction: row;
  background-color: #ffffff;
  .item {
    margin: 3vw;
    width: 21vw;
    height: 21vw;
    border-radius: 3vw;
    border: 1px rgba(128, 128, 128, 0.607) solid;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    .icon {
      width: 6vw;
      height: 6vw;
      margin: 5vw 0 1vw 0;
    }
  }
  .base-info {
    display: flex;
    flex: 1;
    .info {
      /* flex布局中 flex: 1突出问题解决 文字不省略 */
      overflow: hidden;
      padding-top: 5px;
      .name-title {
        font-size: 13px;
        font-weight: 600;
        color: var(--third-color);
      }
    }
  }
}

.less-interact {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 7px;
  padding-bottom: 15px;
  border-bottom: 1px rgba(128, 128, 128, 0.103) solid;
  .left-content {
    display: flex;
    align-items: center;
    padding-left: 13px;
    margin-right: 10px;
    width: 12%;
    img {
      width: 60px;
      height: 60px;
      border-radius: 30px;
      background: no-repeat center;
    }
  }
  .center-content {
    display: flex;
    width: 65%;
    flex-direction: column;
    font-size: 20px;
    .title {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      font-size: 21px;
      font-weight: 600;
      color: var(--third-color);
    }
    p {
      overflow: hidden;
      margin: 0;
      text-overflow: ellipsis;
      white-space: nowrap;
      margin-top: 2px;
      font-size: 16px;
      color: var(--second-color);
    }
  }
  .right-content {
    display: flex;
    align-items: center;
    justify-content: center;
    padding-right: 10px;
  }
}

.follow-info {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  .textBox {
    color: #6e737c;
    margin: 4vw 4vw 3vw;
  }
  .sort {
    color: #6e737c;
    width: 20vw;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-right: 10px;
    .icon {
      width: 21px;
      height: 21px;
    }
  }
}

.user-list {
  display: flex;
  flex-direction: column;
  .user-item {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-top: 7px;
    margin-bottom: 7px;
    .left-content {
      display: flex;
      align-items: center;
      padding-left: 13px;
      padding-right: 10px;
      width: 12%;
      img {
        width: 60px;
        height: 60px;
        border-radius: 30px;
        background: no-repeat center;
      }
    }
    .center-content {
      display: flex;
      width: 43%;
      flex-direction: column;
      justify-content: center;
      font-size: 20px;
      .name {
        display: flex;
        justify-content: flex-start;
        font-size: 21px;
        font-weight: 600;
        color: var(--third-color);
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
    }
    .right-content {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding-top: 8px;
      padding-right: 10px;
      flex-direction: row;
      font-size: 15px;
      height: 100%;
      width: 30%;
    }
  }
}
</style>
