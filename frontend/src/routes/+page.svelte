<script lang="ts">
    import AboutMe from '$lib/Componentes/About_me.svelte';
    import type { PageData } from './$types';
    
    // We strictly type the data coming from +page.server.ts
    export let data: PageData;
</script>

{#if data.profile}
    <AboutMe info={data.profile} />
{:else}
    <div class="min-h-screen flex flex-col items-center justify-center bg-slate-900 text-slate-300 gap-4">
        <svg class="w-12 h-12 text-blue-500 animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path>
        </svg>
        <p class="text-xl font-semibold">Sistema en mantenimiento</p>
        <p class="text-sm">No se pudo establecer conexión con la base de datos.</p>
    </div>
{/if}