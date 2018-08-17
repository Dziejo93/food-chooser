<template>
  <panel title="Register">
    <v-container>
      <form name="tab-tracker-form" autocomplete="off">
        <v-text-field label="Username" outline v-model="username"></v-text-field>
        <br>
        <v-text-field label="Password" outline type="password" v-model="password" autocomplete="new-password"></v-text-field>
      </form>
      <br>
      <div class="danger-alert" v-html="error" />
      <br>
      <v-btn dark class="cyan" @click="register">
        Register
      </v-btn>
    </v-container>
  </panel>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'
import Panel from '@/components/templates/Panel'
export default { components: {
  Panel
},
data () {
  return {
    username: '',
    password: '',
    error: null
  }
},
methods: {
  async register () {
    try {
      await AuthenticationService.register({
        username: this.username,
        password: this.password
      })
    } catch (err) {
      this.error = err.response.data.message
    }
  }
}

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.toolbar {
  width: 10%;
}
</style>
