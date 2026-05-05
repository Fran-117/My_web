import { supabase } from '$lib/supabaseClient';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
    const { data, error } = await supabase
        .from('About_me')
        .select('id,Description, Image_logo, Image_me')
        .single();

    if (error) {
        console.error('Supabase fetch failed:', error.message);
        return { profile: null }; 
    }

    return {
        profile: data
    };
};