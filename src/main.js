import Vue from 'vue'
import App from './App.vue'
import myMessage from './components/MyMessage/myMessage'

Vue.prototype.$prompt = myMessage

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
