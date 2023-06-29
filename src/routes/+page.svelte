<script lang="ts">
	import { cardInfo } from "../stores";
</script>

<svelte:head>
	<title>Quiz Stuff Main Page</title>
</svelte:head>
<h1>QUESTions</h1>
<div class="cardList">
	{#each $cardInfo as card, i}
		<div class="cardContainer">
			<button
				on:click={() => (card.clicked = !card.clicked)}
				class="swapButton"
			>
				<div>{card.clicked ? card.backContent : card.title}</div>
			</button>
		</div>
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
