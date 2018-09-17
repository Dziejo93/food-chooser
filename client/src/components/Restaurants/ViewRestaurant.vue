<template>
  <panel>
    <template slot="header">
      {{ restaurant.name }}
    </template>
    <div
      v-for="product in restaurant.products"
      :key="product.id">
      <modal v-if="showModal">
        <template
          slot="header"
        >
          <h4 class="lead">Add products</h4>
        </template>
        <template slot="body">
          <h5> Adding {{ product.name }} to cart</h5><br>
          <b-form-input
            v-model.number="productToCart.amount"
            type="number"/>
        </template>

        <template slot="footer">
          <b-btn-group>
            <b-btn>Add</b-btn>
            <b-btn

              @click="closeModal()">Close</b-btn>
          </b-btn-group>
        </template>
      </modal>
      <template name="card-title" />
      <product-view>
        <template slot="product-title">{{ product.name }}</template>
        <template slot="product-text">{{ product.description }}</template>
        <template slot="product-btn-grp">
          <b-btn
            class="button"
            @click="openModal()"
          >Add to Order</b-btn>
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
import Modal from '@/components/templates/Modal'
import { mapActions, mapGetters } from 'vuex'
export default {
  components: {
    Panel,
    ProductView,
    Modal
  },
  data () {
    return {
      showModal: false,
      restaurant: {},
      id: null,
      amount: null,
      productToCart: []
    }
  },
  async mounted () {
    this.addToCart()
    const restaurantId = this.$store.state.route.params.restaurantId
    const restaurantResponse = await RestaurantService.getRestaurantWithProducts(
      restaurantId
    )
    this.restaurant = restaurantResponse.data
  },
  methods: { ...mapActions(['setActiveOrderId']),
    openModal () {
      this.showModal = true
    },
    closeModal () {
      this.showModal = false
    },
    addToCart () {
      this.productToCart.push({ id: 1, quantity: 2 })
    }
  }
}
</script>

<style scoped>
#modal-header {
  background-color: #007bff;
}

.button {
    position: relative;
  left: 0;
  bottom: 0;
}

.card-image-right {
   height: 200px;
  width: 200px;
}
</style>
