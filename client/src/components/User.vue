<template>
  <panel title="User">
    <v-text v-if="$store.state.isUserLoggedIn"> zalogowany many</v-text>
  </panel>
</template>

<script>
import Panel from '@/components/templates/Panel'
export default {
  components: { Panel }
}
</script>

<style scoped>
</style>
