<template>
  <div>
    <h2>Post</h2>
    <ul>
      <li v-for="(person, id) in persons">{{ personFullName(id) }}</li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { getModule } from "vuex-module-decorators";

import Persons from "@/store/persons";

@Component
export default class Post extends Vue {
  get posts() {
    // const postsModule = getModule(Posts);
    // // access posts
    // const posts = postsModule.posts;
    // // use getters
    // const commentCount = postsModule.totalComments;
    // // commit mutation
    // //postsModule.updatePosts(newPostsArray);

    // // dispatch action
    const ps = Persons.getPersons();
    console.log(ps);
    return ps;
  }

  personFullName(id: string) {
    return Persons.personFullName(id);
  }

  get persons() {
    return Persons.persons;
  }

  created() {
    Persons.getPersons();
  }
}
</script>