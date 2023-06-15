<script>
	import Card from './Card.svelte';
	import welcome from '$lib/images/svelte-welcome.webp';
	import welcome_fallback from '$lib/images/svelte-welcome.png';
	
</script>

<svelte:head>
	<title>Quiz Stuff Main Page</title>
	
</svelte:head>
<h1>QUESTions</h1>
<div class = cardList>
		<Card/>
		<Card/>
		<Card/>
		<Card/>
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
	
</style>
