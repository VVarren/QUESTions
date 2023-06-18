<script lang="ts">
	let title: string = "Card Title";
	let backcontent: string =
		"Card Contents Card Contents Card Contents Card Contents11111";
	let clicked: boolean = false;
	let temp: string = title;
	$: clicked ? (temp = backcontent) : (temp = title);
</script>

<div class="cardContainer">
	<button on:click={() => (clicked = !clicked)}>
		<div class="cardTitle">{temp}</div>
	</button>
</div>

<style>
	.cardContainer {
		background-color: red;
		display: flex;
		flex-direction: column;
		width: 50%;
		height: 100%;
		margin: 3%;
	}
	.cardTitle {
		background-color: blue;
		justify-content: center;
		text-align: center;
	}
</style>
