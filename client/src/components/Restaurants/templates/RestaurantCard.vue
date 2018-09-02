<template>
    <div class="container">
        <div class="card flex-row flex-wrap">
            <div class="card-header border-0 flex-auto">
                <slot name="card-image"></slot>

            </div>
            <div class="card-block px-2">
                <h4 class="card-title">
                    <slot name="card-title"></slot>
                </h4>
                <p class="card-text">
                    <slot name="card-body"></slot>
                </p>
                <a href="#" class="btn btn-primary">Browse</a>
            </div>

        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.btn {
  position: absolute;
  right: 0;
  bottom: 0;
  margin-block-end: 1%;
  margin-right: 1%;
}

.card-image {
  float: left;

  width: 25%;
  height: 150px;
}
</style>
