import tailwindcss from '@tailwindcss/vite';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
    plugins: [tailwindcss(), sveltekit()],
    server: {
		watch: {
			usePolling: true, // Esto obliga a Docker a revisar cambios manualmente
		}
	}
    });
