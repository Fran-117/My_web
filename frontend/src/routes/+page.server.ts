import { supabase } from '$lib/supabaseClient'; // Adjust the import path as necessary based on your project structure
import type { PageServerLoad } from './$types'; 

//Una variable load es asincronica, así que siempre espera a que la base responda
export const load: PageServerLoad = async () => {
    const { data, error } = await supabase
        .from('About_me')
        .select('Description, Image_logo, Image_me')
        .single();

    if (error) {
        console.error('Supabase fetch failed:', error.message);
        return { profile: null }; 
    }

    return {
        profile: data
    };
};