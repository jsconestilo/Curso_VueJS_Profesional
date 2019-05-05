import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'

import msToMn from '@/filters/ms-to-mn'
import blur from '@/directives/blur'

import routes from '@/routes'
import store from '@/store'
import i18n from '@/i18n'

import EventBus from '@/plugins/event-bus'

Vue.use(VueRouter)
Vue.use(EventBus)
Vue.use(msToMn)
Vue.use(blur)

const router = new VueRouter({
  routes,
  // Para indicar que no aparezca el /# Pero esto debe ser compatible con el servidor donde se aloja la app
  mode: 'history'
})

new Vue({
  el: '#app',
  render: h => h(App),
  router,
  store,
  i18n
})
