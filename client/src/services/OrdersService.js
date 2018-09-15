import Api from '@/services/Api'

export default {
  getOrders () {
    return Api().get('orders')
  },
  postNewOrder (issuerId) {
    return Api().post('orders', issuerId)
  }

}
