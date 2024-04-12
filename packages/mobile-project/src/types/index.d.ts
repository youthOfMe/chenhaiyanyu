import SvgIcon from '@/components/svg-icon/SvgIcon.vue'
import TabBar from '@/components/tab-bar/TabBar.vue'
import PostBlock from '@/components/post-block/PostBlock.vue'

// 定义全局自动注册对象的类型
type allGlobalComponentType = {
  [svgIcon: string]: typeof SvgIcon
  [tabBar: string]: typeof TabBar
  [postBlock: string]: typeof PostBlock
}

export { allGlobalComponentType }
