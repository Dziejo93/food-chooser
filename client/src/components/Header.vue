<template>
    <v-toolbar dark color="primary">
        <v-toolbar-items>
            <v-btn flat dark @click="navigateTo('HelloWorld')"> Menu</v-btn>
        </v-toolbar-items>

        <v-toolbar-title class="white--text">food-chooser</v-toolbar-title>

        <v-spacer></v-spacer>
        <v-toolbar-items>
            <v-btn v-if="!$store.state.isUserLoggedIn" flat dark @click="navigateTo('register')">
                Sign up
            </v-btn>
            <v-btn v-if="!$store.state.isUserLoggedIn" flat dark @click="navigateTo('login')">
                Login
            </v-btn>
            <v-btn v-if="$store.state.isUserLoggedIn" flat dark @click="logOut">
                LogOut
            </v-btn>
        </v-toolbar-items>

    </v-toolbar>
</template>

<script>
export default {
  methods: {
    navigateTo (route) {
      this.$router.push(route)
    },
    logOut () {
      this.$store.dispatch('setToken', null)
      this.$store.dispatch('setUser', null)
      this.$router.push({ name: 'root' })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
