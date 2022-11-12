import { redirect } from '@sveltejs/kit'
import { getServerSession } from '@supabase/auth-helpers-sveltekit'
import { supabaseClient } from '$lib/db/supabase'

export const load = async (event) => {
  const session = await getServerSession(event)

  const { data, error } = await supabaseClient
    .from('profiles')
    .select(`email, role!inner(*)`)
    .eq('id', session.user?.id)

  const { role } = data[0]

  if (role.name != 'admin') {
    throw redirect(302, '/')
  }
}
