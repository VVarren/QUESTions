<script lang="ts">
	import Card from "./Card.svelte";
	import { cardInfo } from "../stores";
	let title: string = "lol";
	let backcontent: string = "sgsg";
	let cardArr: any[] = [];

	cardInfo.subscribe((value) => {
		cardArr = value;
	});
	/*
	let cardArr = [
		{ title: "f", backContent: "not f", clicked: false },
		{ title: "fh", backContent: "not fh", clicked: false },
	]; // somehow access data from card.svelte
	cardArr = [
		...cardArr,
		{ title: "this is not f", backContent: "100% not f", clicked: false },
	];*/
	let temp: string = title;

	//console.log(cardArr);
</script>

<svelte:head>
	<title>Quiz Stuff Main Page</title>
</svelte:head>
<h1>QUESTions</h1>
<div class="cardList">
	{#each cardArr as card}
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
