import { getPosts } from '$lib/db/blog'  
import { blogPosts } from '$lib/stores/blog'


let posts
blogPosts.subscribe((value) => {
  posts = value
})

export const load = async () => {
  // If the blogPosts store is empty, then fetch blog posts from DB
  if (posts.length == 0) {
    let data = await getPosts()

    blogPosts.set(data)
  }
}
