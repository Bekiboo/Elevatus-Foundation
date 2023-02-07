import { getPost } from '$lib/db/blog'
// import { error } from '@sveltejs/kit'
import { blogPosts } from '$lib/stores/blog'

let blogPostsValue
blogPosts.subscribe((value) => {
  blogPostsValue = value
})

export async function load({ params }) {
  const { slug } = params

  // If the blogPosts store is empty, then fetch the blog post from DB
  if (blogPostsValue == '') {
    const blogPost = await getPost(slug)
    return blogPost

  } else {
    let blogPost = blogPostsValue.find(({ id }) => id == slug)
    return blogPost
  }
}