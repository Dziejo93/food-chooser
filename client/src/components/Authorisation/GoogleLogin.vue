<template/>

<script>
import AuthenticationService from '@/services/AuthenticationService'
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
        console.log(response.data)

        this.$store.dispatch('setToken', response.data.token)
        this.$store.dispatch('setUser', response.data.currentUser._id)
      }
    } catch (err) {
      console.log(err)
    }
  } }
</script>
<style scoped>

</style>
