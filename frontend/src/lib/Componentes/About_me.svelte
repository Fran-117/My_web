<script lang="ts">
    interface ProfileData {
        Description: string;
        Image_logo: string;
        Image_me: string;
    }

    // Definimos que este componente recibe una propiedad llamada 'info'
    let { info }: { info: ProfileData } = $props();

    // Extraemos los datos con valores de reserva (fallbacks)
    const bio_content = $derived(info?.Description ?? "Cargando biografía...");
    const logo_url = $derived(info?.Image_logo ?? "");
</script>

<section class="bg-slate-900 py-16 px-6 text-white min-h-100 flex items-center">
    <div class="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        <div class="flex justify-center relative">
            <div class="w-64 h-64 md:w-80 md:h-80 rounded-2xl border-2 border-blue-500/30 overflow-hidden shadow-2xl hover:scale-105 transition-transform duration-500 bg-slate-800 flex items-center justify-center">
                {#if logo_url}
                    <img src={logo_url} alt="Francisco Ávila" class="w-full h-full object-cover" />
                {:else}
                    <span class="text-slate-500 italic">Sin imagen</span>
                {/if}
            </div>
            
            {#if logo_url}
                <img src={logo_url} alt="Logo" class="absolute -bottom-6 -right-6 w-24 h-24 drop-shadow-2xl bg-slate-900 rounded-full p-2 border border-slate-700" />
            {/if}
        </div>

        <div class="space-y-6">
            <h2 class="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-cyan-300">
                {bio_content ? "Sobre mí" : "Cargando..."}
            </h2>
            <p class="text-slate-300 text-lg leading-relaxed font-light tracking-wide">
                {bio_content}
            </p>
        </div>

    </div>
</section>