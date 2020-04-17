let Bootstrap = require('./services/bootstrap');


import App from './App.vue'
import Routes from './routes';
import Vue from 'vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import axios from 'axios';

import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
// import './services/bootstrap';

global.jQuery = require('jquery');

Vue.use(VueRouter);
Vue.use(VueResource);

export const bus = new Vue();


Vue.config.productionTip = false;

Vue.http.headers.common['Content-Type'] = 'application/json'
Vue.http.headers.common['Access-Control-Allow-Origin'] = '*'
Vue.http.headers.common['Accept'] = 'application/json, text/plain, */*'
Vue.http.headers.common['Access-Control-Allow-Headers'] = 'Origin, Accept, Content-Type, Authorization, Access-Control-Allow-Origin'


axios.defaults.baseURL = 'http://localhost:3000/api/v1/';
axios.defaults.headers.common['Authorization'] = `bearer ${localStorage.token ? localStorage.token : ''}`;
axios.defaults.headers.post['Content-Type'] = 'application/json';




const router = new VueRouter({
  routes: Routes,
  mode: 'history'
})


new Vue({
  render: h => h(App),
  router: router

}).$mount('#app')

// const app = new Vue({
//   el: '#app',
//   router: router,
//   render: h => h(App)
// });
