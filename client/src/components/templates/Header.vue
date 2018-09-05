<template>

  <b-navbar id="header" type="dark" variant="primary" toggleable sticky="true">
    <b-navbar-nav>
      <b-nav-item v-if="!$store.state.isUserLoggedIn" :to="{name:'register'}">Register</b-nav-item>
      <b-nav-item v-if="!$store.state.isUserLoggedIn" :to="{name:'login'}">Login</b-nav-item>
      <b-nav-item v-if="$store.state.isUserLoggedIn" @click="logOut">Log Out</b-nav-item>
    </b-navbar-nav>

  </b-navbar>

</template>

<script>
export default { methods: { logOut () {
  this.$store.dispatch('setToken', null)
  this.$store.dispatch('setUser', null)
  this.$router.push({ name: 'root' })
} }}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#header {
  -webkit-box-shadow: 0 8px 6px -6px #999;
  -moz-box-shadow: 0 8px 6px -6px #999;
  box-shadow: 0 8px 6px -6px #999;
}
</style>
