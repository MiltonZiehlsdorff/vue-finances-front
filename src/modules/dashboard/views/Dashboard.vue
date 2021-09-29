<template>
  <appLayout>
    <router-view />
  </appLayout>
</template>

<script>

import { registerVuexModule } from '@/utils'
import financesStore from './../modules/finances/store'
import AppLayout from './../components/AppLayout.vue'

console.log('teste-dashboard')

export default {
  name: 'Dashboard',
  components: {
    AppLayout
  },
  created () {
    registerVuexModule(this.$store, 'finances', financesStore)
  }
}
</script>
