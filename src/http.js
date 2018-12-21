import Vue from 'vue'
import axios from 'axios'
import config from './config'

// config.api="http://api.ecommerce.com"
axios.defaults.baseURL = config.api; // 设置axios的基础请求路径
axios.defaults.timeout = 2000; // 设置axios的请求时间

// axios.interceptors.request.use(function (config) {
//   // console.log(config);
//   return config;
// })

axios.loadData = async function (url) {
  const resp = await axios.get(url);
  return resp.data;
}
// axios 是负责ajax请求的插件,此处就是为Vue增加axios能力
// prototype是为Vue对象,强制增加一个属性$http
// 所以其他页面可以通过Vue.$http来指代axios
// 同时在其他页面,方法内this指代的就是Vue对象
// 因而其他页面可以通过this.$http 即可实现Ajax请求
Vue.prototype.$http = axios;// 将axios添加到 Vue的原型，这样一切vue实例都可以使用该对象

