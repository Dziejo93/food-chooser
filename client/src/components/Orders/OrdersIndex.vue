<template>
  <panel title="Orders" >
    <div v-if="orders">
      <div
        v-for="order in orders"
        :key="order._id">
        <restaurant-card>
          <template slot="card-title">{{ order._id }}
          </template>
          <template slot="button">
            <router-link :to="{ name: 'order-view', params: { orderId: order._id }}">
              <b-button id="btn">Browse</b-button>
            </router-link>
          </template>
        </restaurant-card>

      </div>

    </div>

    <div v-if="(orders.length===0)">
      <template slot="card-title">Add new Order</template>
      <restaurant-card>
        <template slot="card-title">No Orders</template>
        <template slot="card-body">Do You want to make a new Order ?</template>
        <template slot="button"><b-button
          id="btn"
          @click="newOrder()">Add new Order</b-button></template>
      </restaurant-card>

    </div>
  </panel>
</template>

<script>
import Panel from '@/components/templates/Panel'
import OrdersService from '@/services/OrdersService'
import RestaurantCard from '../Restaurants/templates/RestaurantCard'
import { mapGetters } from 'vuex'
export default {
  components: {
    Panel,
    RestaurantCard
  },
  data () {
    return {
      orders: ''
    }
  },

  async mounted () {
    const ordersResponse = await OrdersService.getOrders()
    console.log(ordersResponse.data.orders)
    this.orders = ordersResponse.data.orders
  },
  methods: { ...mapGetters(['currentUser']),
    async newOrder () {
      const issuer = this.currentUser()._id
      const newOrder = await OrdersService.postNewOrder(issuer)
      if (newOrder.data) {
        this.$router.push({ path: 'orders', params: { orderId: newOrder.data._id } })
      }
    }
  }
}
</script>

<style scoped>
.album-image {
  /* if width/hight under 200px things get fucky */
  height: 200px;
  width: 200px;
}
#btn {
  right: 0;
  bottom: 0;
  position: absolute;
}
</style>
