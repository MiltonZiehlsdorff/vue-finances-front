<template>
  <div>
    <AppToolbar2 v-model="drawer" />
    <AppMenu v-model="drawer" />

    <v-container grid-list-md>
      <v-layout>
        <v-flex xs12>
          <slot />
        </v-flex>
      </v-layout>
    </v-container>

    <AppFloatingButton />

  </div>
</template>

<script>

import AppFloatingButton from './AppFloatingButton.vue'
import AppMenu from './AppMenu.vue'
import AppToolbar2 from './AppToolbar2.vue'

console.log('teste-AppLayout')

export default {
  name: 'AppLayout',
  components: {
    AppFloatingButton,
    AppMenu,
    AppToolbar2
  },
  data: () => ({
    drawer: false
  })
}
</script>
