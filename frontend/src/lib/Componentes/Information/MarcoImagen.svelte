<script lang="ts">
    interface Props {
		src?: string;
		alt: string;
		color?: 'blue' | 'green' | 'slate';
		size?: 'small' | 'standard' | 'large';
	}

	let { src, alt, color = "blue", size = "standard" }: Props = $props();
    
    const colors = {
        blue: "border-blue-500 shadow-blue-500/20",
        green: "border-emerald-500 shadow-emerald-500/20",
        slate: "border-slate-500 shadow-slate-500/10"
    };

    const sizes = {
        small: "w-16 h-16",
        standard: "w-24 h-24 sm:w-32 sm:h-32",
        large: "w-40 h-40"
    };
</script>

<div class={`relative ${sizes[size]} shrink-0 group`}>
    <div class={`w-full h-full border-2 rounded-2xl flex items-center justify-center bg-slate-900/50 backdrop-blur-sm shadow-lg transition-all duration-500 group-hover:scale-105 ${colors[color]}`}>
		{#if src}
            <img {src} {alt} class="w-3/4 h-3/4 object-contain" />
        {:else}
            <div class="w-full h-full bg-slate-800 animate-pulse rounded-xl"></div>
        {/if}
	</div>
    <div class={`absolute -inset-1 blur-xl opacity-20 group-hover:opacity-40 transition-opacity bg-${color}-500 -z-10`}></div>
</div>