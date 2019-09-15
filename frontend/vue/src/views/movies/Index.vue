<template>
  <div>
    <v-container>
      <v-row>
        <v-col cols="12">
          <h1>Movies</h1>
        </v-col>
      </v-row>

      <movie-set/>

    </v-container>
  </div>
</template>

<script>
    import MovieSet from './MovieSet'

    export default {
        name: 'Movies',

        components: {
          MovieSet
        }
    }
</script>

<style scoped>

</style>
