<script lang="ts">
	import { base } from '$app/paths';

	type Attributi = {
		url: string;
		testo: string;
	};

	let a: Attributi = $props();
</script>

<a
	href="{base}{a.url}"
	class="bg-primary text-primary-foreground hover:bg-secondary hover:text-secondary-foreground"
>
	{a.testo}
</a>
