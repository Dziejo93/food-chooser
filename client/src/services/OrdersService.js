import Api from '@/services/Api'

export default {
  getOrders () {
    return Api().get('orders')
  },
  postNewOrder (orderData) {
    return Api().post('orders', orderData)
  },
  getOrderById (orderId) {
    return Api().get(`orders/${orderId}`)
  }

}
