<template>
  <div id="app">
    <page-header/>

    <div
      id="left"
      class="row">

      <nav-menu/>

      <main
        class="col m-2 "
        role="main">
        <router-view />
      </main>
    </div>

  </div>
</template>

<script>
import PageHeader from '@/components/templates/Header';
import NavMenu from '@/components/templates/NavMenu';
export default {
  name: 'App',
  components: {
    PageHeader,
    NavMenu
  }
}
</script>

<style>
.danger-alert {
  color: red;
}

.home {
  cursor: pointer;
}
</style>
