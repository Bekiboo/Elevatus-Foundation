import { writable } from 'svelte/store'
import { supabase } from '$lib/auth/supabase'

export const blogPosts = writable([])

export const loadBlogPosts = async () => {
  const { data, error } = await supabase.from('blog-posts').select()
  if (error) return console.error('loadBlogPosts: ', error)
  blogPosts.set(data)
}

export const addBlogPost = async (title, caption, body, img) => {
  const { data, error } = await supabase
    .from('blog-posts')
    // @ts-ignore
    .insert([{ title, caption, body, img }])
  if (error) return console.error('addBlogPost: ', error)
  blogPosts.update((curr) => [...curr, data[0]])
}

export const updateBlogPost = async (id) => {
  const { data, error } = await supabase
    .from('blog-posts')
    // @ts-ignore
    .update([{ title, body, img }])
    .match({ id })
  if (error) return console.error('updateBlogPost: ', error)
  // TODO: update the client as well
}

export const deleteBlogPost = async (id) => {
  const { error } = await supabase.from('blog-posts').delete().match({ id })
  if (error) return console.error('deleteBlogPost: ', error)
  blogPosts.update((blogPosts) =>
    blogPosts.filter((blogPost) => blogPost.id !== id)
  )
}
