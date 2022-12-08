// import { formatError, fault, success } from '$lib/utils';
import { UpdatePasswordSchema } from '$lib/validationSchema'
import { getSupabase } from '@supabase/auth-helpers-sveltekit'
import { invalid } from '@sveltejs/kit'
import { ZodError } from 'zod'

export const load = async (event) => {
  const { session } = await getSupabase(event)
  console.log(session);
  return { session }
}

export const actions = {
  default: async (event) => {
    const { request } = event
    const { supabaseClient } = await getSupabase(event)

    const formData = await request.formData()
    const email = formData.get('email')
    const password = formData.get('password')
    const passwordConfirm = formData.get('passwordConfirm')

    try {
      UpdatePasswordSchema.parse({ password, passwordConfirm })
    } catch (err) {
      if (err instanceof ZodError) {
        console.log({ message: err.message })
        const errors = formatError(err)
        return invalid(400, { errors, password })
      }
    }

    const { error } = await supabaseClient.auth.updateUser({ password })

    if (error) {
		console.log('EROOR: ' + error);
    //   return invalid(500, 
	// 	// fault('Server error. Try again later.', { email })
	// 	)
    }

    // return success('Your password was updated successfully.')
  },
}
