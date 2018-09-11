import Api from '@/services/Api'

export default {
  register (credentials) {
    return Api().post('register', credentials)
  },
  login (credentials) {
    return Api().post('login', credentials)
  },
  getGoogleUrl () {
    return Api().get('google')
  },
  postGoogleCode (googleCode) {
    return Api().post('google', googleCode)
  }
}
