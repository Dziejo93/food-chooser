<template>
  <panel>
    <template slot="header">
      Order id: {{ order._id }}
    </template>
    <template slot="card-body">
      <b-table
        :product="order.products"
        striped
        hover/>
    </template>
    <b-btn @click="setAsActiveOrder()">Set as active order</b-btn>
    <b-btn @click="removeAsActiveOrder()">Stop tracking this Order</b-btn>
    <b-btn
      v-if="userCanClose"
      @click="finaliseOrder()">Finalise Order</b-btn>
  </panel>
</template>
<script>

import Panel from '@/components/templates/Panel'
import OrderService from '@/services/OrdersService'
import { mapActions, mapGetters } from 'vuex'
export default {
  components: {
    Panel

  },
  data () {
    return {
      order: {},
      userCanClose: false
    }
  },
  async mounted () {
    const orderId = this.$store.state.route.params.orderId
    const orderResponse = await OrderService.getOrderById(
      orderId
    )
    this.order = orderResponse.data.order
  },
  methods: { ...mapGetters(['currentUser']),
    ...mapActions(['setActiveOrderId']),
    async setAsActiveOrder () {
      this.setActiveOrderId(this.order._id)
    },
    async removeAsActiveOrder () {
      this.setActiveOrderId(null)
    },
    async setAccess () {
      const issuer = this.currentUser()._id
      if (issuer === this.order.issuedBy) {
        this.userCanClose = true
      }
    }
  }

}
</script>
<style scoped>

</style>
