<template>
  <div id="app">
    <nav class="navbar navbar-expand navbar-light bg-light">
      <div class="collapse navbar-collapse">
        <h2>Hunkamunk</h2>
        <ul class="navbar-nav mr-auto">
          <li class="nav-item">
            <b-link
              tag="li"
              class="nav-link"
              :to="{name: 'about'}"
            >
              About
            </b-link>
          </li>
          <li class="nav-item">
            <b-link
              tag="li"
              class="nav-link"
              :to="{name: 'boxes'}"
            >
              Articles
            </b-link>
          </li>
        </ul>
      </div>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>
import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);
import routes from './routes.es6';
export const router = new VueRouter({routes});

export default {
  router,
  name: 'App',
  components: {

  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
