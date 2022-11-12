// make sure the supabase instance is initialized on the server
import '$lib/db/supabase'
// import { dev } from '$app/environment'
// import { auth } from '@supabase/auth-helpers-sveltekit/server'

// export const handle = auth()

// use the sequence helper if you have additional Handle methods
// import { sequence } from '@sveltejs/kit/hooks'

// export const handle = sequence(auth(), yourHandler)

// import { supabase } from '$lib/api/supabase'

// export const handle = async ({ event, resolve }) => {

//   if (event.url.pathname.startsWith('/admin')) {
//     if (!event.locals.user) {
//       const user = supabase.auth.user()
//     }
//     return new Response('custom response');
//   }

//   // if `user` exists set `events.local`
//   if (user) {
//     event.locals.user = {
//       name: user.username,
//       role: user.role.name,
//     }
//   }

//   // load page as normal
//   return await resolve(event)
// }
