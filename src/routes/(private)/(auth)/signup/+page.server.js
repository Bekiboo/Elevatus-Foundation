import { invalid, redirect } from '@sveltejs/kit'
import { supabaseClient } from '$lib/db/supabase'

export const actions = {
  signUp: async ({ request }) => {
    const formData = await request.formData()
    
    const email = formData.get('email')
    const password = formData.get('password')
    const confirmPassword = formData.get('confirmPassword')

    if (password != confirmPassword) {
      return invalid(400, { invalidPassword: true })
    }

    try {
        const { user, error } = await supabaseClient.auth.signUp({
          email,
          password,
          confirmPassword
        })
        if (error) throw error
      } catch (error) {
        console.error(error)
        // message = error.error_description || error.message
      } finally {
        console.log(supabaseClient.auth.user())
        // goto('/admin')
      }
  },
}
