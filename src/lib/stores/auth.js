import { supabase } from "$lib/auth/supabase";
import { writable } from "svelte/store";

export const user = writable(supabase.auth.user() || false);
export const isAdmin = writable(false);