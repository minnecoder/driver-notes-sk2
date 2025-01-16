<script lang="ts">
	import NavBar from '../../../components/NavBar.svelte';
	import { enhance } from '$app/forms';

	let { data } = $props();
	let stop = $state(JSON.parse(data.stop));
</script>

<svelte:head>
	<title>Update Stop</title>
</svelte:head>

<div class="main">
	<NavBar />
	<h1 class="updateTitle">Update Stop</h1>
	<p>{stop.error}</p>
	<form
		class="updateForm"
		use:enhance={({ formData }) => formData.append('stopId', JSON.stringify(stop._id))}
		action="?/updateNote"
		method="POST"
	>
		<input name="custName" type="text" placeholder="Customer Name" bind:value={stop.custName} />
		<input name="address" type="text" placeholder="Address" bind:value={stop.address} />
		<input name="suite" type="text" placeholder="Suite" bind:value={stop.suite} />
		<input name="city" type="text" placeholder="City" bind:value={stop.city} />
		<input
			name="deliveryLocation"
			type="text"
			placeholder="Delivery Location"
			bind:value={stop.deliveryLocation}
		/>
		<input name="notes" type="text" placeholder="Notes" bind:value={stop.notes} />
		<input name="signers" type="text" placeholder="Signers" bind:value={stop.signers} />
		<!-- TODO: Add "handleSubmit" for line below -->
		<input type="submit" value="Update Note" />
	</form>
</div>

<style>
	.updateTitle {
		font-size: 3rem;
		color: #5f48d9;
		text-align: center;
	}

	.updateForm {
		align-items: center;
		display: flex;
		justify-content: center;
		flex-direction: column;
	}
	input[type='text'] {
		margin: 0.5rem 0;
		padding: 1rem 0.5rem;
		width: 40%;
		border-radius: 8px;
		border: solid 1px #c0c6c8;
		box-shadow: 5px 5px 10px rgba(95, 95, 95, 0.2);
	}

	input[type='submit'] {
		background: #5f48d9;
		width: 6rem;
		padding: 1rem 0.5rem;
		margin-top: 0.5rem;
		border: solid 1px #5f48d9;
		border-radius: 8px;
		box-shadow: 5px 5px 10px rgba(95, 95, 95, 0.2);
		color: #fff;
	}
</style>
