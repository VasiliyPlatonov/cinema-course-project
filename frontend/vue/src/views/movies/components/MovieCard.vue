<template>
  <v-hover>
    <v-card
      slot-scope="{ hover }"
      :class="`elevation-${hover ? 12 : 3}`"
      class="pointed"
    >
      <v-img
        class="white--text"
        height="200px"
        src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
      >

        <v-card-title>Name of Movie</v-card-title>
        <v-card-text>Movie genre</v-card-text>
      </v-img>
    </v-card>
  </v-hover>
</template>

<script>
    export default {
        name: 'MovieCard'
    }
</script>

<style scoped>
  .pointed {
    cursor: pointer;
  }
</style>
