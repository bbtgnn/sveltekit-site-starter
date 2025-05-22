<script>
	import NavbarLink from './navbar-link.svelte';
</script>

<nav class="bg-primary text-primary-foreground flex justify-between">
	<NavbarLink url="/" testo="Home" />

	<div>
		<NavbarLink url="/chi-siamo" testo="Chi siamo" />
		<NavbarLink url="/progetti" testo="Progetti" />
	</div>
</nav>
