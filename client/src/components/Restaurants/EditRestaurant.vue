<template>
  <panel >
    <template slot="header">
      {{ restaurant.name }}
    </template>
    <slot>{{ restaurant.name }}</slot>
  </panel>
</template>

<script>

import RestaurantService from '@/services/RestaurantService'
import Panel from '@/components/templates/Panel'
export default { components: { Panel },
  data () {
    return { restaurant: {} }
  },
  async mounted () {
    const restaurantId = this.$store.state.route.params.restaurantId
    const restaurantResponse = await RestaurantService.getRestaurant(restaurantId)
    this.restaurant = restaurantResponse.data.restaurant
  } }
</script>

<style scoped>
.album-image {
  
  height: 200px;
  width: 200px;
}
</style>
