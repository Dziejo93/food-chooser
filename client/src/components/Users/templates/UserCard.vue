<template>
  <b-container><b-img
    rounded="circle"
    fluid
    center
    width="200"
    height="200"
    alt="img"
    src="https://picsum.photos/250/250/?image=54"
    class="m-1" />
    <h1><slot name="name"/></h1>
    <h2><slot name="createdAt"/></h2>
    <slot name="affiliation"/>
  </b-container>
</template>
<script>
export default {

}
</script>

<style scoped>

</style>
