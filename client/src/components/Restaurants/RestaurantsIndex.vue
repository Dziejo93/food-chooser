<template>
  <panel title="Restaurant">
    <div v-for="restaurant in restaurants" :key="restaurant._id">
      <restaurant-card>
        <template slot="card-title">{{restaurant.name}}</template>
        <template slot="card-image">
          <img class="album-image" v-if="restaurant.logoUrl" :src="restaurant.logoUrl" />
          <img class="album-image" v-if="!restaurant.logoUrl" src="//placehold.it/200" />
        </template>
        <template slot="card-body">{{restaurant.description}}</template>
      </restaurant-card>
    </div>
  </panel>
</template>

<script>
import Panel from '@/components/templates/Panel'
import RestaurantService from '@/services/RestaurantService'
import RestaurantCard from '../Restaurants/templates/RestaurantCard'
export default {
  components: {
    Panel,
    RestaurantCard
  },
  data () {
    return {
      restaurants: {}
    }
  },
  async mounted () {
    const restaurantsResponse = await (RestaurantService.getRestaurants())
    this.restaurants = restaurantsResponse.data.restaurants
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
