import { regisrating } from '$lib/stores'
import { error } from '@sveltejs/kit'

export const load = async (event) => {
  let store
  await regisrating.subscribe((value) => (store = value))
  console.log(store.status)
  if (store.status != true) {
    console.log('oups')
    throw error(404)
  }
}
