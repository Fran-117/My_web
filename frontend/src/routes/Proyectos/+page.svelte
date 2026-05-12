<script lang="ts">
    import BaseModal from '$lib/Componentes/Modals/BaseModal.svelte';
    import ProjectContent from '$lib/Componentes/Modals/ProjectModal.svelte';
    import ProjectCard from '$lib/Componentes/Modals/TarjetModal.svelte';
    import type { Project } from '$lib/types';

    let { data } = $props();

    let selectedProject = $state<Project | null>(null);
    let isModalOpen = $derived(selectedProject !== null);

    const close = () => selectedProject = null;
</script>

<main class="pt-32 px-8 max-w-7xl mx-auto">
    <h1 class="text-6xl font-black text-white mb-12 italic uppercase">Project_ <span class="text-blue-600">Archive</span></h1>
    
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {#each data.projects as project}
            <ProjectCard {project} onSelect={(p) => selectedProject = p} />
        {/each}
    </div>
</main>

<BaseModal isOpen={isModalOpen} onClose={close} title="Project Details">
    {#if selectedProject}
        <ProjectContent project={selectedProject} />
    {/if}
</BaseModal>