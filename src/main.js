import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import VueAxios from 'vue-axios'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import './custom.scss'
import TextareaAutosize from 'vue-textarea-autosize'
 
Vue.use(TextareaAutosize)
Vue.use(BootstrapVue)
Vue.config.productionTip = false
Vue.use(VueAxios,  axios)


Vue.filter('capitalize', function (value) {
  if (!value) return ''
  value = value.toString()
  return value.charAt(0).toUpperCase() + value.slice(1)
})

axios.defaults.baseURL = 'http://localhost:8000/api'
const token = localStorage.getItem('Authorization')
if (token) {
  Vue.prototype.$http.defaults.headers.common['Authorization'] = token
}

new Vue({
  router,
  store,
  methods: {
    isAuthenticate : function(){
      if(localStorage.getItem("Authorization")){
      let conf = { headers : {"Authorization" : "Bearer " + localStorage.getItem("Authorization")} };
      this.axios.get("/login/check", conf)
      .then(response => {
      if(response.data.auth == false || response.data.status == 0){
      this.$store.commit('logout')
      } else {
      this.$store.commit('userDetail', response.data.user)
      }
      })
      .catch(error => {
      this.$store.commit('logout')
      });
      } else {
      this.$store.commit('logout')
      }
      },
  },
  mounted(){
    this.isAuthenticate()
  },
  render: h => h(App)
}).$mount('#app')
