import SvgIcon from '@/components/svg-icon/SvgIcon.vue'
import TabBar from '@/components/tab-bar/TabBar.vue'
import PostBlock from '@/components/post-block/PostBlock.vue'
import GoodPostBlock from '@/components/good-post-block/GoodPostBlock.vue'
import ShopInfoCard from '@/components/shop-info-card/ShopInfoCard.vue'
import CommodityCardV1 from '@/components/commodity-card-v1/CommodityCardV1.vue'
import OurStoryCard from '@/components/our-story-card/OurStoryCard.vue'
import TopbarHeadV1 from '@/components/topbar-head-v1/TopbarHeadV1.vue'
import CodeWebCard from '@/components/code-web-card/CodeWebCard.vue'
import CommodityCardV2 from '@/components/commodity-card-v2/GoodsCardV1.vue'
import CpPaySheet from '@/components/cp-pay-sheet/CpPaySheet.vue'
import TabControl from '@/components/tab-control/TabControl.vue'
import Loading from '@/components/loading/Loading.vue'
import SocailCardV1 from '@/components/socail-card-v1/SocailCardV1.vue'
import AnnouncementCardV1 from '@/components/announcement-card-v1/AnnouncementCardV1.vue'

// 定义全局自动注册对象的类型
type allGlobalComponentType = {
  [svgIcon: string]: typeof SvgIcon
  [tabBar: string]: typeof TabBar
  [postBlock: string]: typeof PostBlock
  [goodPostBlock: string]: typeof GoodPostBlock
  [shopInfoCard: string]: typeof ShopInfoCard
  [commodityCardV1: string]: typeof CommodityCardV1
  [ourStoryCard: string]: typeof OurStoryCard
  [topbarHeadV1: string]: typeof TopbarHeadV1
  [codeWebCard: string]: typeof CodeWebCard
  [commodityCardV2: string]: typeof CommodityCardV2
  [cpPaySheet: string]: typeof CpPaySheet
  [tabControl: string]: typeof TabControl
  [loading: string]: typeof Loading
  [socailCardV1: string]: typeof SocailCardV1
  [announcementCardV1: string]: typeof AnnouncementCardV1
}

export { allGlobalComponentType }
