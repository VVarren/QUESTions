<script lang="ts">
	import { cardInfo } from "../stores";
	import type { PageServerData } from "./$types";
	export let data: PageServerData;
	// Need to do the chnangeCardLayout
	function changeCardLayout() {}
</script>

<svelte:head>
	<title>Quiz Stuff Main Page</title>
</svelte:head>
<h1>
	QUESTions
	<button on:click={() => changeCardLayout()}>Change Card Layout</button>
</h1>
<div class="cardList">
	{#each data.packs as pack}
		<div class="cardContainer">
			<a href="/packs/{pack.id}">{pack.name}</a>
		</div>
	{/each}
</div>

<!-- Need to correct the colors in the swapButton class -->
<style>
	.cardList {
		display: flex;
		flex-direction: row;
		flex-flow: wrap;
		justify-content: center;
		align-items: center;
	}
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
	h1 {
		width: 100%;
	}
</style>
