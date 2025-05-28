<script>
	import NavbarLink from './navbar-link.svelte';
</script>

<nav class="bg-primary text-primary-foreground z-10 flex justify-between p-1">
	<NavbarLink url="/" testo="Home" />

	<div class="flex gap-1">
		<NavbarLink url="/chi-siamo" testo="Chi siamo" />
		<NavbarLink url="/progetti" testo="Progetti" />
		<NavbarLink url="/gioca" testo="Gioca con noi" />
	</div>
</nav>
