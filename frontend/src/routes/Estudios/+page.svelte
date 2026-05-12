<script lang="ts">
	import MarcoImagen from '$lib/Componentes/Information/FrameImage.svelte';
	import ContentSection from '$lib/Componentes/Information/ContentSection.svelte';
	import ProjectCard from '$lib/Componentes/Modals/TarjetModal.svelte';
	import BaseModal from '$lib/Componentes/Modals/BaseModal.svelte';
	import ProjectContent from '$lib/Componentes/Modals/ProjectModal.svelte';
	import type { Project } from '$lib/types';

	// Recibimos los datos procesados del servidor
	let { data } = $props();
    
	// Lógica para los modales de los certificados
	let selectedProject = $state<Project | null>(null);
	let isModalOpen = $derived(selectedProject !== null);
	const close = () => (selectedProject = null);
</script>

<main class="pt-32 px-8 max-w-6xl mx-auto pb-20">
	<h1 class="text-6xl font-black text-white mb-20 italic uppercase tracking-tighter">
		Academic_ <span class="text-blue-600">Path</span>
	</h1>

	<section class="space-y-12">
		{#each data.mainStudies as item, i}
			<div class="flex flex-col md:flex-row gap-10 md:items-start">
				<MarcoImagen 
                    src={item.logo_url} 
                    alt={item.institution} 
                    color={item.color as 'blue' | 'green' | 'slate'} 
					size="large"
                />
				
				<ContentSection 
					category={item.category} 
					mainTitle={item.institution}
					subtitle={item.subtitle}
				>
                    <span class="block text-blue-500 font-mono text-sm mb-2">{item.duration}</span>
					<p>{item.details}</p>
				</ContentSection>
			</div>

			{#if i < data.mainStudies.length - 1}
				<div class="w-full h-px bg-linear-to-r from-transparent via-slate-800/60 to-transparent my-6"></div>
			{/if}
		{/each}
	</section>

	<div class="w-full h-px bg-slate-800/80 my-24"></div>

<section>
    <h2 class="text-2xl font-bold text-slate-500 mb-12 uppercase font-mono tracking-widest">
        Certifications_
    </h2>
    
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {#each data.certificates as cert}
            <ProjectCard 
                project={{
                    ...cert,
                    description: cert.details, 
                    image_url: cert.logo_url   
                }} 
                onSelect={(p) => (selectedProject = p)} 
            />
        {/each}
    </div>
	</section>
</main>

<BaseModal isOpen={isModalOpen} onClose={close} title="Academic Details">
	{#if selectedProject}
		<ProjectContent project={selectedProject} />
	{/if}
</BaseModal>