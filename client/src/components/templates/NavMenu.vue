<template>
  <div id="wrapper">
    <div id="sidebar-wrapper">
      <li class="nav-item" v-b-toggle.restaurant-collapse variant="primary">
        <!-- restaurant collapse -->
        <b-nav-item active>
          <i id="icons" class="fas fa-utensils"></i>
          <b-nav-text>Restaurants</b-nav-text>
          <i id="header-icon" class="fas fa-angle-down"></i>
        </b-nav-item>
      </li>
      <b-collapse id="restaurant-collapse" class="m-auto">
        <ul class="list-unstyled">
          <li class="nav-item ">
            <b-nav-item variant="primary" active>
              <i id="icons" class="fas fa-shopping-cart"></i>
              <b-link :to="{name:'restaurants'}">Browse restaurants</b-link>
            </b-nav-item>
          </li>
          <li class="nav-item">
            <b-nav-item active>
              <i id="icons" class="fas fa-cart-plus"></i>
              <b-link :to="{name:'add-restaurant'}">Add restaurant</b-link>
            </b-nav-item>
          </li>
          <li class="nav-item">
            <b-nav-item active>
              <i id="icons" class="fas fa-edit"></i>
              <b-link :to="{name:'edit-restaurant'}">Edit restaurant</b-link>
            </b-nav-item>
          </li>
        </ul>
      </b-collapse>
      <!-- restuarant end -->
      <!-- orders start -->
      <li class="nav-item" v-b-toggle.order-collapse variant="primary">
        <b-nav-item active>
          <i id="icons" class="fas fa-shopping-cart"></i>
          <b-nav-text>Orders</b-nav-text>
          <i id="header-icon" class="fas fa-angle-down"></i>
        </b-nav-item>
      </li>
      <b-collapse id="order-collapse" class="m-auto">
        <ul class="list-unstyled">
          <li class="nav-item ">
            <b-nav-item variant="primary" active>
              <i id="icons" class="fas fa-folder-openr"></i>
              <b-link :to="{name:'orders'}">Browse orders</b-link>
            </b-nav-item>
          </li>
          <li class="nav-item">
            <b-nav-item active>
              <i id="icons" class="fas fa-folder-plus"></i>
              <b-link :to="{name:'add-order'}">Restaurants</b-link>
            </b-nav-item>
          </li>
        </ul>
      </b-collapse>
      <!-- orders end -->
      <li class="nav-item" v-b-toggle.users-collapse variant="primary">
        <b-nav-item active>
          <i id="icons" class="fas fa-users"></i>
          <b-nav-text>Users</b-nav-text>
          <i id="header-icon" class="fas fa-angle-down"></i>
        </b-nav-item>
      </li>
      <b-collapse id="users-collapse" class="m-auto">
        <ul class="list-unstyled">
          <li class="nav-item ">
            <b-nav-item variant="primary" active>
              <i id="icons" class="fas fa-users"></i>
              <b-link :to="{name:'users'}">Browse</b-link>
            </b-nav-item>
          </li>
          <li class="nav-item">
            <b-nav-item active>
              <i id="icons" class="fas fa-user-times"></i>
              <b-link :to="{name:'delete-user'}">Delete user</b-link>
            </b-nav-item>
          </li>
          <li class="nav-item">
            <b-nav-item active>
              <i id="icons" class="fas fa-users-cog "></i>
              <b-link :to="{name:'change-user'}">Change user</b-link>
            </b-nav-item>
          </li>
        </ul>
      </b-collapse>
    </div>

  </div>
</template>

<script>
export default { data () {
  return {}
},

components: {}}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#nav-item-header {
  text-align: center;
}

.nav-item #icons {
  position: relative;
  top: 5px;
}

.nav-item #header-icon {
  width: 24px;
  height: 24px;
  stroke: currentcolor;
  fill: none;
  position: relative;
  top: 4px;
}

#icons {
  width: 24px;
  height: 24px;
  stroke: currentcolor;
  fill: none;
}

@media (min-width: 992px) {
  #wrapper {
    padding-left: 225px;
  }
}

@media (min-width: 992px) {
  #wrapper #sidebar-wrapper {
    width: 225px;
  }
}

#sidebar-wrapper {
  border-right: 1px solid #e7e7e7;
}

#sidebar-wrapper {
  z-index: 1000;
  position: fixed;
  left: 225px;
  width: 0;
  height: 100%;
  margin-left: -225px;
  overflow-y: auto;
  background: #f8f8f8;
  -webkit-transition: all 0.5s ease;
  -moz-transition: all 0.5s ease;
  -o-transition: all 0.5s ease;
  transition: all 0.5s ease;
}
</style>
