import { dev } from '$app/environment'
import sgMail from '@sendgrid/mail'
import { invalid } from '@sveltejs/kit'
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
    .min(4, { message: 'You must include a message' })
    .max(1000, { message: 'The message must be less than 1000 characters' })
    .trim(),
})

export const actions = {
  default: async ({ request }) => {
    const formData = Object.fromEntries(await request.formData())
    const first_name = formData.first_name
    const last_name = formData.last_name
    const email = formData.email
    const company = formData.company
    const message = formData.message

    try {
      const result = registerSchema.parse(formData)
    } catch (err) {
      const { fieldErrors: errors } = err.flatten()
      console.log(errors)
      return invalid(400, {
        error: true,
        message: 'Something went wrong\nTry again later',
        data: formData,
        errors,
      })
    }

    let apiKey
    dev
      ? (apiKey = import.meta.env.VITE_PRIVATE_SENDGRID_API_KEY)
      : (apiKey = process.env.VITE_PRIVATE_SENDGRID_API_KEY)

    sgMail.setApiKey(import.meta.env.VITE_PRIVATE_SENDGRID_API_KEY)
    const msg = {
      to: 'correspondence.elevatus@gmail.com',
      from: 'correspondence.elevatus@gmail.com',
      subject: 'Contact Form - ' + first_name + ' ' + last_name,
      text: message,
      html: `
      <p><b>Company name:</b> ${company}</p>
      <p><b>Email:</b> ${email}</p>
      <p><b>Message:</b> <br>
        ${message}
      </p>
      <p><i>Do not reply directly to this email please</i></p>
      `,
    }

    return sgMail
      .send(msg)
      .then(() => {
        console.log('SENT')
      })
      .catch((error) => {
        console.error(error)
        return invalid(400, {
          error: true,
          message: 'Something went wrong\nTry again later',
          apiKey: import.meta.env.VITE_PRIVATE_SENDGRID_API_KEY,
          errorMsg: error,
        })
      })
  },
}
