<script setup lang="ts">
import session, { login, logout } from "../stores/session";
import { reactive } from "vue";
import { getPosts, type Post } from "../stores/posts";

const posts = reactive([] as Post[]);
getPosts().then( x=> posts.push(...x.posts));

</script>

<template>
  <section class="section is-medium">
    <div class="columns">
      <div class="column is-half is-offset-one-quarter">
        <div v-if="session.user == null" class="activity">
          <h1 class="box has-text-centered">
            Please <router-link to="/login"> log in </router-link>
            to see activity feed.
          </h1>
        </div>

        <!-- Generic post layout -->

        <div v-else class="card mt-4 mb-4" v-for="post in posts" :key="post._id">

          <!-- only renders if photo was uploaded -->

          <div v-if="(post.postImg !== '' && post.postImg !== null)" class="card-image">
            <figure class="image is-4by3">
              <img :src="`data:image/png;base64,${post.postImg}`" alt="Post image">
            </figure>
          </div>

          <div class="card-content">

            <div class="media">
              <div class="media-left">
                <figure class="image is-48x48">
                  <img class="is-rounded" :src="`data:image/png;base64,${post.profileImg}`" alt="Profile Picture" />
                </figure>
              </div>

              <div class="media-content">
                <p class="title is-4">{{ post.displayName }}</p>
                <p class="subtitle is-6 has-text-grey"> @{{ post.username }}</p>
              </div>
            </div>

            <div class="content">
              <p class="ml-2">
                {{ post.postText }}
                <a v-if="(post.postTag !=='' && post.postTag !== null)" class="has-text-info-dark">#{{ post.postTag }}</a>
              </p>
              <p class="ml-2 has-text-grey is-size-7">{{ post.timeDate }}</p>
            </div>
          </div>

          <!-- End post layout-->

        </div>
      </div>
    </div>
  </section>
</template>