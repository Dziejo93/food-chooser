import Auth from '@/services/Auth'

export default {
  register (credentials) {
    return Auth().post('register', credentials)
  }
}
