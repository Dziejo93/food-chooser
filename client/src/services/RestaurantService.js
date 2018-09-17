import Api from '@/services/Api'

export default {
  getRestaurants () {
    return Api().get('restaurants')
  },
  getRestaurant (restaurantId) {
    return Api().get(`restaurants/${restaurantId}`)
  },
  getRestaurantWithProducts (restaurantId) {
    return Api().get(`restaurants/${restaurantId}/products`)
  }
}
