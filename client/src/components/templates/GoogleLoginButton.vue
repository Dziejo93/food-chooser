<template>
  <div 
    ref="signinBtn" 
    class="btn-sign-in">Sign In</div>
</template>


<script>
export default {
mounted () {
    window.gapi.load('auth2', () => {
      const auth2 = window.gapi.auth2.init({
        client_id: 'YOUR-CLIENT-ID-HERE.apps.googleusercontent.com',
        cookiepolicy: 'single_host_origin'
      })
      auth2.attachClickHandler(this.$refs.signinBtn, {}, googleUser => {
        this.$emit('done', googleUser)
      }, error => console.log(error))
    })
  }
}
</script>

<style scoped>
</style>
