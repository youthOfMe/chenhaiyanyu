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
    ],
  },
  {
    path: '/community',
    component: () => import('@/views/community/Community.vue'),
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
]
