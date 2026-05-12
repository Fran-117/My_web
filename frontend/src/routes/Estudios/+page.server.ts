import { supabase } from "$lib/supabaseClient";
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
    // Realizamos la Query (consulta) a la tabla 'education'
    const { data, error } = await supabase
        .from('education')
        .select('*')
        .order('order_index', { ascending: true });

    if (error) {
        console.error('Error al obtener estudios:', error);
        return { mainStudies: [], certificates: [] };
    }

    // Filtramos los datos según el 'type' que definimos en el Schema (esquema)
    return {
        mainStudies: data.filter(item => item.type === 'main'),
        certificates: data.filter(item => item.type === 'cert')
    };
};