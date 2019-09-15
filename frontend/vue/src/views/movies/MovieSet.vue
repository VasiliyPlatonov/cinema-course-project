<template>
  <v-container>
    <v-row>
      <v-col cols="12">
       <p>Weekly repertoire</p>
      </v-col>
    </v-row>

    <v-row>
      <v-col v-for="n in 5"
             cols="12"
             sm="4"
             md="3"
      >

        <movie/>

      </v-col>
    </v-row>
  </v-container>
</template>

<script>
    import Movie from './components/MovieCard'

    export default {
        name: 'MovieSet',

        components: {
          Movie
        }
    }
</script>

<style scoped>

</style>

<!--todo: Here I have to get the movies from the store-->
