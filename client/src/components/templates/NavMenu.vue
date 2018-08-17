<template>
  <v-navigation-drawer v-model="drawer" class="pb-0" floating hide-overlay width="380">
    <v-layout fill-height>
      <v-navigation-drawer dark mini-variant value="true">
        <v-toolbar flat class="transparent">
          <v-list class="pa-0">
            <v-list-tile avatar>

              <v-list-tile-avatar>
                <img src="https://randomuser.me/api/portraits/men/85.jpg">
              </v-list-tile-avatar>

              <v-list-tile-content>
                <v-list-tile-title>John Leider</v-list-tile-title>
              </v-list-tile-content>

            </v-list-tile>
          </v-list>
        </v-toolbar>

        <v-list class="pt-0" dense>
          <v-divider></v-divider>

        </v-list>
      </v-navigation-drawer>

      <v-list class="grow">
        <v-list-tile v-for="link in links" :key="link.name" :to=link.route>
          <v-list-tile-title v-text="link.name">
          </v-list-tile-title>
        </v-list-tile>
      </v-list>
    </v-layout>
  </v-navigation-drawer>
</template>

<script>
export default {
  data () {
    return {
      drawer: true,
      links: [{
        name: 'User',
        route: 'user'
      }, {
        name: 'Restaurant',
        route: 'restaurant'
      }, {
        name: 'Order',
        route: 'order'
      }],
      mini: true,
      right: null
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.drawer {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
