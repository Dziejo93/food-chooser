<template>
  <panel title="Login">
    <div class="container">
      <div class="row">
        <div class="col mx-auto">
          <form>
            <div class="form-group">
              <input
                v-model="username"
                type="text"
                label="username"
                placeholder="login"
                class="form-control">
            </div>
            <div class="form-group pass_show">
              <input
                v-model="password"
                type="password"
                label="password"
                placeholder="password"
                class="form-control">
            </div>
            <div
              class="danger-alert"
              v-html="error" /><br>
            <b-btn @click="login">Login</b-btn>
            <google-login-button/>

          </form>
        </div>
      </div>
    </div>
  </panel>
</template>

<script>
import GoogleLoginButton from '@/components/templates/GoogleLoginButton';
import AuthenticationService from '@/services/AuthenticationService';
import Panel from '@/components/templates/Panel';
import Dialog from '@/components/templates/Dialog';
export default {
  components: {
    Panel,
    Dialog,
    GoogleLoginButton
  },
  data () {
    return {
      username: '',
      password: '',
      error: null
    }
  },
  methods: {
    async login () {
      try {
        const response = await AuthenticationService.login({
          username: this.username,
          password: this.password
        })
        this.$store.dispatch('setToken', response.data.token)
        this.$store.dispatch('setUser', response.data.user)
      } catch (err) {
        this.error = err.response.data.message
      }
    }
  }
}
</script>

<!-- Add "
              attribute
              to
              limit
              css
              to
              this
              component
              only
              -->
<style scoped>
</style>
