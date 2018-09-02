<template>

  <div id="navBar" class="sidebar-sticky ">
    <div clas="col ">
      <ul class="list-unstyled">
        <li class="nav-item ">
          <b-nav-item active>
            <svg style="width:24px;height:24px" stroke="currentColor" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M12,4A4,4 0 0,1 16,8A4,4 0 0,1 12,12A4,4 0 0,1 8,8A4,4 0 0,1 12,4M12,14C16.42,14 20,15.79 20,18V20H4V18C4,15.79 7.58,14 12,14Z" />
            </svg>
            <b-link :to="{name:'users'}">Users</b-link>
          </b-nav-item>
        </li>
        <li class="nav-item">
          <b-nav-item active>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-file">
              <path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"></path>
              <polyline points="13 2 13 9 20 9"></polyline>
            </svg>

            <b-link :to="{name:'restaurants'}">Restaurants</b-link>
          </b-nav-item>
        </li>
        <li class="nav-item">
          <b-nav-item active>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-shopping-cart">
              <circle cx="9" cy="21" r="1"></circle>
              <circle cx="20" cy="21" r="1"></circle>
              <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
            </svg>
            <b-link :to="{name:'orders'}">Order</b-link>
          </b-nav-item>
        </li>

      </ul>
    </div>
  </div>

</template>

<script>

export default {
  data () {
    return {

    }
  },

  components: {

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
