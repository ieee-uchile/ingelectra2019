import VueAnalytics from 'vue-analytics'
import vuetify from './plugins/vuetify'
import VueRouter from 'vue-router'
import router from './app-router'
import App from './App.vue'
import Vue from 'vue'

Vue.use(VueRouter)

Vue.use(VueAnalytics, {
  id: 'UA-130123561-1',
})


Vue.config.productionTip = false

new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')
