<template>
  <panel>
    <template slot="header">
      {{ user._id }}
    </template>
    <user-card>
      <template slot="name">
        {{ user.local.username }}</template>
      <template slot="createdAt">{{ user.createdAt }}</template>
    </user-card>
  </panel>
</template>
<script>
import Panel from '@/components/templates/Panel'
import UserCard from '@/components/Users/templates/UserCard'
export default {
  components: {
    Panel, UserCard
  },
  data () {
    return {
      user: this.$store.state.user
    }
  },
  async mounted () {

  }
}
</script>

<style scoped>
</style>
