<template>
  <panel title="Add restaurant">
    <div>
      <b-form>
        <b-form-group
          id="name"
          :label-cols="4"
          horizontal
          breakpoint="md"
          description="Enter the name of Your restaurant."
          label="Enter the name here"
          label-for="inputHorizontal">
          <b-form-input
            id="name"
            v-model.trim="name"
            required />
        </b-form-group>
        <b-form-group
          id="adress"
          :label-cols="4"
          horizontal
          breakpoint="md"
          description="Enter the adress of Your restaurant."
          label="Enter the adress here"
          label-for="inputHorizontal">
          <b-form-input
            id="adress"
            v-model.trim="adress"
            required />
        </b-form-group>
        <b-form-group
          id="description"
          :label-cols="4"
          horizontal
          breakpoint="md"
          description="Enter the description for Your restaurant."
          label="Enter the description here"
          label-for="inputHorizontal">
          <b-form-textarea
            id="description"
            v-model="text"
            :rows="3"
            :max-rows="6"
            v-model.trim="description"
            required />
        </b-form-group>
        <b-form-group
          id="logoUrl"
          :label-cols="4"
          horizontal
          breakpoint="md"
          description="Enter Url here."
          label="Enter the Url of Your Restaurant's logo."
          label-for="inputHorizontal">
          <b-form-input
            id="logoUrl"
            v-model.trim="logoURl"
            required />
        </b-form-group>
        <b-button
          type="submit"
          variant="primary">Submit</b-button>
      </b-form>
    </div>

  </panel>
</template>

<script>
import Panel from '@/components/templates/Panel'
export default {
  components: {
    Panel
  },
  data () {
    return {
      name: '',
      adress: '',
      description: ''
    }
  },
  methods: {

  }
}
</script>

<style scoped>
</style>
