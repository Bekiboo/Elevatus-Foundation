import { writable } from 'svelte/store'
import { supabaseClient } from '$lib/db/supabase'

export const userStore = writable(supabaseClient.auth.user() || false)
export const isAdmin = writable(false)

export const profiles = writable([])

export const loadProfiles = async () => {
  const { data, error } = await supabaseClient.from('profiles').select()
  if (error) return console.error('loadProfiles: ', error)
  profiles.set(data)
}

export async function checkIfAdmin() {
  const user = supabaseClient.auth.user()

  if (!user) {
    return false
  }
  const { data, error } = await supabaseClient
    .from('profiles')
    .select(`role`)
    .eq('id', user?.id)

  console.log('user role: ' + data[0].role)

  return data[0].role == 5 ? true : false
}
