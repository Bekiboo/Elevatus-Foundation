import { invalid, redirect } from '@sveltejs/kit'
import { getSupabase } from '@supabase/auth-helpers-sveltekit'
import { z } from 'zod'
import { regisrating } from '$lib/stores'

const registerSchema = z.object({
  email: z
    .string({ required_error: 'Email is required' })
    .min(1, { message: 'Email is required' })
    .email({ message: 'Email must be a valid email address' }),
  password: z
    .string({ required_error: 'Password is required' })
    // .min(8, { message: 'Password must be at least 8 characters' })
    // .regex(new RegExp('.*[A-Z].*'), 'One uppercase character')
    // .regex(new RegExp('.*[a-z].*'), 'One lowercase character')
    // .regex(new RegExp('.*\\d.*'), 'One number')
    // .regex(
    //   new RegExp('.*[`~<>?,./!@#$%^&*()\\-_+="\'|{}\\[\\];:\\\\].*'),
    //   'One special character'
    // )
    .trim(),
  confirmPassword: z
    .string({ required_error: 'Password confirmation is required' })
    .min(1, { message: 'Password confirmation is required' })
    .trim(),
})

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
    console.log('1');
    regisrating.set({status: true, email: email})
    console.log('2');
    throw redirect(303, '/verification')
  },
}

// begin
//   insert into public.profile (id, email, role, username, avatar_url)
//   values (new.id, new.email, '1', new.raw_user_meta_data ->> 'user_name', new.raw_user_meta_data ->> 'avatar_url');
//   return new;
// end;
