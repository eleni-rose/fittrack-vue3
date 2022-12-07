<script setup lang="ts">
import session, { login, logout } from "../stores/session";
</script>

<template>
  <main>
    <div class="columns">
      <div class="column is-half is-offset-one-quarter">
        <div class="card">
          <div class="card-content">
            <h1 class="has-text-centered">
              <a
                class="button is-light is-rounded"
                @click="login('Jesse', 'Pinkman')"
                >Sign in with Google</a
              >
            </h1>

            <h1 class="has-text-centered">
              <a
                class="button is-light is-rounded"
                @click="login('Walter', 'White')"
                >Sign in with Apple</a
              >
            </h1>
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
