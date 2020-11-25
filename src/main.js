import Vue from 'vue'
import App from './App.vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
// Bootstrap
//import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
// Fontawesome
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'
// Loadash
import VueLodash from 'vue-lodash'
import lodash from 'lodash'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

// BootstrapVue
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
// VueLoadash
Vue.use(VueLodash, { name: 'custom' , lodash: lodash })
