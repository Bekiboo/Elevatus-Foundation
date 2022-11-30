import { invalid, redirect } from '@sveltejs/kit'
import { getSupabase } from '@supabase/auth-helpers-sveltekit'
import { z } from 'zod'

const registerSchema = z.object({
  email: z
    .string({ required_error: 'Email is required' })
    .min(1, { message: 'Email is required' })
    .email({ message: 'Email must be a valid email address' }),
  password: z
    .string({ required_error: 'Password is required' })
    .min(1, { message: 'Passord is required' })
    .trim(),
})

export const actions = {
  signIn: async (event) => {
    const { request, cookies, url } = event
    const { session, supabaseClient } = await getSupabase(event)
    const formData = Object.fromEntries(await request.formData())
    const email = formData.email
    const password = formData.password

    // Form Validation
    try {
      const result = registerSchema.parse(formData)
    } catch (err) {
      const { fieldErrors: errors } = err.flatten()
      return invalid(400, {
        error: true,
        message: 'Invalid form\nCheck the fields',
        data: formData,
        errors,
      })
    }

    const { error } = await supabaseClient.auth.signInWithPassword({
      email,
      password,
    })

    if (error) {
      if (error && error.status === 400) {
        return invalid(400, {
          error: true,
          message: 'Invalid credentials',
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

    throw redirect(303, '/dashboard')
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
