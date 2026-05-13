<script lang="ts">
	import ContactCard from '$lib/Componentes/Information/ContactCard.svelte';
	
    // Recibimos los datos desde +page.server.ts
	let { data } = $props();
</script>

<main class="pt-32 px-4 md:px-8 max-w-7xl mx-auto min-h-screen pb-20">
	<h1 class="text-6xl font-black text-white mb-24 italic uppercase tracking-tighter">
		Contact_ <span class="text-blue-600">Me</span>
	</h1>

	<div class="contact-wrapper">
		{#each data.contacts as contact, i}
			<div class="contact-slot">
				<ContactCard 
                    platform={contact.name} 
                    value={contact.value} 
                    icon={contact.image_url} 
                    link={contact.value.includes('@') ? `mailto:${contact.value}` : contact.value}
                    color={contact.color}
                />
			</div>
		{/each}
	</div>
</main>

<style>
    /* Mantén aquí el CSS puro que logramos antes para que nada se rompa */
    .contact-wrapper { display: flex; flex-direction: column; width: 100%; }
    .contact-slot { width: 100%; position: relative; padding: 2.5rem 0; display: flex; justify-content: center; }
    
    @media (min-width: 768px) {
        .contact-wrapper { flex-direction: row; flex-wrap: wrap; justify-content: center; }
        .contact-slot { width: 25%; padding: 3rem 1rem; }
        /* ... resto de tus reglas nth-child ... */
    }
</style>