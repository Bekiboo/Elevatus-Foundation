import { redirect } from '@sveltejs/kit'
import { getServerSession } from '@supabase/auth-helpers-sveltekit'
import { supabaseClient } from '$lib/db/supabase'

export const load = async (event) => {
  const session = await getServerSession(event)

  let role

  if (session) {
    const { data, error } = await supabaseClient
      .from('profile')
      .select(`email, role!inner(*)`)
      .eq('id', session.user?.id)
  
    role = data[0].role.name
  }

  
  if (!session) {
    throw redirect(302, '/signin')
  }

  return { session, role }
}
