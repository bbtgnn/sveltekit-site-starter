<script lang="ts">
	type Attributi = {
		url: string;
		testo: string;
	};

	let a: Attributi = $props();
</script>

<a
	href={a.url}
	class="bg-primary text-primary-foreground hover:bg-secondary hover:text-secondary-foreground"
>
	{a.testo}
</a>
