import Vue from 'vue'
import Router from 'vue-router'
import home from 'components/home/home'
import series from 'components/seriesTemplate/seriesTemplate'
import product from 'components/product/product'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      component: home,
      mate: { keepAlive: true }
    },
    {
      path: '/series',
      component: series
    },
    {
      path: '/product',
      component: product,
      mate: { keepAlive: false }
    }
  ]
})
