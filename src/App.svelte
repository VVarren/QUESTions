<script lang="ts">
	import svelteLogo from "./assets/svelte.svg";
	import Card from "./lib/Card.svelte";
	let front: string = "";
	let back: string = "";
	interface ICard {
		front: string;
		back: string;
	}
	let cards: ICard[] = [];
	const AddCard = () => {
		if (front != "" && back != "") {
			cards = [
				...cards,
				{
					front: front,
					back: back,
				},
			];
			front = "";
			back = "";
		}
	};
	/*To add 1. Home page with button to makea set 2. Sets hold cards 3. Cards can
be edited in the set */
</script>

<main>
	<div class="AdderContainer">
		<input bind:value={front} placeholder="Front" class="InputFrontOfCard" />
		<input bind:value={back} placeholder="Back" class="InputBackOfCard" />
		<button on:click={AddCard}>Add me :) </button>

		{#each cards as card}
			<div class="Cards"><Card front={card.front} back={card.back} /></div>
		{/each}
	</div>
</main>

<style>
	:root {
		font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
		line-height: 1.5;
		font-weight: 400;

		color-scheme: light dark;
		color: rgba(255, 255, 255, 0.87);
		background-color: #242424;

		font-synthesis: none;
		text-rendering: optimizeLegibility;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		-webkit-text-size-adjust: 100%;
	}
	.InputFrontOfCard {
		border-style: hidden;
		display: flex;
		flex-direction: column;
	}
	.InputBackOfCard {
		border-style: hidden;
		display: flex;
		flex-direction: column;
	}
	.Cards {
		display: flex;
	}
	.Cards {
		margin: auto;
		margin-bottom: 5%;
		width: 50%;
		border: 3px solid green;
		align-items: center;
		justify-content: center;
		flex-direction: column;
		width: 60%;
		height: 30vh;

		font-size: 2em;
	}
	.AdderContainer {
	}
</style>
