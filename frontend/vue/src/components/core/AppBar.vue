<template>

  <v-app-bar
    v-if="$vuetify.breakpoint.mdAndDown"
    app
    color="transparent"
    flat
  >
    <v-app-bar-nav-icon @click="toggleDrawer"/>
  </v-app-bar>
</template>

<script>
    import {mapActions} from 'vuex'

    export default {
        name: 'AppBar',
        methods: {
            ...mapActions('app', {
                toggleDrawer: 'toggleDrawer'
            }),
        }
    }
</script>

<style scoped>

</style>
