import { supabase } from '$lib/api/supabase'
import { error } from '@sveltejs/kit'

export async function load({ params }) {
  const { slug } = params

  const { data, error } = await supabase
    .from(
      `blog-post`
    )
    .select()
    .eq('id', slug)

  if (error) console.log(error)
  console.log(data);
  return data
}
