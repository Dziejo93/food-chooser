<template>

    <v-toolbar dark color="primary">
        <v-toolbar-items>
            <v-btn flat dark> Menu</v-btn>
        </v-toolbar-items>

        <v-toolbar-title class="white--text">food-chooser</v-toolbar-title>

        <v-spacer></v-spacer>
        <v-toolbar-items>
            <v-btn flat dark @click="navigateTo('register')">
                Sign up
            </v-btn>
        </v-toolbar-items>
        <v-toolbar-items>
            <v-btn flat dark @click="navigateTo('login')">
                Login
            </v-btn>
        </v-toolbar-items>
    </v-toolbar>

</template>

<script>
export default {
  methods: { navigateTo (route) {
    this.$router.push(route)
  } }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
