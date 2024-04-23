<template>
  <div class="ai-bi">
    <van-nav-bar
      title="智能BI"
      left-text="返回"
      left-arrow
      @click-left="back"
    ></van-nav-bar>
    <van-tabs v-model:active="active">
      <van-tab title="智能分析"></van-tab>
      <van-tab title="我的分析"></van-tab>
    </van-tabs>
    <div class="ai-content" v-if="active === 0">
      <div class="input">
        <div class="head">
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
                  max-count="1"
                >
                  <van-button
                    icon="plus"
                    type="primary"
                    size="small"
                    :loading="isLoading"
                    loading-text="加载中"
                  >
                    上传文件
                  </van-button>
                </van-uploader>
              </template>
            </van-field>
          </van-cell-group>
          <div style="margin: 16px">
            <van-button
              round
              block
              type="primary"
              native-type="submit"
              :loading="isLoading"
              loading-text="加载中"
            >
              提交
            </van-button>
          </div>
        </van-form>
      </div>
      <div class="conclusion">
        <div class="head">
          <div class="title">分析结论</div>
        </div>
        <div class="info">
          <span>分析结论 : &nbsp;</span>
          <span>{{ chartData }}</span>
          <van-loading
            size="24px"
            style="width: 100%; height: 50px; text-align: center"
            v-if="isLoading"
          >
            加载中...
          </van-loading>
        </div>
      </div>
      <div class="chart-content">
        <div class="head">
          <div class="title">智能图表</div>
        </div>
        <div class="chart" ref="chart"></div>
        <div class="chart-loading">
          <van-loading
            size="24px"
            style="width: 100%; height: 50px; text-align: center"
            v-show="isLoading"
          >
            加载中...
          </van-loading>
        </div>
      </div>
    </div>
    <div class="my-chart" v-show="active === 1">
      <div class="list">
        <BiCard></BiCard>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import * as echarts from 'echarts'
import { showFailToast, showSuccessToast } from 'vant'
// vant提示框样式问题处理
import 'vant/es/toast/style'
// 引入分析数据的接口
import { genChartByAiUsingPOST } from '@/api'
// 引入卡片组件
import BiCard from './cpns/bi-card/BiCard.vue'

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

// 控制加载
const isLoading = ref(false)

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

// 获取图表分析数据
const chartData = ref('')
const chartOptions = ref('')

// 挂载分析数据表
const chart = ref()
let myChart = ''
onMounted(() => {
  myChart = echarts.init(chart.value)
})

// 发送网络请求
const onSubmit = async () => {
  myChart.setOption({})
  isLoading.value = true
  try {
    const res = await genChartByAiUsingPOST(
      {
        goal: goal.value,
        name: name.value,
        chartType: chartType.value,
      },
      fd,
    )

    if (!res?.data) {
      showFailToast('分析失败')
      isLoading.value = false
    } else {
      showSuccessToast('分析成功')
      const chartOption = JSON.parse(res.data.genChart ?? '')
      if (!chartOption) {
        throw new Error('图表代码解析错误')
      } else {
        isLoading.value = false
        chartData.value = res.data.genResult
        chartOptions.value = chartOption
        myChart.setOption(chartOptions.value)
      }
    }
  } catch (e: any) {
    showFailToast('分析失败，' + e.message)
  }
}
</script>

<style lang="scss" scoped>
.my-chart {
  overflow-y: auto;
  padding-top: 10px;
  padding-bottom: 20px;
  .list {
    padding: 5px 9px 20px;
  }
}
.ai-content {
  overflow-y: auto;
  padding-top: 10px;
  padding-bottom: 20px;
  box-sizing: border-box;
  height: calc(100vh - 44px - 46px);
  .info {
    margin: 0 14px;
    padding: 10px;
    min-height: 100px;
    font-size: 16px;
    background-color: #ffffff;
    box-sizing: border-box;
  }
  .chart-content {
    position: relative;
    margin-top: 10px;
    .chart {
      margin: 0 14px;
      height: 300px;
      border-radius: 5px;
      background-color: #ffffff;
    }
    .chart-loading {
      position: absolute;
      transform: translate(0, 50px);
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
}
.head {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 15px 10px;

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
</style>
