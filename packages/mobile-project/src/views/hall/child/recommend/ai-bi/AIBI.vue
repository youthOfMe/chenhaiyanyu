<template>
  <div class="ai-bi">
    <van-nav-bar
      title="智能BI"
      left-text="返回"
      left-arrow
      @click-left="back"
    ></van-nav-bar>
    <van-tabs v-model:active="active">
      <van-tab title="智能分析">
        <div class="content">
          <div class="input">
            <div class="input-head">
              <div class="title">提交分析</div>
            </div>
            <van-form @submit="onSubmit">
              <van-cell-group inset>
                <van-field
                  v-model="goal"
                  name="分析目的"
                  label="分析目的"
                  placeholder="分析目的"
                  :rules="[{ required: true, message: '请填写分析目的' }]"
                  type="textarea"
                  maxlength="500"
                  show-word-limit
                />
                <van-field
                  v-model="name"
                  name="图表名称"
                  label="图表名称"
                  placeholder="图表名称"
                  :rules="[{ required: true, message: '请填写图表名称' }]"
                />
                <van-field
                  name="chartType"
                  label="图表类型"
                  :rules="[{ required: true, message: '请选择图表类型' }]"
                >
                  <template #input>
                    <van-radio-group v-model="chartType" direction="horizontal">
                      <van-radio name="折线图">折线图</van-radio>
                      <van-radio name="柱状图">柱状图</van-radio>
                      <van-radio name="堆叠图">堆叠图</van-radio>
                      <van-radio name="饼图">饼图</van-radio>
                      <van-radio name="雷达图">雷达图</van-radio>
                    </van-radio-group>
                  </template>
                </van-field>
                <van-field
                  name="uploader"
                  label="上传xlsx文件"
                  :rules="[{ required: true, message: '请上传xlsx文件' }]"
                >
                  <template #input>
                    <van-uploader
                      v-model="fileList"
                      accept=".xlsx"
                      :after-read="uploadSuccess"
                      :max-size="1024 * 1024"
                      @oversize="onOversize"
                    >
                      <van-button icon="plus" type="primary" size="small">
                        上传文件
                      </van-button>
                    </van-uploader>
                  </template>
                </van-field>
              </van-cell-group>
              <div style="margin: 16px">
                <van-button round block type="primary" native-type="submit">
                  提交
                </van-button>
              </div>
            </van-form>
          </div>
        </div>
      </van-tab>
      <van-tab title="我的分析">内容 2</van-tab>
    </van-tabs>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { showFailToast } from 'vant'
// vant提示框样式问题处理
import 'vant/es/toast/style'
// 引入分析数据的接口
import { genChartByAiUsingPOST } from '@/api'

// 路由回退
const router = useRouter()
const back = () => {
  router.back()
}

// 控制tab
const active = ref(0)

// 限制上传文件大小
const onOversize = (file) => {
  console.log(file)
  showFailToast('文件大小不能超过 1MB')
}

// 收集表单提交数据
const goal = ref('')
const name = ref('')
const chartType = ref('折线图')
const fileList = ref([])
let fd = new FormData()
const uploadSuccess = (file) => {
  console.log(file)
  fd.append('file', file.file)
}

// 发送网络请求
const onSubmit = async () => {
  // myChart.setOption({})
  // isLoading.value = true
  // isDisable.value = true
  try {
    const res = await genChartByAiUsingPOST(
      {
        goal: goal.value,
        name: name.value,
        chartType: chartType.value,
      },
      fd,
    )

    // if (!res?.data) {
    //   ElMessage.error('分析失败')
    //   isLoading.value = false
    //   isDisable.value = false
    // } else {
    //   ElMessage.success('分析成功')
    //   // myChart.setOption([])
    //   const chartOption = JSON.parse(res.data.genChart ?? '')
    //   if (!chartOption) {
    //     throw new Error('图表代码解析错误')
    //   } else {
    //     isLoading.value = false
    //     isDisable.value = false
    //     chartData.value = res.data.genResult
    //     chartOptions.value = chartOption
    //     // setChart(res.data)
    //     // setOption(chartOption)
    //     myChart.setOption(chartOptions.value)
    //   }
    // }
  } catch (e: any) {
    // ElMessage.error('分析失败，' + e.message)
  }
}
</script>

<style lang="scss" scoped>
.content {
  overflow-y: auto;
  padding-top: 10px;
  height: calc(100vh - 44px - 46px);
  .input {
    .input-head {
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 0 15px 5px;

      /* padding: 5px; */
      height: 50px;
      border-radius: 5px;
      background-color: #ffffff;
      box-sizing: border-box;
      .title {
        font-size: 18px;
        font-weight: normal;
        color: var(--primary-color);
      }
    }
  }
}
</style>
