<script lang="ts">
	let title: string ="";
	let backContent: string = "";
	function createCard(){
		//somehow link the value to a new card 
		title = "";
		backContent = "";
	}
</script>

<h1>Create A Card</h1>
<div class = "inputContainer">
<textarea bind:value={title} class = "titleContainer" placeholder="Enter a title:"/>
<textarea bind:value={backContent} class = "backContentContainer" placeholder="Enter the back content:"/>
<button></button>
</div>


<style>
 .inputContainer{
	border-style: solid;
	border-radius: 20px;
	justify-content: center;
	align-items: center;
	display: flex;
	flex-direction: column;
	box-shadow: 5px 10px;

 }

 .titleContainer{
	margin-top: 3%;
	margin-bottom: 1.5%;
	border-radius: 20px;
	border-width: 2px;
	width: 50vh;
	text-align: center;

}
 .backContentContainer{
	margin-top: 1.5%;
	margin-bottom: 3%;
	border-radius: 20px;
	width: 50vh;
	height:50vh;
	border-width: 2px;
	text-align: center;

 }
</style>