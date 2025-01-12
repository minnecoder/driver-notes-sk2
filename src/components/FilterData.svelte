<script lang="ts">
	let intialStops = [];

	function filterList() {
		const stops = initialStops;
		console.log(stops);
		setStops(stops);
	}
</script>

<div>
	<form>
		<input type="text" placeholder="Search" onChange={this.filterList} />
	</form>

	<div>
		{this.state.stops.map((stop) => <SingleStop key={stop.id} stop={stop} />)}
	</div>
</div>
