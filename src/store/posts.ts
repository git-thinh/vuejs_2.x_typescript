// eg. /app/store/posts.ts
import { VuexModule, Module, Mutation, MutationAction, Action, getModule } from 'vuex-module-decorators'
import { modulesStore } from "./index"

import http from '@/services/http';

interface PostEntity {
  comments: string[]
}

@Module({
	name: 'PostsModule',
	store: modulesStore,
	dynamic: true,
})
class PostsModule extends VuexModule {
  posts: PostEntity[] = [] // initialize empty for now

  get totalComments(): number {
    return this.posts
      .filter(post => {
        // Take those posts that have comments
        return post.comments && post.comments.length
      })
      .reduce((sum, post) => {
        // Sum all the lengths of comments arrays
        return sum + post.comments.length
      }, 0)
  }

  @Mutation
  updatePosts(posts: PostEntity[]) {
    this.posts = posts
  }

  @Action({ commit: 'updatePosts' })
  async fetchPosts() {
    return http.get('https://jsonplaceholder.typicode.com/posts')
  }
}

export default getModule(PostsModule)