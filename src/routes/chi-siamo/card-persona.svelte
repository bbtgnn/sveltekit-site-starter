<script lang="ts">
	import { assets } from '$app/paths';
	import type { Persona } from './persone';

	let p: Persona = $props();
</script>

<div class="flex flex-col items-center gap-3 rounded-lg border-8 border-purple-500 p-4 text-center">
	<img
		class="size-40 rounded-full"
		src="{assets}/images/persone/{p.immagine}"
		alt="Foto di {p.nome}"
	/>
	<div>
		<p>{p.nome}</p>
		<p>{p.ruolo}</p>
	</div>
	<p>{p.curiosita}</p>
</div>
