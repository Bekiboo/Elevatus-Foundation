import { supabase } from '$lib/api/supabase'
import { error } from '@sveltejs/kit'
import { blogPosts } from '../store'

let blogPostsValue

blogPosts.subscribe((value) => {
  blogPostsValue = value
})

export async function load({ params }) {
  const { slug } = params

  // If the blogPosts store is empty, then fetch the blog post from DB
  if (blogPostsValue == '') {
    const { data, error } = await supabase
      .from(`blog-post`)
      .select()
      .eq('id', slug)

    if (error) console.log(error)
    let blogPost = data[0]
    return blogPost

  } else {
    let blogPost = blogPostsValue.find(({ id }) => id == slug)
    return blogPost
  }
}
