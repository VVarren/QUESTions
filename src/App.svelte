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
	<div>
		<input bind:value={front} placeholder="Front" class="FrontOfCard" />
		<input bind:value={back} placeholder="Back" class="BackOfCard" />
		<button on:click={AddCard}>Add me :) </button>

		{#each cards as card}
			<Card front={card.front} back={card.back} />
		{/each}
	</div>
</main>

<style>
</style>
