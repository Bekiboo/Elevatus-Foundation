import { fail, redirect } from '@sveltejs/kit'
import { getSupabase } from '@supabase/auth-helpers-sveltekit'
import { AuthUserSchema } from '$lib/validationSchema'
import { ForgotPasswordSchema } from '$lib/validationSchema'

export const actions = {
  signIn: async (event) => {
    const { request, cookies, url } = event
    const { session, supabaseClient } = await getSupabase(event)
    const formData = Object.fromEntries(await request.formData())
    const email = formData.email
    const password = formData.password

    // Form Validation
    try {
      AuthUserSchema.parse({ email, password })
    } catch (err) {
      const { fieldErrors: errors } = err.flatten()
      return fail(400, {
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
        return fail(400, {
          error: true,
          message: 'Invalid credentials',
          values: {
            email,
          },
        })
      }
      return fail(500, {
        error: 'Server error. Try again later.',
        values: {
          email,
        },
      })
    }

    throw redirect(303, '/portal')
  },

  signOut: async (event) => {
    const { supabaseClient } = await getSupabase(event)
    await supabaseClient.auth.signOut()
    throw redirect(303, '/signin')
  },

  resetPassword: async (event) => {
    const { request, cookies, url } = event
    const { session, supabaseClient } = await getSupabase(event)
    const formData = Object.fromEntries(await request.formData())
    const email = formData.email

    try {
      ForgotPasswordSchema.parse({ email })
    } catch (err) {
      console.log(err)
      const { fieldErrors: errors } = err.flatten()
      return fail(400, {
        error: true,
        message: 'Invalid form\nCheck the fields',
        data: formData,
        errors,
      })
    }

    const { data, error } = await supabaseClient.auth.resetPasswordForEmail(
      email,
      {
        redirectTo: `${url.origin}/account/update-password`,
      }
    )

    if (error) {
      if (error && error.status === 400) {
        return fail(400, {
          error: true,
          message: 'prout',
          values: {
            email,
          },
          errors: auth,
        })
      }
      return fail(500, {
        error: 'Server error. Try again later.',
        message: error.message,
        values: {
          email,
        },
      })
    }
  },
}
