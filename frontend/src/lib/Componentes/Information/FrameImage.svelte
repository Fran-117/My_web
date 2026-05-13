<script lang="ts">
	interface Props {
		src?: string;
		alt: string;
		color?: string; 
		size?: 'small' | 'standard' | 'large';
        showGlow?: boolean; // ¿Queremos brillo?
        variant?: 'glass' | 'solid'; // ¿Fondo transparente o blanco?
	}

	let { 
        src,
        alt,
        color = "blue",
        size = "standard",
        showGlow = true,
        variant = 'solid'
        }: Props = $props();
    
    const colorPresets: Record<string, string> = {
        blue: "#3b82f6", // blue-500
        green: "#10b981", // emerald-500
        slate: "#64748b"  // slate-500
    };

    // Determinamos si es un preset o un color hexadecimal directo
    const finalColor = colorPresets[color] || color;

const sizes = {
        small: "w-16 h-16",
        standard: "w-24 h-24 sm:w-32 sm:h-32",
        large: "w-40 h-40 sm:w-48 sm:h-48", // Aumentamos este
        xl: "w-52 h-52 sm:w-64 sm:h-64"      // Nueva opción extra grande
    };
</script>

<div class={`relative ${sizes[size]} shrink-0 group`}>
    <div 
        class="w-full h-full border-2 rounded-2xl flex items-center justify-center bg-white overflow-hidden shadow-lg transition-all duration-500 group-hover:scale-105"
        style="border-color: {finalColor}; box-shadow: 0 10px 15px -3px {finalColor}33;"
    >
		{#if src}
            <img {src} {alt} class="w-full h-full p-2 object-contain" />
        {:else}
            <div class="w-full h-full bg-slate-800 animate-pulse"></div>
        {/if}
	</div>

    <div 
        class="absolute -inset-1 blur-xl opacity-20 group-hover:opacity-40 transition-opacity -z-10"
        style="background-color: {finalColor};"
    ></div>
</div>