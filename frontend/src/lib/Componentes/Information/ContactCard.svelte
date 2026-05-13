<script lang="ts">
	import FrameImage from './FrameImage.svelte';
	let { icon, platform, value, link, color = "slate" } = $props();
</script>

<a 
    href={link} 
    target="_blank" 
    rel="noopener noreferrer"
    class="flex flex-col items-center group space-y-6 p-4 transition-all duration-300 rounded-3xl hover:bg-slate-800/10 w-full overflow-hidden"
>
	<FrameImage 
        src={icon} 
        alt={platform} 
        {color} 
        size="large" 
        showGlow={false} 
        variant="glass" 
    />

	<div class="text-center space-y-2 w-full">
		<h3 class="text-[10px] font-mono text-slate-500 uppercase tracking-[0.5em] leading-none">
            {platform}
        </h3>
        <p class="text-lg md:text-xl font-black text-white group-hover:text-blue-500 transition-colors duration-300 italic uppercase tracking-tight wrap-break-words">
            {value}
        </p>
	</div>
</a>