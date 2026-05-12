<script lang="ts">
	import type { Project } from '$lib/types';
	let { project }: { project: Project } = $props();
</script>

<div class="relative h-64 sm:h-80">
	<img src={project.image_url} alt={project.title} class="w-full h-full object-cover" />
	<div class="absolute inset-0 bg-linear-to-t from-slate-900 to-transparent"></div>
</div>

<div class="p-8">
	<div class="flex flex-wrap gap-2 mb-4">
		{#each project.tags as tag}
			<span class="px-3 py-1 bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[10px] font-mono rounded-full uppercase">
				{tag}
			</span>
		{/each}
	</div>

	<h2 class="text-3xl font-bold text-white mb-4">{project.title}</h2>
	<p class="text-slate-400 leading-relaxed mb-8">{project.description}</p>

	<div class="flex flex-col sm:flex-row gap-4">
        {#if project.vercel_link}
			<a href={project.vercel_link} target="_blank" class="flex-1 bg-blue-600 hover:bg-blue-500 text-white font-bold py-4 rounded-xl text-center transition-all shadow-lg shadow-blue-600/20">
				LIVE DEMO
			</a>
		{/if}
		
		<a href={project.github_url} target="_blank" class="flex-1 border border-slate-700 hover:bg-slate-800 text-white font-bold py-4 rounded-xl text-center transition-all">
			GITHUB REPO
		</a>
	</div>
</div>