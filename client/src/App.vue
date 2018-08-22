<template>
  <div id="app">
    <page-header/>

    <div id="left" class="row">
      <div class="col-md-auto border border-primary rounded ">

        <nav-menu/>
      </div>
      <main class="col m-2 " role="main">
        <router-view />
      </main>
    </div>

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
.danger-alert {
  color: red;
}

.home {
  cursor: pointer;
}
</style>
