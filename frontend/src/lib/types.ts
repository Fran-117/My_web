export interface Project {
    id: string; // Cambiado a string porque Supabase usa UUID por defecto
    created_at: string;
    title: string;
    description: string;
    image_url: string;
    github_url: string;
    vercel_link?: string; // El '?' significa que es opcional
    tags: string[];
}