<script lang="ts">
	import { cardInfo } from "../../stores";

	let title: string = "";
	let backContent: string = "";
	let setName: string = "";
	function createCard() {
		cardInfo.update((cardInfo) => [
			...cardInfo,
			{
				title: title,
				backContent: backContent,
				clicked: false,
				setName: setName,
			},
		]);

		title = "";
		backContent = "";
		setName = "";
	}
</script>

<h1>Create A Card</h1>

<div class="inputContainer">
	<textarea
		bind:value={title}
		class="titleContainer"
		placeholder="Enter a title:"
	/>
	<textarea
		bind:value={setName}
		class="setNameContainer"
		placeholder="Enter the set name:"
	/>
	<textarea
		bind:value={backContent}
		class="backContentContainer"
		placeholder="Enter the back content:"
	/>

	<button on:click={() => createCard()}> Create Card! </button>
</div>

<style>
	/*TODO ---
		1. Need to make the css for the button
	*/
	.inputContainer {
		border-style: solid;
		border-radius: 20px;
		justify-content: center;
		align-items: center;
		display: flex;
		flex-direction: column;
		box-shadow: 5px 10px;
	}

	.titleContainer {
		margin-top: 3%;
		margin-bottom: 1.5%;
		border-radius: 20px;
		border-width: 2px;
		width: 50vh;
		text-align: center;
	}
	.setNameContainer {
		margin-top: 1.5%;
		margin-bottom: 3%;
		border-radius: 20px;
		width: 50vh;

		border-width: 2px;
		text-align: center;
	}
	.backContentContainer {
		margin-top: 1.5%;
		margin-bottom: 3%;
		border-radius: 20px;
		width: 50vh;
		height: 50vh;
		border-width: 2px;
		text-align: center;
	}
</style>
