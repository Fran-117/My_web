import { supabase } from '$lib/supabaseClient';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
    // Realizamos una Query (consulta) a la tabla contacts
    const { data, error } = await supabase
        .from('contacts')
        .select('*')
        .order('id', { ascending: true });

    if (error) {
        console.error('Error retrieving contacts:', error);
        return { contacts: [] };
    }

    return {
        contacts: data
    };
};