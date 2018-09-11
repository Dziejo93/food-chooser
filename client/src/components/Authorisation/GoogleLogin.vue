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
    const code = await this.$route.query.code

    console.log(code)
    const response = AuthenticationService.postGoogleCode({ googleCode: code })
  }
}
</script>
<style scoped>

</style>
