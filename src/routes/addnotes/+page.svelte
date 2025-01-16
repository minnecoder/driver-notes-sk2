<script lang="ts">
	import NavBar from '../../components/NavBar.svelte';
	let stop = $state({
		custName: '',
		address: '',
		suite: '',
		city: '',
		deliveryLocation: '',
		notes: '',
		signers: [],
		error: undefined
	});
</script>

<!-- const handleSubmit = event => { -->
<!--   event.persist(); -->
<!--   const token = localStorage.getItem("token"); -->
<!--   fetch("/api/v1/notes", { -->
<!--     method: "POST", -->
<!--     mode: "cors", -->
<!--     headers: { "Content-Type": "application/json", Authorization: token }, -->
<!--     body: JSON.stringify({ -->
<!--       custName: stop.custName, -->
<!--       address: stop.address, -->
<!--       suite: stop.suite, -->
<!--       city: stop.city, -->
<!--       deliveryLocation: stop.deliveryLocation, -->
<!--       notes: stop.notes, -->
<!--       signers: stop.signers, -->
<!--     }), -->
<!--   }); -->
<!--   setStop({ -->
<!--     custName: "", -->
<!--     address: "", -->
<!--     suite: "", -->
<!--     city: "", -->
<!--     deliveryLocation: "", -->
<!--     notes: "", -->
<!--     signers: "", -->
<!--     error: "", -->
<!--   }); -->
<!--   history.push("/stops"); -->
<!-- } -->

<div class="main">
	<NavBar />
	<h1 class="addTitle">Add Stop</h1>
	<p>{stop.error}</p>
	<form class="addForm">
		<input name="custName" type="text" placeholder="Customer Name" bind:value={stop.custName} />
		<input name="address" type="text" placeholder="Address" bind:value={stop.address} />
		<input name="suite" type="text" placeholder="Suite" bind:value={stop.suite} />
		<input name="city" type="text" placeholder="City" value={stop.city} />
		<input
			name="deliveryLocation"
			type="text"
			placeholder="Delivery Location"
			bind:value={stop.deliveryLocation}
		/>
		<input name="notes" type="text" placeholder="Notes" bind:value={stop.notes} />
		<input name="signers" type="text" placeholder="Signers" bind:value={stop.signers} />
		<!-- TODO: add handleSubmit to submit button -->
		<input type="submit" value="Add Note" />
	</form>
</div>

<style>
	.addTitle {
		font-size: 3rem;
		color: #5f48d9;
		text-align: center;
	}

	.addForm {
		align-items: center;
		display: flex;
		justify-content: center;
		flex-direction: column;
	}

	input[type='text'] {
		margin: 0.75rem 0;
		padding: 1rem 0.5rem;
		width: 50%;
		border-radius: 8px;
		border: solid 1px #c0c6c8;
		box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.2);
	}

	input[type='submit'] {
		background: #5f48d9;
		width: 6rem;
		padding: 1rem 0;
		margin-top: 1rem;
		border: solid 1px #5f48d9;
		border-radius: 8px;
		box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.2);
		color: #fff;
		cursor: pointer;
	}
</style>
