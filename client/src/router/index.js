import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Register from '@/components/Authorisation/Register'
import Login from '@/components/Authorisation/Login'
import Profile from '@/components/Users/Profile'
import RestaurantsIndex from '@/components/Restaurants/RestaurantsIndex'
import ViewRestaurant from '@/components/Restaurants/ViewRestaurant'
import AddRestaurant from '@/components/Restaurants/AddRestaurant'
import GoogleLogin from '@/components/Authorisation/GoogleLogin'
// import EditRestaurant from '@/components/Restaurants/EditRestaurant'
import OrdersIndex from '@/components/Orders/OrdersIndex'
import OrderView from '@/components/Orders/OrderView'
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [{
    path: '/',
    name: 'HelloWorld',
    component: HelloWorld
  },
  {
    path: '/register',
    name: 'register',
    component: Register
  }, {
    path: '/login',
    name: 'login',
    component: Login
  }, { path: '/google',
    name: 'google-login',
    component: GoogleLogin },
  {
    path: '/user',
    name: 'user',
    component: Profile
  }, {
    path: '/restaurants',
    name: 'restaurants',
    component: RestaurantsIndex
  }, {
    path: '/restaurants/:restaurantId',
    name: 'restaurant',
    component: ViewRestaurant,
    props: true
  }, {
    path: '/restaurants/add-restaurant',
    name: 'add-restaurant',
    component: AddRestaurant },
  // }, {
  //   path: '/restaurants/:restaurantId',
  //   name: 'edit-restaurant',
  //   component: EditRestaurant,
  //   props: true
  // },
  { path: '/orders',
    name: 'orders-index',
    component: OrdersIndex },

  {
    path: '/orders/:orderId',
    name: 'order-view',
    component: OrderView
  }

  ]
})
