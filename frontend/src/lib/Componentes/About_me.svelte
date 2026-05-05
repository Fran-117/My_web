<script lang="ts">
    // 1. Strict Type Definition
    interface ProfileData {
        titulo: string;
        bio_content: string;
        logo_url: string;
        portrait_url: string;
    }

    export let info: ProfileData; 

    // 2. Destructuring with Fallbacks (Valores predeterminados)
    // If the database is missing a field, it will use these defaults
    const { 
        titulo = "Ingeniería y Disciplina", 
        bio_content = "Aplicando la consistencia del entrenamiento para construir soluciones de hardware y software eficientes.", 
        logo_url = "", 
        portrait_url = "" 
    } = info || {};
</script>

<section class="bg-slate-900 py-16 px-6 text-white min-h-[400px] flex items-center">
    <div class="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        <div class="flex justify-center relative">
            <div class="w-64 h-64 md:w-80 md:h-80 rounded-2xl border-2 border-blue-500/30 overflow-hidden shadow-2xl hover:scale-105 transition-transform duration-500 bg-slate-800 flex items-center justify-center">
                {#if portrait_url}
                    <img src={portrait_url} alt="Francisco Ávila - Retrato" class="w-full h-full object-cover" />
                {:else}
                    <span class="text-slate-500">Imagen no disponible</span>
                {/if}
            </div>
            
            {#if logo_url}
                <img src={logo_url} alt="Logo de Marca" class="absolute -bottom-6 -right-6 w-24 h-24 drop-shadow-2xl bg-slate-900 rounded-full p-2 border border-slate-700" />
            {/if}
        </div>

        <div class="space-y-6">
            <h2 class="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
                {titulo}
            </h2>
            <p class="text-slate-300 text-lg leading-relaxed font-light tracking-wide">
                {bio_content}
            </p>
            <div class="pt-6">
                <button class="bg-blue-600 hover:bg-blue-500 text-white px-8 py-3 rounded-md font-semibold transition-all shadow-lg hover:shadow-blue-500/50">
                    Conocer Proyectos
                </button>
            </div>
        </div>

    </div>
</section>