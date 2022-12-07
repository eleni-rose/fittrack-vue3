<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
import NavBar from "./components/NavBar.vue";
import NavFooterVue from "./components/NavFooter.vue";
</script>

<template>

  <header>
    <NavBar/>
  </header>

  <div class="container">
    <RouterView/>
  </div>

  <footer>
    <NavFooterVue/>
  </footer>

</template>
