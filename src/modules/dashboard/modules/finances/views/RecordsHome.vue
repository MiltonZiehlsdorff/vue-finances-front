<template>
  <RecordsList />
</template>

<script>

import { mapActions } from 'vuex'
import RecordsList from './../components/RecordsList.vue'

console.log('teste-RecordsHome')

export default {
  name: 'recordsHome',
  components: {
    RecordsList
  },
  created () {
    this.setTitle({ title: 'Lançamentos' })
    console.log('RecordsHome')
  },
  methods: {
    ...mapActions(['setTitle'])
  }
}
</script>
