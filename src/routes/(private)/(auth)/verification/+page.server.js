import { regisrating } from '$lib/stores'
import { error } from '@sveltejs/kit'

export const load = async (event) => {
  let isRegistrating
  await regisrating.subscribe((value) => (isRegistrating = value))
  console.log('status: ' + isRegistrating.status)
  console.log('email: ' + isRegistrating.email);
  if (isRegistrating.status != true) {
    throw error(404)
  }

  return {email: isRegistrating.email}
}
