import Vue from 'vue'
import Router from 'vue-router'
// import Mainadmin from '@/components/login/main'
Mainadmin:resolve =>require(['@/components/login/main'],resolve)
import login from '@/components/login/login'
login:resolve =>require(['@/components/login/login'],resolve)
// import Comment from '@/components/comment/comment'
Comment:resolve =>require(['@/components/comment/comment'],resolve)
// import Shopcar from '@/components/shopcar/shopcar'
Shopcar:resolve =>require(['@/components/shopcar/shopcar'],resolve)
import User from '@/components/user/user'
User:resolve =>require(['@/components/user/user'],resolve)
import Product from '@/components/product/product'
Product:resolve =>require(['@/components/product/product'],resolve)
import Book from '@/components/book/book'
import Address from '@/components/address/address'
import Pass from '@/components/pass/pass'
Vue.use(Router)

export default new Router({
  routes: [

    {
      path: '/',
      redirect:'/user',
      name: 'Mainadmin',
      component: Mainadmin,
      children:[
        {
          path:'user',
          name:'User',
          component:User
        },
        {
          path:'comment',
          name:'Comment',
          component:Comment
        },
        {
          path:'shopcar',
          name:'Shopcar',
          component:Shopcar
        },
        {
          path:'product',
          name:'Product',
          component:Product
        },
        {
          path:'book',
          name:'Book',
          component:Book,
        },
        {
          path:'address',
          name:'Address',
          component:Address
        },
        {
          path:'pass',
          name:'Pass',
          component:Pass
        }

      ]
    },
    {
      path:'/login',
      name:'login',
      component:login
    },


  ]
})
