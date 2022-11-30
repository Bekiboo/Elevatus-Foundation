import { redirect } from '@sveltejs/kit'
import { getServerSession } from '@supabase/auth-helpers-sveltekit'

export const load = async (event) => {
  const session = await getServerSession(event)

  if (!session) {
    throw redirect(302, '/signin')
  }
}
