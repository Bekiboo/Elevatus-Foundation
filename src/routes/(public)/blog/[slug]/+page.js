import { enhance } from '$app/forms'
import { supabaseClient } from '$lib/db/supabase'
// import { error } from '@sveltejs/kit'
import { blogPosts } from '../store'

let blogPostsValue

blogPosts.subscribe((value) => {
  blogPostsValue = value
})

export async function load({ params }) {
  const { slug } = params

  // If the blogPosts store is empty, then fetch the blog post from DB
  if (blogPostsValue == '') {
    const { data, error } = await supabaseClient
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

// A bit out of context comment here:
// After a full day of struggle, I finally implemented the svelte-french-toast => toast.promise when submitting a form (to have a "loading" toast followed by a "success" or "failure" toast.
// The problem is that when using use:enhance, it doesn't return a promise you can use, and so I had to get rid of use:enhance and do it the old way by calling fetch in my script tags.