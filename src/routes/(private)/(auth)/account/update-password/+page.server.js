// import { formatError, fault, success } from '$lib/utils';
import { UpdatePasswordSchema } from '$lib/validationSchema'
import { getSupabase } from '@supabase/auth-helpers-sveltekit'
import { fail, redirect } from '@sveltejs/kit'
// import { ZodError } from 'zod'

export const load = async (event) => {
  const { session } = await getSupabase(event)
  return { session }
}

export const actions = {
  default: async (event) => {
    const { request } = event
    const { supabaseClient } = await getSupabase(event)
    const formData = Object.fromEntries(await request.formData())

    const password = formData.password
    const confirmPassword = formData.confirmPassword

    console.log(password);
    console.log(confirmPassword);

    if (password != confirmPassword) {
      return fail(400, {
        error: true,
        message: 'Invalid form\nCheck the fields',
        data: formData,
        errors: { passwordNotMatching: true },
      })
    }

    try {
      UpdatePasswordSchema.parse({ password, confirmPassword })
    } catch (err) {
      const { fieldErrors: errors } = err.flatten()
      return fail(400, {
        error: true,
        message: 'Invalid form\nCheck the fields',
        data: formData,
        errors,
      })
    }

    try {
      const { error } = await supabaseClient.auth.updateUser({ password })
      if (error) throw error
    } catch (error) {
      console.error('erreur!!! : ' + error)
      return fail(400, {
        error: true,
        message: "Couldn't reset password",
        data: formData,
      })
    }
    
    throw redirect(303, '/signin')
  },
}
