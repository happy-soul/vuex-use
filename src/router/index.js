import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import ComponentA from '@/components/component/A'
import ComponentB from '@/components/component/B'

Vue.use(Router)

export default new Router({
  routes: [
    {path: '/',name:'ComponentA',component:ComponentA},
    {path: '/001',name:'ComponentA',component:ComponentA},
    {path: '/002',name:'ComponentB',component:ComponentB}
  ]
})
