<template>
  <div class="detail">
    <van-nav-bar
      title="程序详情"
      left-text="返回"
      right-text="按钮"
      left-arrow
      @click-left="back"
      @click-right="onClickRight"
    />
    <div class="content">
      <div class="info">
        <div class="label">爆品</div>
        <div class="info-title">选择您需要的前端项目</div>
        <div class="info-text">专业团队-您值得信赖</div>
        <div class="info-img">
          <img :src="getAssetURL('code-order/card-v1/front.png')" alt="" />
        </div>
        <div class="operation">图库</div>
      </div>
      <div class="choose-type">
        <div class="type-title">请选择您需要的网站类型</div>
        <van-cell-group inset>
          <van-cell title="单选框 1" clickable @click="checked = '1'">
            <template #right-icon>
              <van-radio name="1" />
            </template>
          </van-cell>
          <van-cell title="单选框 2" clickable @click="checked = '2'">
            <template #right-icon>
              <van-radio name="2" />
            </template>
          </van-cell>
        </van-cell-group>
      </div>

      <div class="choose-type">
        <div class="type-title">请选择您需要的网站规模</div>
        <van-cell-group inset>
          <van-cell title="单选框 1" clickable @click="checked = '1'">
            <template #right-icon>
              <van-radio name="1" />
            </template>
          </van-cell>
          <van-cell title="单选框 2" clickable @click="checked = '2'">
            <template #right-icon>
              <van-radio name="2" />
            </template>
          </van-cell>
        </van-cell-group>
      </div>

      <div class="choose-type">
        <div class="type-title">请选择您需要移动端还是PC端？</div>
        <van-cell-group inset>
          <van-cell title="单选框 1" clickable @click="checked = '1'">
            <template #right-icon>
              <van-radio name="1" />
            </template>
          </van-cell>
          <van-cell title="单选框 2" clickable @click="checked = '2'">
            <template #right-icon>
              <van-radio name="2" />
            </template>
          </van-cell>
        </van-cell-group>
      </div>

      <div class="choose-type">
        <div class="type-title">请选择您的开发预算</div>
        <van-cell-group inset>
          <van-cell title="单选框 1" clickable @click="checked = '1'">
            <template #right-icon>
              <van-radio name="1" />
            </template>
          </van-cell>
          <van-cell title="单选框 2" clickable @click="checked = '2'">
            <template #right-icon>
              <van-radio name="2" />
            </template>
          </van-cell>
        </van-cell-group>
      </div>

      <div class="choose-type">
        <div class="type-title">请选择您的预期开发周期</div>
        <van-cell-group inset>
          <van-cell title="单选框 1" clickable @click="checked = '1'">
            <template #right-icon>
              <van-radio name="1" />
            </template>
          </van-cell>
          <van-cell title="单选框 2" clickable @click="checked = '2'">
            <template #right-icon>
              <van-radio name="2" />
            </template>
          </van-cell>
        </van-cell-group>
      </div>

      <div class="choose-type">
        <div class="type-title">请选择您的应用场景</div>
        <van-cell-group inset>
          <van-cell title="单选框 1" clickable @click="checked = '1'">
            <template #right-icon>
              <van-radio name="1" />
            </template>
          </van-cell>
          <van-cell title="单选框 2" clickable @click="checked = '2'">
            <template #right-icon>
              <van-radio name="2" />
            </template>
          </van-cell>
        </van-cell-group>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
import { getAssetURL } from '@/utils/LoadAssetsImg.js'

// 路由回退
const router = useRouter()
const back = () => {
  router.back()
}
</script>

<style lang="scss" scoped>
.content {
  overflow-y: auto;
  height: calc(100vh - 46px);
  .info {
    display: flex;
    align-items: center;
    padding-top: 30px;
    text-align: center;
    background-color: #ffffff;
    flex-direction: column;
    .label {
      color: orange;
    }
    .info-title {
      margin-top: 20px;
      width: 80%;
      font-size: 28px;
      font-weight: 600;
    }
    .info-text {
      margin-top: 20px;
      width: 80%;
      font-size: 18px;
      color: #aaaaaa;
    }
    .info-img {
      margin-top: 20px;
      width: 80%;
      height: 150px;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .operation {
      box-sizing: border-box;
      margin-top: 20px;
      width: 100%;
      height: 50px;
      font-size: 18px;
      border: 1px solid #eeeeee;
      color: var(--primary-color);
      line-height: 50px;
    }
  }
  .choose-type {
    margin-top: 10px;
    padding: 10px 0;
    background-color: #ffffff;
    .type-title {
      padding-left: 10px;
      font-size: 18px;
      font-weight: 600;
    }
  }
}
</style>
