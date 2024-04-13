import SvgIcon from '@/components/svg-icon/SvgIcon.vue'
import TabBar from '@/components/tab-bar/TabBar.vue'
import PostBlock from '@/components/post-block/PostBlock.vue'
import GoodPostBlock from '@/components/good-post-block/GoodPostBlock.vue'
import ShopInfoCard from '@/components/shop-info-card/ShopInfoCard.vue'
import CommodityCardV1 from '@/components/commodity-card-v1/CommodityCardV1.vue'
import OurStoryCard from '@/components/our-story-card/OurStoryCard.vue'

// 定义全局自动注册对象的类型
type allGlobalComponentType = {
  [svgIcon: string]: typeof SvgIcon
  [tabBar: string]: typeof TabBar
  [postBlock: string]: typeof PostBlock
  [goodPostBlock: string]: typeof GoodPostBlock
  [shopInfoCard: string]: typeof ShopInfoCard
  [commodityCardV1: string]: typeof CommodityCardV1
  [ourStoryCard: string]: typeof OurStoryCard
}

export { allGlobalComponentType }
