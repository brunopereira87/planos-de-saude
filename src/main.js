import Vue from 'vue'
import VueFormulate from '@braid/vue-formulate';
import App from './App.vue'

Vue.config.productionTip = false
Vue.use(VueFormulate)

new Vue({
  render: h => h(App),
}).$mount('#app')
