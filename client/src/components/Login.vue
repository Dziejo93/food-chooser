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
            <google-login-button
              "@done="onUserLoggedIn/>>
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
export default {
  components: {
    Panel,
    Dialog,
    GoogleLoginButton
  },
  data() {
    return {
      username: '',
      password: '',
      error: null,
      googleSignInParams: {
        client_id: 'YOUR_APP_CLIENT_ID.apps.googleusercontent.com'
      }
    }
  },
  methods: {
    async login() {
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
    },
    onSignInSuccess (googleUser) {
      // `googleUser` is the GoogleUser object that represents the just-signed-in user.
      // See https://developers.google.com/identity/sign-in/web/reference#users
      const profile = googleUser.getBasicProfile() // etc etc
    },
    onSignInError (error) {
      // `error` contains any error occurred.
      console.log('OH NOES', error)
    }

  },


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
                .g-signin-button {
                /* This is where you control how the button looks. Be creative! */
                display: inline-block;
                padding: 4px 8px;
                border-radius: 3px;
                background-color: #3c82f7;
                color: #fff;
                box-shadow: 0 3px 0 #0f69ff;
                }
              </style>
</google-login-button></form></div></google-login-button></form></div></div></panel></google-login-button></form></div></div></div></template>