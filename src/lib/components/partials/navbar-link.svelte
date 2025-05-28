<script lang="ts">
	import { base } from '$app/paths';
	import { page } from '$app/state';

	type Attributi = {
		url: string;
		testo: string;
	};

	let a: Attributi = $props();

	const href = $derived(base + a.url);
	const isActive = $derived(href === page.url.pathname);
</script>

<a
	{href}
	class={[
		'block rounded-md p-2',
		{
			'bg-primary text-primary-foreground hover:bg-secondary hover:text-secondary-foreground':
				!isActive,
			'bg-yellow-500 text-black': isActive
		}
	]}
>
	{a.testo}
</a>
