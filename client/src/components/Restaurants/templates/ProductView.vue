<template>
  <section>
    <div class="container">
      <div class="card flex-md-row mb-1">
        <div class="card-body d-flex flex-column align-items-start">
          <h4 class="card-title"><slot name="product-title"/></h4>
          <p class="card-text"><slot name="product-text"/></p>
          <slot name="product-btn-grp"/>
        </div>
        <slot name="product-image"/>
      </div>
    </div>
  </section>
</template>
<script>
export default {}
</script>
<style scoped>

</style>
