import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Register from '@/components/Register'
import Login from '@/components/Login'
import User from '@/components/Users/User'
import RestaurantsIndex from '@/components/Restaurants/RestaurantsIndex'
import ViewRestaurant from '@/components/Restaurants/ViewRestaurant'
import AddRestaurant from '@/components/Restaurants/AddRestaurant'
Vue.use(Router)

export default new Router({
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
      component: User
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
    }

  ]
})
