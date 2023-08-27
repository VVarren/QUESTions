<script lang="ts">
	let flipped: boolean = false;
	export let card: any;
</script>

<div class="cardContainer">
	<button on:click={() => (flipped = !flipped)} class="swapButton">
		<div>{flipped ? card.front : card.back}</div>
	</button>
</div>

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
