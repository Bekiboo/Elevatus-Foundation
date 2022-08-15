import { goto } from "$app/navigation"
import { supabase } from "$lib/auth/supabase"


export async function checkIfAdmin() {
  const user = supabase.auth.user()
  if (user) {
    
      const { data, error } = await supabase
        .from('profiles')
        .select(`role`)
        .eq('id', user?.id)
    
        console.log(data[0].role);
    
        return data[0].role == 5 ?  true :  false
  }
  goto('/')
}
