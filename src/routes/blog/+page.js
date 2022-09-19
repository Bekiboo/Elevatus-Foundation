import { supabase } from '$lib/api/supabase'
import { blogPosts } from './store'

let blogPostsValue

blogPosts.subscribe((value) => {
  blogPostsValue = value
})

export const load = async () => {
  // If the blogPosts store is empty, then fetch blog posts from DB
  if (blogPostsValue == '') {
    const { data, error } = await supabase.from('blog-post').select()
    if (error) return console.error('loadBlogPosts: ', error)

    // Todo: sort by date rather than by id
    data.sort((a, b) => {
      return a.id - b.id
    })

    blogPosts.set(data)

    let blogPostIds = data.map(a => a.id)
    console.log(blogPostIds);
    return { blogPostsValue }
  } else {
    return { blogPostsValue }
  }
}
