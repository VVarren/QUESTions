<script lang="ts">
	import Card from "./Card.svelte";
	import type { PageServerData } from "./$types";
	export let data: PageServerData;
</script>

This is just a test :)
{#each data.cards as card}
	<div>{card.front}</div>
{/each}
{#each data.cards as card}
	<Card {card} />
{/each}

<style>
	.cardContainer {
		border-style: solid;
		display: flex;
		flex-direction: column;
		width: 30%;
		height: 30vh;
		margin: 3%;
		/* background-color: blue; */
		justify-content: center;
		text-align: center;
	}
	.swapButton {
		border-style: none;
	}
</style>
