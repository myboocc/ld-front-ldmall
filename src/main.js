import Vue from 'vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import App from './App';
import home from 'components/home/home';
import ratingMode from 'components/ratingMode/ratingMode';
import seller from 'components/seller/seller';
import series from 'components/seriesTemplate/seriesTemplate';

import 'common/stylus/index.css';
import 'common/stylus/index.styl';
import 'common/stylus/swiper.min.css';

Vue.use(VueRouter);
Vue.use(VueResource);

let app = Vue.extend(App);

let router = new VueRouter({
	linkActiveClass: 'active'
});

router.map({
	'/home': {
		component: home
	},
	'/ratingMode': {
		component: ratingMode
	},
  '/seller': {
    component: seller
  },
  '/series': {
    component: series
  }
});

router.start(app, '#app');
// router.go('/goods');
