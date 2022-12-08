<script setup lang="ts">
import session, { login, logout } from "../stores/session";
</script>

<template>
  <main>
    <div class="section is-large">
      <div class="columns">
        <div class="column">
          <h1 v-if="session.user == null" class="title is-1 has-text-centered">FitTrack - social media for </h1>
          <h2 class="title is-4 has-text-grey has-text-centered">
            Get <router-link to="/login"> started </router-link> today. Returning user? <router-link to="/login">Login now.</router-link>
          </h2>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped>
h1 {
  margin: 1em;
}
</style>
