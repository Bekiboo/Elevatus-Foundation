import { getServerSession } from '@supabase/auth-helpers-sveltekit'

// In order to make the session available to the UI (pages, layouts) we need
// to pass the session in the root layout server load function:
export const load = async (event) => {
  const session = await getServerSession(event)
  return { session }
}
