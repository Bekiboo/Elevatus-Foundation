import { writable } from "svelte/store";
import { supabase } from "$lib/auth/supabase";

export const user = writable(supabase.auth.user() || false);
export const isAdmin = writable(false);

export const profiles = writable([])

export const loadProfiles = async () => {
  const { data, error } = await supabase.from('profiles').select()
  if (error) return console.error('loadProfiles: ', error)
  profiles.set(data)
}