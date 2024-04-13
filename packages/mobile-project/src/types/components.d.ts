import SvgIcon from '@/components/svg-icon/SvgIcon.vue'
import TabBar from '@/components/tab-bar/TabBar.vue'
import TopBarMain from '@/components/top-bar-main/TopBarMain.vue'
import PostBlock from '@/components/post-block/PostBlock.vue'
import GoodPostBlock from '@/components/good-post-block/GoodPostBlock.vue'
import ShopInfoCard from '@/components/shop-info-card/ShopInfoCard.vue'
import CommodityCardV1 from '@/components/commodity-card-v1/CommodityCardV1.vue'
import OurStoryCard from '@/components/our-story-card/OurStoryCard.vue'

declare module 'vue' {
  interface GlobalComponents {
    SvgBar: typeof SvgIcon
    TabBar: typeof TabBar
    TopBarMain: typeof TopBarMain
    PostBlock: typeof PostBlock
    GoodPostBlock: typeof GoodPostBlock
    ShopInfoCard: typeof ShopInfoCard
    CommodityCardV1: typeof CommodityCardV1
    OurStoryCard: typeof OurStoryCard
  }
}
