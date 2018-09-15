<template>
  <panel >
    <template slot="header">
      Login
    </template>
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
            <b-btn @click="getUrl">Google</b-btn>
          </form>
        </div>
      </div>
    </div>
  </panel>
</template>

<script>
import GoogleLoginButton from '@/components/templates/GoogleLoginButton'
import AuthenticationService from '@/services/AuthenticationService'
import Panel from '@/components/templates/Panel'
import Dialog from '@/components/templates/Dialog'
import { mapActions, mapGetters } from 'vuex'
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
    ...mapActions(['setToken', 'setUser']),
    async login () {
      try {
        const response = await AuthenticationService.login({
          username: this.username,
          password: this.password
        })
        this.setToken(response.data.token)
        this.setUser(response.data.user)
        this.$router.push({ name: 'restaurants' })
      } catch (err) {
        this.error = err.response.data.message
      }
    },
    async getUrl () {
      try {
        const url = await AuthenticationService.getGoogleUrl()
        console.log(url.data)
        window.location.href = url.data
      } catch (error) {

      }
    }
  }
}
</script>

<style scoped>

</style>
