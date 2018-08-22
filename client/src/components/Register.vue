<template>
  <panel title="Register">
    <div class="container">
      <div class="row">
        <div class="col mx-auto">
          <form>
            <div class="form-group">
              <input type="text" label="username" v-model="username" placeholder="login" class="form-control">
            </div>
            <div class="form-group pass_show">
              <input type="password" label="password" v-model="password" placeholder="password" class="form-control">
            </div>
            <div class="danger-alert" v-html="error" /><br>
            <b-btn @click="register">Register</b-btn>
          </form>
        </div>
      </div>
    </div>
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
      // if(response.data.message)
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
