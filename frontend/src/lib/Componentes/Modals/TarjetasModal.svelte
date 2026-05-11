<script lang="ts">
    import type { Project } from '$lib/types';
    let { project, onSelect }: { project: Project, onSelect: (p: Project) => void } = $props();
</script>

<button 

    onclick={() => onSelect(project)}
    class="group relative aspect-4/3 bg-slate-900 rounded-xl overflow-hidden border border-slate-800 hover:border-blue-500/50 transition-all duration-500"
>
    <img 
        src={project.image_url} 
        alt={project.title} 
        class="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700 opacity-50 group-hover:opacity-100" 
    />
    <div class="absolute inset-0 bg-linear-to-t from-slate-950 p-5 flex flex-col justify-end">
        <h3 class="text-lg font-bold text-white group-hover:text-blue-400 transition-colors">{project.title}</h3>
        <p class="text-[10px] font-mono text-blue-500 opacity-0 group-hover:opacity-100 transition-all">VIEW_PROJECT_</p>
    </div>
</button>