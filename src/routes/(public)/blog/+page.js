import { supabaseClient } from '$lib/db/supabase'
import { blogPosts } from './store'

let blogPostsValue

blogPosts.subscribe((value) => {
  blogPostsValue = value
})

export const load = async () => {
  // If the blogPosts store is empty, then fetch blog posts from DB
  console.log('BLOGPOSTSVALUE: ' + JSON.stringify(blogPostsValue));
  if (blogPostsValue == '') {
    const { data, error } = await supabaseClient.from('blog-post').select()
    if (error) return console.error('loadBlogPosts: ', error)

    // Todo: sort by date rather than by id
    data.sort((a, b) => {
      return b.id - a.id
    })

    blogPosts.set(data)

    // TODO: fix this
    let blogPostIds = data.map(a => a.id)
    return { blogPostsValue }
  } else {
    return { blogPostsValue }
  }
}
