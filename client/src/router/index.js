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
  },
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
    component: ViewRestaurant
  }, {
    path: '/restaurants/add-restaurant',
    name: 'add-restaurant',
    component: AddRestaurant
  }, { path: '/google',
    name: 'google-login',
    component: GoogleLogin }

  ]
})
