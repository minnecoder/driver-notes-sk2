<script lang="ts">
	import SingleStop from '../../components/SingleStop.svelte';
	import NavBar from '../../components/NavBar.svelte';

	let { data } = $props();
	let stops = [];
	stops = data.stops;
	stops = JSON.parse(stops);

	let search = $state('');
	search = '';
	let filteredStops = $state([]);
	$effect(() => {
		filteredStops = stops.filter(
			(stop) => stop.custName.toLocaleLowerCase().indexOf(search.toLocaleLowerCase()) !== -1
		);
	});
</script>

<svelte:head>
	<title>Stop Notes</title>
</svelte:head>

{#if filteredStops.length === 0 && search !== ''}
	<div class="main">
		<NavBar />
		<h1 class="title">Stops</h1>
		<div class="noStopListDiv">
			<input bind:value={search} class="search" type="text" placeholder="Search" />
			<p>There were no matches for that search. Would you like to add one?</p>
			<a class="addLink" href="/addnotes">Add</a>
		</div>
	</div>
{:else}
	<div class="main">
		<NavBar />
		<h1 class="title">Stops</h1>
		<div class="stopListDiv">
			<input bind:value={search} class="search" type="text" placeholder="Search" />
			{#each filteredStops as stop (stop._id)}
				<SingleStop {stop} />
			{/each}
		</div>
	</div>
{/if}

<style>
	.main {
		background: #c0c6c8;
	}

	.noStopListDiv {
		align-items: center;
		display: flex;
		justify-content: center;
		flex-direction: column;
		background: #c0c6c8;
	}

	.stopListDiv {
		align-items: center;
		display: flex;
		justify-content: center;
		flex-direction: column;
		background: #c0c6c8;
	}

	.search {
		margin-bottom: 1rem;
		padding: 1rem 0;
		width: 50%;
		text-align: center;
		border-radius: 8px;
		border: solid 1px #c0c6c8;
		box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.2);
	}

	.title {
		color: red;
		font-size: 3rem;
		text-align: center;
		background: #c0c6c8;
	}

	.addLink {
		display: inline-block;
		text-decoration: none;
		font-weight: bold;
		color: white;
		background-color: red;
		margin-bottom: 1rem;
		padding: 0.5rem 1rem;
		border: 1px solid red;
	}
</style>
