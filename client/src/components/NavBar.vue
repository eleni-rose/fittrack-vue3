<script setup lang="ts">

import { ref } from "vue";
import { RouterLink } from "vue-router";
import LoginBadge from "./NavLogin.vue";
import session, { login, logout } from "../stores/session";

let isActive = ref(false);

</script>

<template>
  <nav class="navbar is-transparent has-shadow" role="navigation" aria-label="main navigation">
    <div class="container">
      <div class="navbar-brand">

        <a class="navbar-item" href="/" alt="Brand">
          <img src="@/assets/images/weight.png">
        </a>

        <a :class="{ 'is-active': isActive }" @click="isActive = !isActive" role="button" class="navbar-burger"
          aria-label="menu" aria-expanded="false">
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

          <div class="navbar-item">
            <div class="field has-addons">
              <p class="control">
                <input class="input" type="text" placeholder="Find a post">
              </p>
              <p class="control">
                <button class="button is-info">
                  Search
                </button>
              </p>
            </div>
          </div>
        </div>

        <div class="navbar-end">

          <div v-if="session.user == null" class="navbar-item">
            <login-badge/>
          </div>

         <div v-else class="navbar-item has-dropdown is-hoverable is-size1">

            <a class="navbar-link is-info is-arrowless">
              <p class="is-size-4">+</p>
            </a>

            <div class="navbar-dropdown is-boxed is-right">
              <router-link class="navbar-item has-text-info" to="/">Blog</router-link>
              <a class="navbar-item has-text-info">Workout</a>
              <a class="navbar-item has-text-info">Image</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>