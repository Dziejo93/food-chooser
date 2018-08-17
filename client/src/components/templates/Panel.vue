<template>
  <v-layout align-space-between justify-center>
    <v-flex xs6>
      <div class="white elevation-2" align-center justify-center>
        <v-toolbar dark color=light-blue darken-1>
          <v-toolbar-title>{{title}}</v-toolbar-title>
        </v-toolbar>
        <slot>No content</slot>
      </div>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  props: [
    'title'
  ]
}
</script>

<style scoped>
.toolbar {
  width: 10%;
}
</style>
