import { invalid, redirect } from '@sveltejs/kit'
import { getSupabase } from '@supabase/auth-helpers-sveltekit'
import { regisrating } from '$lib/stores'
import { RegisterUserSchema } from '$lib/validationSchema'

export const actions = {
  signUp: async (event) => {
    const { request, cookies, url } = event
    const { session, supabaseClient } = await getSupabase(event)
    const formData = Object.fromEntries(await request.formData())

    const email = formData.email
    const password = formData.password
    const confirmPassword = formData.confirmPassword

    if (password != confirmPassword) {
      return invalid(400, {
        error: true,
        message: 'Invalid form\nCheck the fields',
        data: formData,
        errors: { passwordNotMatching: true },
      })
    }

    // Form Validation
    try {
      RegisterUserSchema.parse({
        email,
        password,
        confirmPassword,
      })
    } catch (err) {
      const { fieldErrors: errors } = err.flatten()
      return invalid(400, {
        error: true,
        message: 'Invalid form\nCheck the fields',
        data: formData,
        errors,
      })
    }

    try {
      const { data, error, user, session } = await supabaseClient.auth.signUp({
        email,
        password,
      })
      console.log(data)
      if (error) throw error
    } catch (error) {
      console.error('erreur!!! : ' + error)
      return invalid(400, {
        error: true,
        message: "Couldn't register new user",
        data: formData,
      })
      // message = error.error_description || error.message
    }

    await regisrating.set({ status: true, email: email })

    throw redirect(303, '/verification')
  },
}
