<template>
  <!-- TODO:CHANGE RESTAURANT CARD INTO ORDER CARD -->
  <panel title >
    <template slot="header">
      Orders
      <button
        type="button"
        class="btn btn-info btn-circle"
        @click="newOrder()"><i class="fas fa-plus"/></button>
    </template>
    <div v-if="orders">
      <div
        v-for="order in orders"
        :key="order._id">
        <order-card>
          <template slot="card-title">{{ order._id }}
          </template>
          <template slot="button">
            <router-link :to="{ name: 'order-view', params: { orderId: order._id }}">
              <b-button id="btn">Browse</b-button>
            </router-link>
          </template>
        </order-card>

      </div>

    </div>

    <div v-if="(orders.length===0)">
      <template slot="card-title">Add new Order</template>
      <order-card>
        <template slot="card-title">No Orders</template>
        <template slot="card-body">Do You want to make a new Order ?</template>
        <template slot="button"><b-button
          id="btn"
          @click="newOrder()">Add new Order</b-button></template>
      </order-card>

    </div>
  </panel>
</template>

<script>
import Panel from '@/components/templates/Panel'
import OrdersService from '@/services/OrdersService'
import OrderCard from '../Orders/templates/OrderCard'
import { mapGetters } from 'vuex'
export default {
  components: {
    Panel,
    OrderCard
  },
  data () {
    return {
      orders: ''
    }
  },

  async mounted () {
    const ordersResponse = await OrdersService.getOrders()
    this.orders = ordersResponse.data.orders
  },
  methods: { ...mapGetters(['currentUser']),
    async newOrder () {
      const issuer = this.currentUser()._id
      console.log(issuer)
      const response = await OrdersService.postNewOrder({ issuerId: issuer })
      console.log(response.data)
      if (response.data) {
        console.log('rpobuje')
        this.$router.push({ name: 'order-view', params: { orderId: response.data._id } })
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
.btn-circle {
/* change position of plus */
border-color: aliceblue;
align-content: center;
  width: 30px;
  height: 30px;
  text-align: center;
  padding: 6px 0;
  font-size: 12px;
  line-height: 1.428571429;
  border-radius: 15px;
}
</style>
