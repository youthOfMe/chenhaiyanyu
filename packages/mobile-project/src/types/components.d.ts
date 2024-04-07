import SvgIcon from '@/components/svg-icon/SvgIcon.vue'
import TabBar from '@/components/tab-bar/TabBar.vue'
import TopBarMain from '@/components/top-bar-main/TopBarMain.vue'

declare module 'vue' {
  interface GlobalComponents {
    SvgBar: typeof SvgIcon
    TabBar: typeof TabBar
    TopBarMain: typeof TopBarMain
  }
}
