<script setup lang="ts">
import { ref } from "vue";
import { RouterLink } from "vue-router";
import LoginBadge from "./NavLogin.vue";

let isActive = ref(false);
</script>

<template>
  <nav class="navbar is-info" role="navigation" aria-label="main navigation">
    <div class="container">
      <div class="navbar-brand">
        <a
          :class="{ 'is-active': isActive }"
          @click="isActive = !isActive"
          role="button"
          class="navbar-burger"
          aria-label="menu"
          aria-expanded="false"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="navbar" class="navbar-menu" :class="{ 'is-active': isActive }">
        <div class="navbar-start">
          <router-link to="/" class="navbar-item">
            Home 
          </router-link>

          <router-link class="navbar-item" to="/activity">
            Activity
          </router-link>

          <router-link class="navbar-item" to="/profile">
            My Profile
          </router-link>

          <a class="navbar-item">
            <input class="input is-rounded " type="text" placeholder="Search FitTrack">
          </a>

          <div class="navbar-item has-dropdown is-hoverable">
            <a class="navbar-link"> More </a>
            <div class="navbar-dropdown">
              <router-link class="navbar-item" to="/about"> About </router-link>
              <a class="navbar-item"> Jobs </a>
              <a class="navbar-item"> Contact </a>
            </div>
          </div>
        </div>

        <div class="navbar-end">
          <div class="navbar-item">
            <login-badge></login-badge>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>


<style scoped>
navbar-item {
  transition: background-color 2s;
}
navbar-item:hover {
  background-color: blue;
}
</style>