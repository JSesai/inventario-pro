import { createClient } from "@supabase/supabase-js"; //importamos el cliente para supabase

export const supabase = createClient( //exportamos el cliente para supabase para que sea usado en la aplicacion
    import.meta.env.VITE_APP_SUPABASE_URL, //url de supabase guardada en archivo env (variables de entorno)
    import.meta.env.VITE_APP_SUPABASE_ANON_KEY
) 