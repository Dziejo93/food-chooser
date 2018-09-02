import Api from '@/services/Api'

export default {
  getRestaurants () {
    return Api().get('restaurants')
  }
}
