<template>
  <div class="text-xs-center">
    <v-dialog v-model="dialog" width="500">

      <v-card>
        <v-card-title class="headline grey lighten-2" primary-title>
          Privacy Policy
        </v-card-title>

        <v-card-text>
          Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running.
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" flat @click="dialog = false">
            I accept
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  data () {
    return {
      dialog: false
    }
  }
}
</script>

<style scoped>
</style>
