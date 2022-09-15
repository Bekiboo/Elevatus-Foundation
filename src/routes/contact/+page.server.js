// import { supabase } from '$lib/api/supabase'
import sgMail from '@sendgrid/mail'

export const actions = {
  default: async ({ request }) => {
    const formData = await request.formData()
    const email = formData.get('email')
    const first_name = formData.get('first_name')
    const last_name = formData.get('last_name')
    const company = formData.get('company')
    const message = formData.get('message')

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
    sgMail
      .send(msg)
      .then(() => {
        console.log('Email sent')
      })
      .catch((error) => {
        console.error(error)
      })

    // const { data, error } = await supabase.from('contact_form').insert([
    //   {
    //     email,
    //     first_name,
    //     last_name,
    //     company,
    //     message,
    //   },
    // ])
    //   if (error) return console.error(Date.now() + ' - INSERT contact_form failed: ', error)
  },
}
