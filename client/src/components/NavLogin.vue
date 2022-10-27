<script setup lang="ts">
import session, { login, logout } from "../stores/session";
</script>

<template>
  <div class="buttons" v-if="session.user == null">

    <a class="button is-info">
      <strong>Sign up</strong>
    </a>

    <router-link class="navbar-item" to="/login">
      <a class="button is-info">Sign in</a>
    </router-link>

  </div>
  
  <div v-else>
    Welcome, {{ session.user.firstName }} {{ session.user.lastName }} (<a
      @click="logout()"
    >
      Log out </a
    >)
  </div>
</template>

<style scoped></style>
