import SvgIcon from '@/components/svg-icon/SvgIcon.vue'
import TabBar from '@/components/tab-bar/TabBar.vue'
import TopBarMain from '@/components/top-bar-main/TopBarMain.vue'
import PostBlock from '@/components/post-block/PostBlock.vue'
import GoodPostBlock from '@/components/good-post-block/GoodPostBlock.vue'

declare module 'vue' {
  interface GlobalComponents {
    SvgBar: typeof SvgIcon
    TabBar: typeof TabBar
    TopBarMain: typeof TopBarMain
    PostBlock: typeof PostBlock
    GoodPostBlock: typeof GoodPostBlock
  }
}
