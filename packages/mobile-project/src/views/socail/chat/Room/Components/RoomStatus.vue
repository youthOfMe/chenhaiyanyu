<script setup lang="ts">
// import { OrderType } from '@/enums'

// const props = defineProps<{
//   status?: OrderType
//   countdown?: number
// }>()
// console.log(props.status)
</script>

<template>
  <div class="room-status">
    <div class="wait" v-if="status === OrderType?.ConsultWait">
      已通知医生尽快接诊，24小时内医生未回复将自动退款
    </div>
    <div class="chat" v-if="status === OrderType?.ConsultChat">
      <span>咨询中</span>
      <span>
        剩余时间:
        <van-count-down
          v-if="countdown"
          :time="countdown * 1000"
        ></van-count-down>
      </span>
    </div>
    <div
      class="end"
      v-if="
        status === OrderType?.ConsultCancel ||
        status === OrderType?.ConsultComplete
      "
    >
      <van-icon name="passed" />
      已结束
    </div>
  </div>
</template>

<style lang="scss" scoped>
.room-status {
  position: fixed;
  top: 46px;
  left: 0;
  z-index: 1;
  width: 100%;
  height: 44px;
  font-size: 13px;
  background-color: #ffffff;
  .wait {
    padding: 0 15px;
    height: 100%;
    text-align: center;
    color: var(--cp-primary);
    background-color: var(--cp-plain);
    line-height: 44px;
  }
  .chat {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 15px;
    height: 100%;
    span {
      &:first-child {
        color: var(--cp-primary);
      }
      &:last-child {
        width: 130px;
        color: var(--cp-text2);
        .van-count-down {
          display: inline;
        }
      }
    }
  }
  .end {
    display: flex;
    align-items: center;
    padding: 0 15px;
    height: 44px;
    font-weight: 500;
    .van-icon {
      position: relative;
      top: 1px;
      margin-right: 4px;
      font-size: 14px;
    }
  }
}
</style>
