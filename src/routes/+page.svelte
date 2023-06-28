<script lang="ts">
	import Card from "./Card.svelte";
	import { cardInfo } from "../stores";
	let title: string = "lol";
	let backcontent: string = "sgsg";
	let cardArr: any[] = [];

	cardInfo.subscribe((value) => {
		cardArr = value;
	});

	let temp: string = title;
</script>

<!-- the cardArr has an undef at index 0 -->
<svelte:head>
	<title>Quiz Stuff Main Page</title>
</svelte:head>
<h1>QUESTions</h1>
<div class="cardList">
	{#each cardArr as card, i}
		<!-- {#if i > 1} -->
		<div class="cardContainer">
			<button
				on:click={() => (card.clicked = !card.clicked)}
				class="swapButton"
			>
				<div>{card.clicked ? card.backContent : card.title}</div>
			</button>
		</div>
		<!-- {/if} -->
	{/each}
</div>

<style>
	.cardList {
		display: flex;
		flex-direction: row;
		flex-flow: wrap;
		justify-content: center;
		align-items: center;
	}

	h1 {
		width: 100%;
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
	.swapButton {
		border-style: none;
	}
</style>
