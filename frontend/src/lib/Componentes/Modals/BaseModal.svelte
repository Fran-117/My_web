<script lang="ts">
	import { fade, fly } from 'svelte/transition';

	let { isOpen, onClose, children, title = '' } = $props();

	function handleKeydown(e: KeyboardEvent) {
		if (e.key === 'Escape' && isOpen) onClose();
	}

	function handleBackdropKeydown(e: KeyboardEvent) {
		if (e.key === 'Enter' || e.key === ' ') {
			onClose();
		}
	}
</script>

<svelte:window onkeydown={handleKeydown} />

{#if isOpen}
	<div
		transition:fade={{ duration: 200 }}
		class="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/90 backdrop-blur-md p-4"
		role="button"
		tabindex="0"
		onclick={onClose}
		onkeydown={handleBackdropKeydown}
		aria-label="Cerrar modal"
	>
		<div
			transition:fly={{ y: 20, duration: 300 }}
			class="bg-slate-900 border border-white/10 max-w-2xl w-full rounded-3xl overflow-hidden shadow-2xl cursor-default"
			role="document"
			onclick={(e) => e.stopPropagation()}
		>
			{#if title}
				<div class="px-8 pt-6 flex justify-between items-center">
					<h2 class="text-xl font-bold text-white uppercase tracking-widest">{title}</h2>
					<button
						onclick={onClose}
						class="text-slate-500 hover:text-white transition-colors text-2xl p-2"
						aria-label="Cerrar"
					>
						✕
					</button>
				</div>
			{/if}

			{@render children()}
		</div>
	</div>
{/if}