<template>

  <div class="card  shadow center-block m-auto ">
    <div
      class="card-header"
      justify-content-center>
      <h4 class="lead">{{ title }}</h4>
    </div>
    <div class="card-body">
      <slot/>
    </div>
  </div>
</template>

<script>
export default {
  props: [
    'title'
  ]
}
</script>

<style scoped>
.card {
  box-shadow: 10;
  width: 50%;
}
.card-header {
  text-align: center;
  color: white;
  background-color: #007bff;
  flood-color: aqua;
}
</style>
