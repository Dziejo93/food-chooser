<template>

  <panel :title="restaurant.name" >
    <div
      v-for="product in restaurant.products"
      :key="product.id"><template name="card-title" >{{ product.name }}</template></div>

  </panel>
</template>

<script>

import RestaurantService from '@/services/RestaurantService'
import Panel from '@/components/templates/Panel'
export default {
  components: {
    Panel
  },
  data () {
    return {
      restaurant: {}
    }
  },
  async mounted () {
    const restaurantId = this.$store.state.route.params.restaurantId
    const restaurantResponse = await RestaurantService.getRestaurant(restaurantId)
    this.restaurant = restaurantResponse.data.restaurant
  }
}
</script>

<style scoped>
.album-image {
  /* if width/hight under 200px things get fucky */
  height: 200px;
  width: 200px;
}
</style>
