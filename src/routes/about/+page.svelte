<script lang="ts">
	let title: string ="";
	let backContent: string = "";
</script>

<h1>Create A Card</h1>
<div class = "inputContainer">
<input bind:value={title} placeholder="Enter a title:"/>
<input bind:value={backContent} placeholder="Enter the back content:"/>
</div>
<style>
 .inputContainer{
	background-color:blue;
 }
</style>