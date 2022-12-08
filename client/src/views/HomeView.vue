<script setup lang="ts">
import session, { login, logout } from "../stores/session";
</script>

<template>
  <main>
    <div class="section is-large">
      <div class="columns">

        <div v-if="session.user == null" class="column">
          <h1 class="title is-1 has-text-centered">FitTrack - a fitness blog.</h1>
          <h2 class="title is-4 has-text-grey has-text-centered">
            Get <router-link to="/signup"> started </router-link> today. Returning user? <router-link to="/login">Glad to see you again.</router-link>
          </h2>
        </div>

        <div v-else class="column"> 
          <h1 class="title is-1 has-text-centered">Welcome back, {{ session.user.displayName }}</h1>
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
