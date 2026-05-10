import { createClient } from '@supabase/supabase-js';
import { env } from '$env/dynamic/public';


console.log("Conectando a:", env.PUBLIC_SUPABASE_URL);

export const supabase = createClient(
    env.PUBLIC_SUPABASE_URL ?? '', 
    env.PUBLIC_SUPABASE_ANON_KEY ?? ''
);