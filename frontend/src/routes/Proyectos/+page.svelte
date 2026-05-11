<script lang="ts">
    import BaseModal from '$lib/Componentes/Modals/BaseModal.svelte';
    import ProjectContent from '$lib/Componentes/Modals/ProyectosModal.svelte';
    import ProjectCard from '$lib/Componentes/Modals/TarjetasModal.svelte';
    import type { Project } from '$lib/types';

    // Datos de ejemplo para los proyectos
    const projects: Project[] = [
        { id: 1, name: "Project One", description: "Long description here...", image: "https://picsum.photos/seed/1/800/600", github: "#", tags: ["Svelte", "Tailwind"] },
        { id: 2, name: "Project Two", description: "Another description...", image: "https://picsum.photos/seed/2/800/600", github: "#", tags: ["Docker", "Go"] },
        { id: 3, name: "Project Three", description: "Design work...", image: "https://picsum.photos/seed/3/800/600", github: "#", tags: ["UI/UX"] },
        { id: 4, name: "Project Four", description: "Mechatronics build...", image: "https://picsum.photos/seed/4/800/600", github: "#", tags: ["Arduino", "C++"] }
    ];

    let selectedProject = $state<Project | null>(null);
    let isModalOpen = $derived(selectedProject !== null);

    const close = () => selectedProject = null;
</script>

<main class="pt-32 px-8 max-w-7xl mx-auto">
    <h1 class="text-6xl font-black text-white mb-12 italic uppercase">Project_ <span class="text-blue-600">Archive</span></h1>
    
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {#each projects as project}
            <ProjectCard {project} onSelect={(p) => selectedProject = p} />
        {/each}
    </div>
</main>

<BaseModal isOpen={isModalOpen} onClose={close} title="Project Details">
    {#if selectedProject}
        <ProjectContent project={selectedProject} />
    {/if}
</BaseModal>