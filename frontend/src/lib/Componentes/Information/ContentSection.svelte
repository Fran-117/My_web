<script lang="ts">
	let { category, mainTitle, subtitle, children } = $props();
</script>

<div class="flex-1 space-y-2">
    {#if category}
        <div class="inline-block px-3 py-1 bg-slate-800 rounded-lg border border-slate-700">
            <h3 class="text-[10px] font-mono text-blue-400 uppercase tracking-[0.2em]">{category}</h3>
        </div>
    {/if}
	
    <div class="space-y-1">
        {#if mainTitle}
            <h2 class="text-3xl font-black text-white italic uppercase tracking-tight">
            {mainTitle}
            </h2>
        {/if}
        
        {#if subtitle}
            <p class="text-lg font-medium text-slate-300/80 italic">
                {subtitle}
            </p>
        {/if}
    </div>
	
	<div class="text-slate-400 leading-relaxed max-w-2xl pt-2 font-light">
		{@render children()}
	</div>
</div>