<template>

  <panel :title="restaurant.name" >
    <div
      v-for="product in restaurant.products"
      :key="product.id">
      <template name="card-title" />
      <product-view>
        <template slot="product-title">{{ product.name }}</template>
        <template slot="product-text">{{ product.description }}</template>
        <template slot="product-btn-grp"><b-btn class="button">Add to Order</b-btn>
          <b-btn class="button">Add to Order</b-btn>
        </template>
        <template slot="product-image">
          <img
            v-if="product.image"
            :src="product.image"
            class="card-image-right" >
          <img
            v-if="!product.image"
            class="card-image-right flex-auto d-none d-lg-block"
            src="//placehold.it/200" >
        </template>

      </product-view>
    </div>
  </panel>
</template>

<script>
import RestaurantService from '@/services/RestaurantService'
import ProductView from '@/components/Restaurants/templates/ProductView'
import Panel from '@/components/templates/Panel'
export default {
  components: {
    Panel,
    ProductView
  },
  data () {
    return {
      restaurant: {}
    }
  },
  async mounted () {
    const restaurantId = this.$store.state.route.params.restaurantId
    const restaurantResponse = await RestaurantService.getRestaurantWithProducts(
      restaurantId
    )
    this.restaurant = restaurantResponse.data
  }
}
</script>

<style scoped>

.card-image-right {
  /* if width/hight under 200px things get fucky */
  height: 200px;
  width: 200px;

}
</style>
