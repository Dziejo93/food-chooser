<template>
  <panel title="Restaurant">
    <div v-for="restaurant in restaurants.data.restaurants" :key="restaurant._id">
      <restaurant-card>
        <template slot="card-title">{{restaurant.name}}</template>
        <template slot="card-image">
          <img class="album-image" v-if="restaurant.logoUrl" :src="restaurant.logoUrl" />
          <img class="album-image" v-if="!restaurant.logoUrl" src="//placehold.it/200" />
        </template>
        <template slot="card-body">{{restaurant.name}}</template>
      </restaurant-card>

      <!-- <tr class='clickable-row'>
        <td> {{ restaurant._id }}</td>
        <td>{{ restaurant.name }}</td>
        <td></td>
      </tr> -->

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
    this.restaurants = await (RestaurantService.getRestaurants())
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
