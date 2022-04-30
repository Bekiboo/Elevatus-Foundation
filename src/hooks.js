import { supabase } from '$lib/auth/supabase'

export const getSession = (request) => {
  console.log('request: ', request)
  return {
    user: {
      id: 'fdsvsdv',
      name: 'julien',
      access: 'admin',
    },
  }
}

// export async function handle({ event, resolve }) {
//   if (event.url.pathname.startsWith('/custom')) {
//     return new Response('custom response')
//   }

//   const response = await resolve(event)
//   return response
// }

// export function getSession(event) {
//     return event.locals.user
//       ? {
//           user: {
//             // only include properties needed client-side —
//             // exclude anything else attached to the user
//             // like access tokens etc
//             name: event.locals.user.name,
//             email: event.locals.user.email,
//             avatar: event.locals.user.avatar,
//           },
//         }
//       : {}
//   }
