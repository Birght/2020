import Layout from '@/layout'
export default [
  {
    path: '/',
    redirect: '/home',
    component: Layout
  },
  {
    path: '/static',
    redirect: '/doc',
    meta: {
      title: '综合',
      icon: 'el-icon-s-platform'
    },
    component: Layout,
    children: [
      {
        path: '/home',
        name: 'home',
        meta: {
          title: '主页',
          icon: 'el-icon-menu'
        },
        component: () => import('@/views/home/index.vue')
      },
      {
        path: '/doc',
        name: 'doc',
        meta: {
          title: '文档',
          icon: 'el-icon-thumb'
        },
        component: () => import('@/views/demo/doc')
      },
      {
        path: '/unit',
        name: 'unit',
        meta: {
          title: '统计',
          icon: 'el-icon-s-data'
        },
        component: () => import('@/views/demo/svgdemo.vue')
      },
      {
        path: '/ie8',
        name: 'ie8',
        meta: {
          title: 'ie8兼容',
          icon: 'el-icon-help'
        },
        component: () => import('@/views/sections/ie8.vue')
      },
      {
        path: '/mv',
        name: 'mv',
        meta: {
          title: '视频播放',
          icon: 'el-icon-help'
        },
        component: () => import('@/views/sections/mv.vue')
      }
    ]
  }
]
