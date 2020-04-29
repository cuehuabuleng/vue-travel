import Vue from 'vue'
import VueAwesomeSwiper from 'vue-awesome-swiper';
import store from './store'
import 'swiper/dist/css/swiper.css'
import App from './App.vue'
import router from './router/index' ;
import './assets/styles/reset.css'
import './assets/styles/border.css'
import './assets/styles/iconfont.css'
import 'babel-polyfill';
import FastClick  from 'fastclick';
FastClick.attach(document.body);
FastClick.attach(document.body)
Vue.config.productionTip = false
Vue.use(VueAwesomeSwiper, /* { default global options } */)
new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
