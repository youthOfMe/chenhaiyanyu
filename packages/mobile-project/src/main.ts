import { createApp } from 'vue'
import router from '@/router'
import pinia from '@/stores'
// 引入全局自定义插件
import globalcomponent from '@/components'
import App from './App.vue'

// 引入svg地图进行使用
import 'virtual:svg-icons-register'

// 样式重置
import 'normalize.css'
import './styles/index.css'

const app = createApp(App)

// 注册全局自定义组件
app.use(globalcomponent)
// 注册路由
app.use(router)

// 引入路由鉴权代码
// import './permission'

// 注册pinia仓库
app.use(pinia).mount('#app')
