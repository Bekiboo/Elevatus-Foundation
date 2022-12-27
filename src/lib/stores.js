import { writable } from 'svelte/store'

export const loadingState = writable(false)
export const regisrating = writable({status: false, email: ''})
export const adminMode = writable(false)
