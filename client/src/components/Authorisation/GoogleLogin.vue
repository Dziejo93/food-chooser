<template/>

<script>
import AuthenticationService from '@/services/AuthenticationService'
import { mapActions } from 'vuex'
export default {
  data () {
    return {
      username: '',
      password: '',
      error: null
    }
  },

  async mounted () {
    try {
      const code = await this.$route.query.code
      console.log(code)
      const response = await AuthenticationService.postGoogleCode({ googleCode: code })
      if (response.data) {
        this.login(response.data)
      }
    } catch (err) {
      console.log(err)
    }
  },
  methods: {
    ...mapActions(['setToken', 'setUser']),
    login (response) {
      this.setToken(response.token)
      this.setUser(response.user)
      this.$router.push({ name: 'restaurants' })
    }
  } }
</script>
<style scoped>

</style>
