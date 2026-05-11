import { supabase } from '$lib/supabaseClient';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
    // Realizamos la consulta a la tabla 'Projects'
    const { data, error } = await supabase
        .from('projects')
        .select('*')
        .order('created_at', { ascending: false });

    if (error) {
        console.error('Error fetching projects:', error.message);
        return { projects: [] };
    }

    return {
        projects: data ?? []
    };
};