<template>
  <div id="app">
    <v-app>

      <app-bar/>

      <drawer/>

      <v-content>
        <router-view></router-view>
      </v-content>
    </v-app>
  </div>
</template>

<script>
  import Drawer from './components/core/Drawer.vue'
  import AppBar from './components/core/AppBar.vue'

  export default {
    name: 'App',
    data: () => ({

    }),
    components: {
      AppBar,
      drawer: Drawer,
      toolbar: AppBar
    }
  };
</script>
