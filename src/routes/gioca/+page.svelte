<script>
	let count = $state(0);

	function increase() {
		count = count + 1;
	}
</script>

<div class="flex h-[calc(100vh-104px-48px)] items-center justify-center overflow-auto p-8">
	<p class="count text-center text-4xl font-bold" style:--size="{(count + 10) * 30}px">
		{count}
	</p>
</div>

<div class="fixed bottom-0 w-full bg-white p-8">
	<button onclick={increase} class="w-full rounded-full bg-red-500 p-2 text-white hover:bg-red-700">
		DI PIÙ
	</button>
</div>

<style>
	.count {
		font-size: var(--size);
	}
</style>
