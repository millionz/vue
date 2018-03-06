import Vue from 'vue'
import Router from 'vue-router'
import index from '@/modules/index.vue'
import list from '@/modules/list.vue'
import detail from '@/modules/detail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path : '/',
      name : 'index',
      component : index
    },
    {
      path : '/index',
      name : 'index',
      component : index
    },
    {
      path : '/list',
      name : 'list',
      component : list
    },
    {
      path : '/detail',
      name : 'detail',
      component : detail
    }
  ]
})
