<script lang="ts">
	//This is out of commision, I no longer need this file :)
	let title: string = "Card Title";
	let backcontent: string =
		"Card Contents Card Contents Card Contents Card Contents11111";
	let clicked: boolean = false;
	let temp: string = title;
	$: clicked ? (temp = backcontent) : (temp = title);
</script>

<div class="cardContainer">
	<button on:click={() => (clicked = !clicked)} class="swapButton">
		<div>{temp}</div>
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
