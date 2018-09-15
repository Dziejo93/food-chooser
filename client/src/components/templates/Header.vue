<template>
  <b-navbar
    id="header"
    type="dark"
    variant="primary"
    toggleable
    sticky="True">
    <b-navbar-nav>
      <b-nav-item
        v-if="!$store.state.activeUser.isUserLoggedIn"
        :to="{name:'register'}">Register</b-nav-item>
      <b-nav-item
        v-if="!$store.state.activeUser.isUserLoggedIn"
        :to="{name:'login'}">Login</b-nav-item>
      <b-nav-item
        v-if="$store.state.activeUser.isUserLoggedIn"
        @click="logOut">Log Out</b-nav-item>
    </b-navbar-nav>
    <b-navbar-nav
      class="ml-auto"
      right>
      <b-nav-item
        v-if="$store.state.activeOrder.id"
        :to="{name:'order-view',params:{orderId:$store.state.activeOrder.id}}">
        {{ $store.state.activeOrder.id }}
      </b-nav-item>
    </b-navbar-nav>
  </b-navbar>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  methods: { ...mapActions(['setToken', 'setUser']),
    ...mapGetters(['currentActiveUser', 'currentActiveOrder']),
    logOut () {
      this.setToken(null)
      this.setUser(null)
      this.$router.push({
        name: 'login'
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#header {
  -webkit-box-shadow: 0 8px 6px -6px #999;
  -moz-box-shadow: 0 8px 6px -6px #999;
  box-shadow: 0 8px 6px -6px #999;
}
</style>
