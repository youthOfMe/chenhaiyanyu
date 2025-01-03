import components from '@/components'

export const constantRoute = [
  {
    path: '/',
    redirect: '/home',
  },
  {
    path: '/home',
    component: () => import('@/views/home/Home.vue'),
  },
  {
    path: '/login',
    component: () => import('@/views/login/Login.vue'),
    meta: {
      hideTabBar: true,
    },
  },
  {
    path: '/phoneLogin',
    component: () => import('@/views/login/PhoneLogin.vue'),
    meta: {
      hideTabBar: true,
    },
  },
  {
    path: '/resetPsw',
    component: () => import('@/views/reset-psw/ResetPsw.vue'),
    meta: {
      hideTabBar: true,
    },
  },
  {
    path: '/phoneRegister',
    component: () => import('@/views/register/PhoneRegister.vue'),
    meta: {
      hideTabBar: true,
    },
  },
  {
    path: '/register',
    component: () => import('@/views/register/Register.vue'),
    meta: {
      hideTabBar: true,
    },
  },
  {
    path: '/foundAccount',
    component: () => import('@/views/found-account/FoundAccount.vue'),
    meta: {
      hideTabBar: true,
    },
  },
  {
    path: '/hall',
    component: () => import('@/views/hall/Hall.vue'),
    children: [
      {
        path: '/hall/recommend',
        component: () => import('@/views/hall/child/recommend/Recommend.vue'),
      },
      {
        path: '/hall/officialStore',
        component: () =>
          import('@/views/hall/child/official-store/OfficialStore.vue'),
      },
      {
        path: '/hall/codeNavigation',
        component: () =>
          import('@/views/hall/child/code-navigation/CodeNavigation.vue'),
      },
      {
        path: '/hall/takeOrder',
        component: () => import('@/views/hall/child/take-order/TakeOrder.vue'),
      },
      {
        // 匹配大厅
        path: '/hall/matchHall',
        component: () => import('@/views/hall/child/metch-hall/MatchHall.vue'),
      },
    ],
  },
  {
    path: '/community',
    component: () => import('@/views/community/Community.vue'),
    children: [
      {
        path: '/community/recommend',
        component: () =>
          import('@/views/community/child/recommend/Recommend.vue'),
      },
      {
        path: '/community/all',
        component: () => import('@/views/community/child/all/All.vue'),
      },
    ],
  },
  {
    path: '/person',
    component: () => import('@/views/person/Person.vue'),
  },
  {
    path: '/error',
    component: () => import('@/views/error/Error.vue'),
  },
  {
    path: '/message',
    component: () => import('@/views/message/Message.vue'),
    meta: {
      hideTabBar: true,
    },
  },
  {
    path: '/privateMsg',
    component: () => import('@/views/message/privateMsg/PrivateMsg.vue'),
    meta: {
      hideTabBar: true,
    },
  },
  {
    name: 'personInfo',
    path: '/personInfo',
    component: () => import('@/views/person-info/PersonInfo.vue'),
    meta: {
      hideTabBar: true,
    },
  },
  {
    name: 'setting',
    path: '/setting',
    component: () => import('@/views/setting/Setting.vue'),
    meta: {
      hideTabBar: true,
    },
  },
  {
    name: 'editPersonInfo',
    path: '/editPersonInfo',
    component: () => import('@/views/edit-person-info/EditPersonInfo.vue'),
    meta: {
      hideTabBar: true,
    },
  },
  {
    path: '/commodity/:id',
    component: () => import('@/views/commodity/Commodity.vue'),
    meta: {
      hideTabBar: true,
    },
  },
  {
    path: '/ourstory',
    component: () => import('@/views/our-story/OurStory.vue'),
    meta: {
      hideTabBar: true,
    },
  },
  {
    path: '/postDetail',
    component: () => import('@/views/community/post-detail/PostDetail.vue'),
    meta: {
      hideTabBar: true,
    },
  },
  {
    path: '/coupons',
    component: () => import('@/views/coupons/Coupons.vue'),
    meta: {
      hideTabBar: true,
    },
  },
  {
    path: '/codeOrder',
    component: () => import('@/views/code-order/CodeOrder.vue'),
    meta: {
      hideTabBar: true,
    },
  },

  {
    path: '/userData',
    component: () => import('@/views/person/cpns/UserData.vue'),
    meta: {
      hideTabBar: true,
    },
    children: [
      {
        path: '/userData/likeFavorite',
        component: () => import('@/views/person/userData/LikeFavorite.vue'),
      },
      {
        path: '/userData/fans',
        component: () => import('@/views/person/userData/Fans.vue'),
      },
      {
        path: '/userData/follow',
        component: () => import('@/views/person/userData/Follow.vue'),
      },
      {
        path: '/userData/dynamic',
        component: () => import('@/views/person/userData/Dynamic.vue'),
      },
    ],
  },
  {
    path: '/xinghaiMoney',
    component: () => import('@/views/person/purse/XingHaiMoney.vue'),
    meta: {
      hideTabBar: true,
    },
  },
  {
    path: '/renminbi',
    component: () => import('@/views/person/purse/RenMinBi.vue'),
    meta: {
      hideTabBar: true,
    },
  },
  {
    path: '/clockMoney',
    component: () => import('@/views/person/purse/ClockMoney.vue'),
    meta: {
      hideTabBar: true,
    },
  },
  {
    path: '/credMoney',
    component: () => import('@/views/person/purse/CredMoney.vue'),
    meta: {
      hideTabBar: true,
    },
  },
  {
    path: '/chshopCategory',
    component: () =>
      import('@/views/hall/child/official-store/category/Category.vue'),
    meta: {
      hideTabBar: true,
    },
  },
  {
    path: '/chshopSetmeal',
    component: () =>
      import('@/views/hall/child/official-store/setmeal/Setmeal.vue'),
    meta: {
      hideTabBar: true,
    },
  },
  {
    path: '/addressBook',
    component: () => import('@/views/address-book/AddressBook.vue'),
    meta: {
      hideTabBar: true,
    },
  },
  {
    path: '/addAddress',
    component: () => import('@/views/address-book/add-address/AddAddress.vue'),
    meta: {
      hideTabBar: true,
    },
  },
  {
    path: '/submitOrder',
    component: () => import('@/views/order/submit-order/SubmitOrder.vue'),
    meta: {
      hideTabBar: true,
    },
  },
  {
    path: '/payOrder',
    component: () => import('@/views/order/pay-order/PayOrder.vue'),
    meta: {
      hideTabBar: true,
    },
  },
  {
    path: '/order',
    component: () => import('@/views/order/order/Order.vue'),
    meta: {
      hideTabBar: true,
    },
  },
  {
    path: '/socail',
    component: () => import('@/views/socail/Socail.vue'),
    meta: {
      hideTabBar: true,
    },
  },
  {
    path: '/communityMain',
    component: () =>
      import('@/views/community/community-main/CommunityMain.vue'),
    meta: {
      hideTabBar: true,
    },
  },
  {
    // 发布帖子
    path: '/publishPost',
    component: () => import('@/views/community/publish-post/PublishPost.vue'),
    meta: {
      hideTabBar: true,
    },
  },
  {
    // 购物车
    path: '/shoppingCart',
    component: () => import('@/views/shoppingCart/ShoppingCart.vue'),
    meta: {
      hideTabBar: true,
    },
  },
  {
    // 聊天室
    path: '/chatRoom',
    component: () => import('@/views/socail/chat/Room/index.vue'),
    meta: {
      hideTabBar: true,
    },
  },
  {
    // 接单流程监控
    path: '/codeProcess',
    component: () => import('@/views/code-order/process/Process.vue'),
    meta: {
      hideTabBar: true,
    },
  },
  {
    // 官方程序详情页面
    path: '/officail/codeDetail',
    component: () =>
      import('@/views/code-order/officail-code-detail/OfficailCodeDetail.vue'),
    meta: {
      hideTabBar: true,
    },
  },
  {
    // 匹配搭子页面
    path: '/match/friend',
    component: () =>
      import(
        '@/views/hall/child/metch-hall/child/match-friend/MatchFriend.vue'
      ),
    meta: {
      hideTabBar: true,
    },
  },
  {
    // 搜索搭子的页面
    path: '/search/friend',
    component: () =>
      import(
        '@/views/hall/child/metch-hall/child/search-friend/SearchFriend.vue'
      ),
    meta: {
      hideTabBar: true,
    },
  },
  {
    // 搜索搭子结果页面
    path: '/search/friend/result',
    component: () =>
      import(
        '@/views/hall/child/metch-hall/child/search-friend-result/SearchFriendResult.vue'
      ),
    meta: {
      hideTabBar: true,
    },
  },
  {
    // 创建队伍页面
    path: '/create/contingent',
    component: () =>
      import(
        '@/views/hall/child/metch-hall/child/create-contingent/CreateContingent.vue'
      ),
    meta: {
      hideTabBar: true,
    },
  },
  {
    // 更改头像界面
    path: '/switch/headImg',
    component: () =>
      import('@/views/person-info/child/switch-info/SwitchInfo.vue'),
    meta: {
      hideTabBar: true,
    },
  },
  {
    // 匹配组队页面
    path: '/match/contingent',
    component: () =>
      import(
        '@/views/hall/child/metch-hall/child/find-contingent/FindContingent.vue'
      ),
    meta: {
      hideTabBar: true,
    },
  },
  {
    // 我的组队界面
    path: '/myContingent',
    component: () => import('@/views/person/my-contingent/MyContingent.vue'),
    meta: {
      hideTabBar: true,
    },
  },
  {
    // 智能BI
    path: '/aibi',
    component: () => import('@/views/hall/child/recommend/ai-bi/AIBI.vue'),
    meta: {
      hideTabBar: true,
    },
  },
  {
    // 智能AI聊天
    path: '/aichart',
    component: () =>
      import('@/views/hall/child/recommend/ai-chart/AiChart.vue'),
    meta: {
      hideTabBar: true,
    },
  },
  {
    // 全部商品页面
    path: '/allCommodity',
    component: () =>
      import('@/views/hall/child/official-store/commodity/Commodity.vue'),
    meta: {
      hideTabBar: true,
    },
  },
  {
    // 编程学习界面
    path: '/code/study',
    component: () =>
      import('@/views/hall/child/recommend/code-study/CodeStudy.vue'),
    meta: {
      hideTabBar: true,
    },
  },
]
