import Vue from 'vue';
import Router from 'vue-router';
import home from 'components/home/home';
// import series from 'components/seriesTemplate/seriesTemplate'
import product from 'components/product/product';
import recommend from 'components/recommend/recommend';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/recommend'
    },
    {
      path: '/recommend',
      component: recommend,
      mate: { keepAlive: true }
    },
    {
      path: '/home',
      component: home,
      children: [
        {
          path: ':id',
          component: product
        }
      ]
    }
  ]
});
