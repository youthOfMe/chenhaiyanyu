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
    name: 'editPersonInfo',
    path: '/editPersonInfo',
    component: () => import('@/views/edit-person-info/EditPersonInfo.vue'),
    meta: {
      hideTabBar: true,
    },
  },
  {
    path: '/commodity',
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
    component: () => import('@/views/post-detail/PostDetail.vue'),
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
]
