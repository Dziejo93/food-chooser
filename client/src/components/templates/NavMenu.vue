<template>
  <div id="wrapper">
    <div id="sidebar-wrapper">
      <li class="nav-item" v-b-toggle.collapse1 variant="primary">
        <b-nav-item active>
          <i id="icons" class="fas fa-utensils"></i>
          <b-nav-text>Restaurants</b-nav-text>
          <i id="header-icon" class="fas fa-angle-down"></i>
        </b-nav-item>
      </li>
      <b-collapse id="collapse1" class="m-auto">
        <ul class="list-unstyled">
          <li class="nav-item ">
            <b-nav-item variant="primary" active>
              <i id="icons" class="fas fa-user"></i>
              <b-link :to="{name:'users'}">Users</b-link>
            </b-nav-item>
          </li>
          <li class="nav-item">
            <b-nav-item active>
              <i id="icons" class="fas fa-utensils"></i>
              <b-link :to="{name:'restaurants'}">Restaurants</b-link>
            </b-nav-item>
          </li>
          <li class="nav-item">
            <b-nav-item active>
              <i id="icons" class="fas fa-shopping-bag"></i>
              <b-link :to="{name:'orders'}">Order</b-link>
            </b-nav-item>
          </li>

        </ul>
      </b-collapse>

    </div>

  </div>

  <!-- <div id="navBar" class="sidebar-sticky ">
    <div clas="col ">
      <ul class="list-unstyled">
        <li class="nav-item ">
          <b-nav-item active>
            <i id="icons" class="fas fa-user"></i>
            <b-link :to="{name:'users'}">Users</b-link>
          </b-nav-item>
        </li>
        <li class="nav-item">
          <b-nav-item active>
            <i id="icons" class="fas fa-utensils"></i>
            <b-link :to="{name:'restaurants'}">Restaurants</b-link>
          </b-nav-item>
        </li>
        <li class="nav-item">
          <b-nav-item active>
            <i id="icons" class="fas fa-shopping-bag"></i>
            <b-link :to="{name:'orders'}">Order</b-link>
          </b-nav-item>
        </li>

      </ul>
    </div>
  </div> -->
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
  position: absolute;
  right: 20%;
  top: 15px;
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
