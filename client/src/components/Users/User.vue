<template>
  <panel title="User">
    <div v-for="user in users" :key="user._id">
      <div v-if="user.local">{{user.local}}</div>
      <div v-else-if="user.google">{{user.google}}</div>
    </div>
  </panel>
</template>

<script>
import Panel from '@/components/templates/Panel'
import UserService from '@/services/UserService'
export default {
  components: {
    Panel
  },
  data () {
    return {
      users: {}
    }
  },
  async mounted () {
    const usersData = await (UserService.getUsers())
    this.users = usersData.data.users
    //
  }}
</script>

<style scoped>
</style>
