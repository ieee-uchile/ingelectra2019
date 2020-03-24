import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from './components/Home'
import Register from './components/Register'
import Paper from './components/Papers'
import Visit from './components/Visit'
import Charlas from './components/Charlas'
import Instrucciones from './components/Instrucciones'

Vue.use(VueRouter)


const routes = [
  { path: '/', component:  Home },
  { path: '/register', component:  Register },
  { path: '/callpapers', component:  Paper },
  { path: '/instrucciones', component:  Instrucciones },
  { path: '/visit', component:  Visit },
  { path: '/charlas', component:  Charlas },
]

export default new VueRouter({
  routes
});
