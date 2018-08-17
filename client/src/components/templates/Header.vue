<template>
    <v-toolbar dark color=light-blue darken-1>
        <v-toolbar-items>
            <v-btn flat dark @click="navigateTo('root')"> totalnie</v-btn>
        </v-toolbar-items>

        <v-toolbar-title class="white--text">food-chooser</v-toolbar-title>

        <v-spacer></v-spacer>
        <!--Change this m8-->
        <v-toolbar-items>
            <v-btn v-if="!$store.state.isUserLoggedIn" flat dark :to="{name:'register'}">
                Sign up
            </v-btn>
            <v-btn v-if="!$store.state.isUserLoggedIn" flat dark :to="{name:'login'}">
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
.v-toolbar {
  color: rgb(83, 153, 51);
}
</style>
