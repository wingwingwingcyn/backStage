import Vue from 'vue'
import './plugins/axios'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/element.js'
import uploadone from '@/components/upload/uploadone'
import uploadmore from '@/components/upload/uploadmore'
import wyEditor from '@/components/editor'

Vue.config.productionTip = false
Vue.prototype.img = (path) => {
	return 'http://192.168.80.128:9000/images/' + path
}

Vue.component('uploadone',uploadone)
Vue.component('uploadmore',uploadmore)
Vue.component('WyEditor',wyEditor)
 
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
