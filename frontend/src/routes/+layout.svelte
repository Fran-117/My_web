<script lang="ts">
	import "../routes/layout.css";
	import Navbar from '../lib/Componentes/Navbar.svelte';
	import LOGO from '../lib/assets/Mi_Logo_Sin_Fondo.png';

	let { children } = $props();
</script>

<!-- Para que se vizualice mi logo en la ventana -->
<svelte:head>
	<link rel="icon" href={LOGO} />
</svelte:head>

<div class="min-h-screen bg-slate-950 text-slate-200 selection:bg-blue-500/30">
	<Navbar />

	<main>
		{@render children()}
	</main>

	<footer class="py-10 text-center text-slate-500 text-sm border-t border-slate-900">
		<p>© 2026 Francisco Ávila — Ingeniería Mecatrónica</p>
	</footer>
</div>
