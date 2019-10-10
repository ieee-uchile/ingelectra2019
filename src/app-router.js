import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from './components/Home'
import Register from './components/Register'
import Paper from './components/Papers'
import Venue from './components/Venue'

Vue.use(VueRouter)


const routes = [
  { path: '/', component:  Home },
  { path: '/register', component:  Register },
  { path: '/callpapers', component:  Paper },
  { path: '/venue', component:  Venue },
]

export default new VueRouter({
  routes
});
