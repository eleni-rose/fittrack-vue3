<script setup lang="ts">
import session, { login, logout } from "../stores/session";
</script>

<template>
  <div class="columns">
    <div class="column is-half is-offset-one-quarter">

      <div class="activity" v-if="session.user == null">
        <h1 class="has-text-centered">
          Please <router-link to="/login"> log in </router-link>
          to see activity feed.
        </h1>
      </div>

      <div class="activity" v-if="session.user !== null">
        <div class="card">
          <div class="card-content">
            <div class="media">
              <div class="media-left">
                <figure class="image is-48x48">
                  <img
                    class="is-rounded"
                    src="https://bulma.io/images/placeholders/96x96.png"
                    alt="Placeholder image"
                  />
                </figure>
              </div>
              <div class="media-content">
                <p class="title is-4">Saul Goodman</p>
                <p class="subtitle is-6 has-text-weight-light">
                  @better_call_saul
                </p>
              </div>
            </div>
            <div class="content">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
              nec iaculis mauris. <a>@bulmaio</a>. <a href="#">#css</a>
            </div>
          </div>
        </div>
      </div>

      <div class="activity">
        <div class="card" v-if="session.user !== null">
          <div class="card-content">
            <div class="media">
              <div class="media-left">
                <figure class="image is-48x48">
                  <img
                    class="is-rounded"
                    src="https://bulma.io/images/placeholders/96x96.png"
                    alt="Placeholder image"
                  />
                </figure>
              </div>
              <div class="media-content">
                <p class="title is-4">Jesse Pinkman</p>
                <p class="subtitle is-6 has-text-weight-light">
                  @donotcalllist1483369
                </p>
              </div>
            </div>
            <div class="content"></div>
          </div>
        </div>
      </div>

      <div class="activity" v-if="session.user !== null">
        <div class="card">
          <div class="card-content">
            <div class="media">
              <div class="media-left">
                <figure class="image is-48x48">
                  <img
                    class="is-rounded"
                    src="https://bulma.io/images/placeholders/96x96.png"
                    alt="Placeholder image"
                  />
                </figure>
              </div>
              <div class="media-content">
                <p class="title is-4">Walter White</p>
                <p class="subtitle is-6 has-text-weight-light">@heisenberg</p>
              </div>
            </div>
            <div class="content">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
              nec iaculis mauris. <a>@bulmaio</a>. <a href="#">#css</a>
              <a href="#">#responsive</a>
            </div>
          </div>
        </div>
      </div>

      <div class="activity" v-if="session.user !== null">
        <div class="card">
          <div class="card-content">
            <div class="media">
              <div class="media-left">
                <figure class="image is-48x48">
                  <img
                    class="is-rounded"
                    src="https://bulma.io/images/placeholders/96x96.png"
                    alt="Placeholder image"
                  />
                </figure>
              </div>
              <div class="media-content">
                <p class="title is-4">Skyler White</p>
                <p class="subtitle is-6 has-text-weight-light">
                  @skyler_white_yo
                </p>
              </div>
            </div>
            <div class="content">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
              nec iaculis mauris. <a>@bulmaio</a>. <a href="#">#css</a>
              <a href="#">#responsive</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.card {
  margin-top: 1.5em;
  margin-bottom: 1.5em;
  border-left: 0.5em solid #e5f0fb;
}
h1 {
  margin-top: 1em;
  margin-bottom: 1em;
  padding: 0.3em;
  background-color: #e5f0fb;
  border-radius: 0.3em;
  color: gray;
}
</style>
