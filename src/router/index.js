import Vue from 'vue'
import Router from 'vue-router'
import Mainadmin from '@/components/login/main'
import login from '@/components/login/login'
import Comment from '@/components/comment/comment'
import Shopcar from '@/components/shopcar/shopcar'
import User from '@/components/user/user'
import Product from '@/components/product/product'
import Book from '@/components/book/book'
import Address from '@/components/address/address'

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
