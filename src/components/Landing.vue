<template>
  <v-container fluid>
    <v-layout column>
      <v-flex xs12 class="text-xs-center" mt-5>
        <h1>Welcome to Awesome app</h1>
      </v-flex>

      <v-flex xs12 sm6 offset-sm-3 mt-3>
        <blockquote class='blockquote text-xs-center'>
          It's a basic Single Page application <br>
          with Google Firebase authentication
        </blockquote>
      </v-flex>

      <v-flex xs12 sm6 offset-sm-3 mt-5 class='text-xs-center'>
        <v-btn color='primary' to='/sign-up'>Sign Up</v-btn>
        <v-btn to='/sign-in'>Sign In</v-btn>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {};
</script>
