import Vue from 'vue'
import App from './App.vue'
import * as VueGoogleMaps from 'vue2-google-maps'
import router from './router'
import store from './store'
import {func} from './utils/func.js'
import './utils/recipeMixin'
import './utils/userMixin'


Vue.prototype.$func = func

Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyAtwtSCz3zPqzBp7tVqfsQD2LnskxjGGWw',
    libraries: 'places',
  }
});

Vue.config.productionTip = false



const vue = new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')

export default vue