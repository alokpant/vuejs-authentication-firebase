<template>
  <v-container fluid>
    <v-layout row wrap>
      <v-flex xs12 class="text-xs-center" mt-5>
        Sign Up page
      </v-flex>
      <v-flex xs12 sm6 offset-sm3 mt-3>
        <form>
          <v-flex>
            <v-text-field
              name='email'
              id='email'
              label='email'
              type='email'
              required>
            </v-text-field>
          </v-flex>
          <v-flex>
            <v-text-field
              name='password'
              id='password'
              label='password'
              type='password'
              required>
            </v-text-field>
          </v-flex>
          <v-flex>
            <v-text-field
              name='confirmPassword'
              id='confirmPassword'
              label='confirmPassword'
              type='password'
              required>
            </v-text-field>
          </v-flex>
          <v-flex>
            <v-btn color='primary' type='submit'>Sign Up</v-btn>
          </v-flex>
        </form>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  export default { }
</script>
