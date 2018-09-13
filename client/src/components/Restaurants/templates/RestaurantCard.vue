<template>
  <div class="container">
    <div class="card flex-row flex-wrap">
      <div class="card-header border-0 flex-auto">
        <slot name="card-image"/>
      </div>
      <div class="card-block px-2">
        <h4 class="card-title">
          <slot name="card-title"/>
        </h4>
        <p class="card-text">
          <slot name="card-body"/>
        </p>
        <slot name="button"/>
      </div>

    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.container .btn {
  right: 0;
  bottom: 0;
  position: absolute;
}

.card-image {
  float: left;
}
</style>
