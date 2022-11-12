import { invalid, redirect } from '@sveltejs/kit'
import { getSupabase } from '@supabase/auth-helpers-sveltekit'

export const actions = {
  signIn: async (event) => {
    const { request, cookies, url } = event
    const { session, supabaseClient } = await getSupabase(event)
    const formData = await request.formData()

    const email = formData.get('email')
    const password = formData.get('password')

    const { error } = await supabaseClient.auth.signInWithPassword({
      email,
      password,
    })

    if (error) {
      if (error instanceof AuthApiError && error.status === 400) {
        return invalid(400, {
          error: 'Invalid credentials.',
          values: {
            email,
          },
        })
      }
      return invalid(500, {
        error: 'Server error. Try again later.',
        values: {
          email,
        },
      })
    }

    throw redirect(303, '/hub')
  },

  signOut: async (event) => {
    const { supabaseClient } = await getSupabase(event)
    await supabaseClient.auth.signOut()
    throw redirect(303, '/')
  },
}

// import { supabaseClient } from '$lib/db'
// import { invalid, redirect } from '@sveltejs/kit'

// export const actions = {
//   signIn: async ({ request }) => {
//     const formData = await request.formData()

//     const email = formData.get('email')
//     const password = formData.get('password')

//     if (
//       typeof email !== 'string' ||
//       typeof password !== 'string' ||
//       !email ||
//       !password
//     ) {
//       console.log('invalid');
//       return invalid(400, { invalid: true })
//     }

//     try {
//         const { user, error } = await supabaseClient.auth.signInWithPassword({
//           email,
//           password,
//         })
//         if (error) throw error
//       } catch (error) {
//         console.error(error)
//         // message = error.error_description || error.message
//       } finally {
//         // console.log(supabaseClient.auth.user())
//         throw redirect(302, '/')
//         // goto('/admin')
//       }
//   },
// }
