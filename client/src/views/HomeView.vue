<script setup lang="ts">
import session, { login, logout } from "../stores/session";
</script>

<template>
  <main>
    <div class="columns">
      <div class="column">
        <h1 class="is-size-1 has-text-centered">
          Welcome back.
        </h1>
      </div>
    </div>
  </main>
</template>

<style scoped>
h1 {
  margin: 1em;
}
</style>
