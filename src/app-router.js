import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from './components/Home'
import Register from './components/Register'

Vue.use(VueRouter)


const routes = [
  { path: '/', component:  Home },
  { path: '/register', component:  Register },
]

export default new VueRouter({
  routes
});
