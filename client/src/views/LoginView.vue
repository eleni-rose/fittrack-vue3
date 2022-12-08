<script setup lang="ts">
import { login, logout } from "../stores/session";
import { ref } from 'vue';

const email=ref('');
const password = ref('');

</script>

<template>
  <main>
    <div class="columns">
      <div class="column is-half is-offset-one-quarter">

        <div class="card">
          <div class="card-content">

            <form @submit.prevent="login(email, password)">
              
              <div class="field">

                <label class="label">Email</label>
                <div class ="control">
                  <input 
                    class="input" 
                    type="email"
                    placeholder="example@gmail.com"
                    v-model="email">
                </div>
              </div>

              <div class="field">
                <label class="label">Password</label>
                <div class ="control">
                  <input 
                    class="input" 
                    type="password"
                    placeholder="Password"
                    v-model="password">
                </div>
              </div>

              <button class="button is-info">Log in</button>

            </form>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped>
.card {
  margin: 1em;
  border-radius: 2em;
}
.button {
  margin: 0.5em;
}
</style>
