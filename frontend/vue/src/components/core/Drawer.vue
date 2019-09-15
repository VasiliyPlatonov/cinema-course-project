<template>
  <v-navigation-drawer
    v-model="drawer"
    app
    floating
    dark
    width="200"
  >
    <v-list dense>
      <v-list-item
        v-for="link in links"
        :key="link.title"
        :to="link.to"
        color="grey"
        exact
        link
      >
        <v-list-item-icon>
          <v-icon>{{ link.icon }}</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>{{ link.title }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>

</template>

<script>
    import {mapMutations} from 'vuex'

    export default {
        name: 'Drawer',
        data() {
            return {
                links: [
                    {title: 'Home', icon: 'mdi-home-variant', to: '/'},
                    {title: 'Movies', icon: 'mdi-view-grid', to: '/movies'},
                    {title: 'Settings', icon: 'mdi-settings', to: '/settings'},
                ]
            }
        },
        computed: {
            drawer: {
                get() {
                    return this.$store.state.app.drawer
                },
                set(val) {
                    this.setDrawer(val)
                }
            }
        },
        methods: {
            ...mapMutations('app', ['setDrawer']),
        },
    }
</script>

<style scoped>

</style>
<!--todo: It`s necessary to get the links from the store as array -->