<template>
  <div id="app">
    <v-app>
      <page-header />
      <v-layout>
        <nav-menu/>
        <router-view/>
      </v-layout>

    </v-app>
  </div>
</template>

<script>
import PageHeader from '@/components/templates/Header'
import NavMenu from '@/components/templates/NavMenu'
export default {
  name: 'App',
  components: {
    PageHeader,
    NavMenu
  }
}
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.danger-alert {
  color: red;
}
.home {
  cursor: pointer;
}
</style>
