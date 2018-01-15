import Vue from 'vue'
import App from './components/App'
import t from '../t'

Vue.prototype.$t = t

new Vue({
  el: '#app',
  render: h => h(App)
})
