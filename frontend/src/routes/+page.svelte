<script lang="ts">
    import AboutMe from '$lib/Componentes/About_me.svelte';
    import type { PageData } from './$types';
    
    let { data }: { data: PageData } = $props();
</script>

{#if data && data.profile}
    <AboutMe info={data.profile} />
{:else}
    <div class="h-screen flex flex-col items-center justify-center bg-slate-900 text-white">
        <p class="text-xl font-mono">DEBUG: Buscando datos en Supabase...</p>
    </div>
{/if}