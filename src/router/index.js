import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../store'
import Navbar from '../components/Navbar.vue'
import Footer from '../components/Footer.vue'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Signup from '../views/Signup.vue'
import Service from '../views/Service.vue'
import DetailService from '../views/DetailService.vue'
import Detail from '../views/Detail.vue'
import About from '../views/About.vue'




Vue.use(VueRouter)

const routes = [
  {
    path: '/about',
    name: 'about',
    components: {default: About}
  },
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
  // {
  //   path: '/service/:id',
  //   name: 'service1',
  //   components: {default: DetailService, header: Navbar, footer: Footer},
  //   props: { default: true, header: false }
  // },
  {
    path: '/service/:id',
    name: 'serivcedetail',
    components: { default: DetailService, header: Navbar },
    props: { default: true, header: false }
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
