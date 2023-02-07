import { supabaseClient } from '$lib/db/supabase';
import { fail, success } from '@sveltejs/kit'
import { z } from 'zod'

const registerSchema = z.object({
  first_name: z
    .string({ required_error: 'First name is required' })
    .min(1, { message: 'First name is required' })
    .max(64, { message: 'First name must be less than 64 characters' })
    .trim(),
  last_name: z
    .string({ required_error: 'Last name is required' })
    .min(1, { message: 'Last name is required' })
    .max(64, { message: 'Last name must be less than 64 characters' })
    .trim(),
  email: z
    .string({ required_error: 'Email is required' })
    .min(1, { message: 'Email is required' })
    .max(64, { message: 'Email must be less than 64 characters' })
    .email({ message: 'Email must be a valid email address' }),
  company: z
    .string()
    .min(0)
    .max(64, { message: 'Company name must be less than 64 characters' })
    .trim(),
  message: z
    .string({ required_error: 'You must include a message' })
    .min(10, { message: 'Your message must be at least 10 characters long' })
    .max(2000, { message: 'The message must be less than 2000 characters' })
    .trim(),
})

export const actions = {
  default: async ({ request }) => {
    // console.log(request);
    // const formData = Object.fromEntries(await request.formData())
    // console.log('FORMDATA: ' + JSON.stringify(formData));
    // const title = formData.title
    // const caption = formData.caption
    // const paragraph1 = formData.paragraph1
    // const paragraph2 = formData.paragraph2
    // const paragraph3 = formData.paragraph3
    // const paragraph4 = formData.paragraph4
    // const paragraph5 = formData.paragraph5

    // const body = [paragraph1, paragraph2, paragraph3, paragraph4, paragraph5]

    // try {
    //   const result = registerSchema.parse(formData)
    // } catch (err) {
    //   const { fieldErrors: errors } = err.flatten()
    //   console.log(errors)
    //   return fail(400, {
    //     error: true,
    //     message: 'Invalid form\nCheck the fields',
    //     data: formData,
    //     errors,
    //   })
    // }

    // const { data, error } = await supabaseClient.from('blog-post').insert([
    //   {
    //     title,
    //     caption,
    //     body,
    //   },
    // ])

    // if (error) {
    //   console.log(error);
    //   return fail(400, {
    //     error: true,
    //     message: 'Error',
    //     data,
    //     error,
    //   })
    // }
        
    return 
    
  },
}