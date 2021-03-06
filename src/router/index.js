import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import Guard from './middlewares'

export default new Router({
  routes: [
    {
      path: '/',
      component: require('@/components/signin').default,
    },
    {
      path: '/error',
      component: require('@/components/error').default
    },
    {
      path: '/adminDashboard',
      component: require('@/components/adminDashboard').default,
     beforeEnter: Guard.authAdmin,
      children:[

        {
          path: '/',
          component: require('@/components/adminHome').default,
        },
        {
          path: '/addStudent',
          component: require('@/components/addStudent').default,
        },
        {
            path: '/viewStudents',
            component: require('@/components/viewStudents').default,
          },
        {
          path: '/addQues',
          component: require('@/components/addQues').default,
        },
        {
          path: '/addExam',
          component: require('@/components/addExam').default,
        },
        {
          path: '/viewExam',
          component: require('@/components/viewExam').default,
        },
        {
          path: '/viewQues',
          component: require('@/components/viewQues').default,
        },
        {
          path: '/viewBulkAnalytics',
          component: require('@/components/viewBulkAnalytics').default,
        }
      ]
    },
    {
      path: '/studentDashboard',
      component: require('@/components/studentDashboard').default,
      beforeEnter: Guard.authStudent,
      children:[

        {
          path: '/',
          component: require('@/components/studentHome').default,
        },
        {
          path: '/viewResult',
          component: require('@/components/viewResult').default,
        }
      ]
    },
    {
      path: '/dashboard',
      component: require('@/components/signin').default
    }
  ]
})
