import Vue from 'vue'
import Router from 'vue-router'
import index from '@/page/index'
import products from '@/page/new-products'
import news from '@/page/news'
import about from '@/page/about'
import sales from '@/page/sales-and-cooperation'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/products',
      name: 'products',
      component: products
    },
    {
      path: '/news',
      name: 'news',
      component: news
    },
    {
      path: '/about',
      name: 'about',
      component: about
    },
    {
      path: '/sales',
      name: 'sales',
      component: sales
    }
  ]
})
