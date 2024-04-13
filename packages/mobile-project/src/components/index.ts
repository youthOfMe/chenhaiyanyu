import TabBar from './tab-bar/TabBar.vue'
import SvgIcon from './svg-icon/SvgIcon.vue'
import TopBarMain from './top-bar-main/TopBarMain.vue'
import PostBlock from './post-block/PostBlock.vue'
import GoodPostBlock from './good-post-block/GoodPostBlock.vue'
import type { allGlobalComponentType } from '@/types'

// 全局对象
const allGlobalComponent: allGlobalComponentType = {
  tabBar: TabBar,
  svgIcon: SvgIcon,
  topBarMain: TopBarMain,
  postBlock: PostBlock,
  goodPostBlock: GoodPostBlock,
}

// 对外暴露插件对象
export default {
  install(app: { component: (arg0: string, arg1: any) => void }) {
    // 注册项目的全部的全局组件
    Object.keys(allGlobalComponent).forEach((item) => {
      // 注册为全局组件
      app.component(item, allGlobalComponent[item])
    })
  },
}
