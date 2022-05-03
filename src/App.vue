<template>
  <div id="app">

    <Post></Post>
    <Test01></Test01>

    <hr>
    <img alt="Vue logo" src="./assets/logo.png" />
    <HelloWorld msg="Vue.js 2.x + TypeScript" />
  </div>
</template>

<script lang="ts">

import { Component, Vue } from "vue-property-decorator";
import HelloWorld from "./components/HelloWorld.vue";

import Post from "./components/Post.vue";
import Test01 from "./components/Test01.vue";

@Component({
  components: {
    HelloWorld,
    Test01,
    Post
  },
})
export default class App extends Vue {}

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
