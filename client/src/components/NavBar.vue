<script setup lang="ts">

import { reactive, ref } from "vue";
import { RouterLink } from "vue-router";
import LoginBadge from "./NavLogin.vue";
import session, { api } from "../stores/session";
import { searchPosts, type ListEnvelope, type Post } from "../stores/posts";
import vSelect from "vue-select";

const posts = reactive([] as Post[]);
searchPosts().then( x => posts.push(...x.posts));

let isActive = ref(false);

const options = ref([] as any[]);

async function fetchOptions (search: String) {
  const result = await api<ListEnvelope<Post>>(`post/search/${search}`)
  options.value = result.posts;
}

</script>

<template>
  <nav class="navbar is-transparent has-shadow" role="navigation" aria-label="main navigation">
    <div class="container">
      <div class="navbar-brand">

        <a class="navbar-item" 
            href="/" 
            alt="Brand">
          <img src="@/assets/images/weight.png" alt="FitTrack Logo">
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
                <v-select :options="options" @search="fetchOptions" label="username" placeholder="search">
                </v-select>
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
              <router-link class="navbar-item has-text-info" to="/new">Create a new post</router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>