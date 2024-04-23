<template>
  <div class="update-contigent">
    <van-nav-bar
      title="创建队伍"
      left-text="返回"
      left-arrow
      @click-left="back"
    />
  </div>
  <div class="content">
    <van-form @submit="onSubmit">
      <van-cell-group inset>
        <van-field
          v-model="addTeamData.name"
          name="name"
          label="队伍名"
          placeholder="请输入队伍名"
          :rules="[{ required: true, message: '请输入队伍名' }]"
        />
        <van-field
          v-model="addTeamData.description"
          rows="4"
          autosize
          label="队伍描述"
          type="textarea"
          placeholder="请输入队伍描述"
        />
        <van-field
          is-link
          readonly
          name="datetimePicker"
          label="过期日期"
          :placeholder="addTeamData.expireDate ?? '点击选择过期日期'"
          @click="showPicker = true"
        />
        <van-popup v-model:show="showPicker" position="bottom">
          <van-date-picker
            v-model="addTeamData.expireDate"
            title="选择日期"
            :min-date="minDate"
            :max-date="maxDate"
            @confirm="showPicker = false"
          />
        </van-popup>
        <van-field
          is-link
          readonly
          name="datetimePicker"
          label="过期时间"
          :placeholder="addTeamData.expireTime ?? '点击选择过期时间'"
          @click="showTimePicker = true"
        />
        <van-popup v-model:show="showTimePicker" position="bottom">
          <van-time-picker
            v-model="addTeamData.expireTime"
            title="选择时间"
            :min-time="minTime"
            @confirm="showTimePicker = false"
          />
        </van-popup>
        <van-field name="stepper" label="最大人数">
          <template #input>
            <van-stepper v-model="addTeamData.maxNum" max="10" min="3" />
          </template>
        </van-field>
        <van-field name="radio" label="队伍状态">
          <template #input>
            <van-radio-group
              v-model="addTeamData.status"
              direction="horizontal"
            >
              <van-radio name="0">公开</van-radio>
              <van-radio name="1">私有</van-radio>
              <van-radio name="2">加密</van-radio>
            </van-radio-group>
          </template>
        </van-field>
        <van-field
          v-if="Number(addTeamData.status) === 2"
          v-model="addTeamData.password"
          type="password"
          name="password"
          label="密码"
          placeholder="请输入队伍密码"
          :rules="[{ required: true, message: '请填写密码' }]"
        />
      </van-cell-group>
      <div style="margin: 16px">
        <van-button round block type="primary" native-type="submit">
          提交
        </van-button>
      </div>
    </van-form>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRouter, useRoute } from 'vue-router'
// 确认框样式问题
import 'vant/es/toast/style'
import { showSuccessToast, showFailToast } from 'vant'
// 引入请求函数
import { createTeam } from '@/api'

// 路由回退
const router = useRouter()
const back = () => {
  router.back()
}

// 展示日期选择器
const showPicker = ref(false)
const showTimePicker = ref(false)

const initFormData = {
  name: '',
  description: '',
  expireDate: [],
  expireTime: [],
  maxNum: 3,
  password: '',
  status: 0,
}

const minDate = new Date()
const minTime =
  String(minDate.getHours()) +
  ':' +
  String(minDate.getMinutes()) +
  ':' +
  String(minDate.getSeconds())

// 需要用户填写的表单数据
const addTeamData = ref({ ...initFormData })

// 队伍获取ID
const route = useRoute()
const id = route.query.id

// 获取之前的队伍信息
onMounted(async () => {
  if (id <= 0) {
    showFailToast('加载队伍失败')
    return
  }
  // const res = await myAxios.get('/team/get', {
  //   params: {
  //     id,
  //   },
  // })
  // if (res?.code === 0) {
  //   addTeamData.value = res.data
  // } else {
  //   Toast.fail('加载队伍失败，请刷新重试')
  // }
})

// 提交
const onSubmit = async () => {
  const date = new Date(
    addTeamData.value.expireDate[0] +
      '-' +
      addTeamData.value.expireDate[1] +
      '-' +
      addTeamData.value.expireDate[2] +
      ' ' +
      addTeamData.value.expireTime[0] +
      ':' +
      addTeamData.value.expireTime[1],
  )

  const postData = {
    ...addTeamData.value,
    status: Number(addTeamData.value.status),
    expireTime: date,
  }
  // todo 前端参数校验
  const res = await createTeam(postData)
  if (res?.code === 1) {
    showSuccessToast('添加成功！')
    router.push({
      path: '/team',
      replace: true,
    })
  } else {
    showFailToast('添加失败！')
  }
}
</script>

<style lang="scss" scoped>
.content {
  padding-bottom: 10px;
  background-color: #ffffff;
}
</style>
