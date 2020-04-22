import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../store'
import Navbar from '../components/Navbar.vue'
import Footer from '../components/Footer.vue'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Signup from '../views/Signup.vue'
import Service from '../views/Service.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    components: {default: Home, header: Navbar, footer: Footer}
  },
  {
    path: '/login',
    name: 'login',
    components: {default: Login}
  },
  {
    path: '/signup',
    name: 'signup',
    components: {default: Signup}
  },
  {
    path: '/service',
    name: 'service',
    components: {default: Service, header: Navbar, footer: Footer}
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: routes
})

router.beforeEach((to, from, next) => {
  if(to.matched.some(record => record.meta.requiresAuth)) {
    if (store.getters.isLoggedIn) {
      next()
      return
    }
    next('/login') 
  } else {
    next() 
  }
})


export default router
