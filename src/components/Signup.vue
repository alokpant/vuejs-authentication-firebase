<template>
  <v-container fluid>
    <v-layout row wrap>
      <v-flex xs12 class="text-xs-center" mt-5>
        <h1>Sign Up page</h1>
      </v-flex>
      <v-flex xs12 sm6 offset-sm3 mt-3>
        <form @submit.prevent="userSignUp">
          <v-flex xs12 sm6 offset-sm3 mt-3>
            <v-alert type="error" dismissible v-model='alert'>
              {{ error }}
            </v-alert>
          </v-flex>
          <v-flex>
            <v-text-field
              name='email'
              id='email'
              label='email'
              type='email'
              v-model='email'
              required>
            </v-text-field>
          </v-flex>
          <v-flex>
            <v-text-field
              name='password'
              id='password'
              label='password'
              v-model='password'
              type='password'
              required>
            </v-text-field>
          </v-flex>
          <v-flex>
            <v-text-field
              name='passwordConfirm'
              id='passwordConfirm'
              label='passwordConfirm'
              v-model='passwordConfirm'
              type='password'
              :rules="[comparePasswords]"
              required>
            </v-text-field>
          </v-flex>
          <v-flex>
            <v-btn color='primary'
                   type='submit'
                   :disabled='loading'>Sign Up</v-btn>
          </v-flex>
        </form>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  export default {
    data() {
      return {
        email: '',
        password: '',
        passwordConfirm: '',
        alert: false,
        formValid: false,
      };
    },
    methods: {
      userSignUp() {
        if (!this.comparePasswords) return;
        this.$store.dispatch('userSignUp', {
          email: this.email,
          password: this.password,
        });
      },
    },
    computed: {
      comparePasswords() {
        return this.password === this.passwordConfirm ? true : 'Passwords don\'t match';
      },
      error() {
        return this.$store.state.error;
      },
      loading() {
        return this.$store.state.loading;
      },
    },
    watch: {
      error(value) {
        if (value) this.alert = true;
      },
      alert(value) {
        if (!value) {
          this.$store.commit('setError', null);
        }
      },
    },
  };
</script>
