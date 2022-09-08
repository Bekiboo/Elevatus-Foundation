import { supabase } from "../../lib/api/supabase"

export const load = async () => {
    const { data, error } = await supabase.from('blog-posts').select()
    if (error) return console.error('loadBlogPosts: ', error)

    return {data}
  }