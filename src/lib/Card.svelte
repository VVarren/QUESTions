<script lang="ts">
	export let front: string;
	export let back: string;
	let count: number = 0;
	let current: string = front;
	let isFront: boolean = true;
	let SideofCard: string = "Front of Card";

	const ChangeCard = () => {
		isFront = !isFront;
		isFront ? (current = front) : (current = back);
		isFront ? (SideofCard = "Front of Card") : (SideofCard = "Back of Card");
	};
</script>

<button class="Card" on:click={ChangeCard}>
	*Current side of card is {SideofCard}* {current}
</button>
