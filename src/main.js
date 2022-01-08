import Vue from 'vue'
import App from './App.vue'
import * as VueGoogleMaps from 'vue2-google-maps'
import router from './router'
import store from './store'
Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyAtwtSCz3zPqzBp7tVqfsQD2LnskxjGGWw',
    libraries: 'places',
  }
});
console.log(Vue.version);
Vue.config.productionTip = false


const vue = new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')

export default vue