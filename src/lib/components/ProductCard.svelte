<script>
	import ColorSwatch from './ColorSwatch.svelte';
	import ProductImage from './ProductImage.svelte';

	export let title;
	export let variants;
    let selectedVariantIndex = 0;
	let selectedVariant;

	function swatchClicked(dex) {
		selectedVariantIndex = dex;
	}

	$: selectedVariant = variants[selectedVariantIndex];
</script>

<div class="border p-3 grid gap-2">

	<ProductImage hex={selectedVariant.hex}></ProductImage>

	<div class="font-bold">{title}</div>

	<div class="flex gap-2">
		{#each variants as variant, dex}
			<ColorSwatch 
				on:click={() => swatchClicked(dex)}
				hex={variant.hex} selected={dex === selectedVariantIndex}></ColorSwatch>
		{/each}
	</div>

	<div class="">{selectedVariant.price}</div>

	<div class="">
		<button class="bg-black text-white p-2">Add to Cart</button>
	</div>
</div>
