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
  },
  {
    path: '/privateMsg',
    component: () => import('@/views/message/privateMsg/PrivateMsg.vue'),
  },
]
