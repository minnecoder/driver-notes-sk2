<script lang="ts">
	import { enhance } from '$app/forms';
	let signerName = '';

	let { stop } = $props();
</script>

<div class="main">
	<h3 class="stopTitle">{stop.custName}</h3>
	<div class="stopData">
		<div class="left">
			<p>
				Address: <span>{stop.address}</span>
			</p>
			{#if stop.suite !== ''}
				<p>
					Suite: <span>{stop.suite}</span>
				</p>
			{/if}

			<p>
				City: <span> {stop.city}</span>
			</p>
			<p>
				Delivery Location: <span>{stop.deliveryLocation}</span>
			</p>
			{#if stop.notes !== ''}
				<p>
					Notes: <span>{stop.notes}</span>
				</p>
			{/if}
		</div>
		<div class="right">
			<form
				use:enhance={({ formData }) => formData.append('stopData', JSON.stringify(stop))}
				action="?/addSigner"
				method="POST"
			>
				{#if stop.signers.length > 0}
					<div class="signerList">
						<p>Past Signers</p>
						<ul>
							{#each stop.signers as signer (signer)}
								<li>{signer}</li>
							{/each}
						</ul>
					</div>
				{/if}

				<input
					class="addSignerText"
					name="signersName"
					placeholder="Signer Name"
					type="text"
					value={signerName}
				/>
				<input class="addSignerBtn" type="submit" value="Add Signer" />
			</form>
		</div>
	</div>

	<div class="linkArea">
		<a class="updateLink" href={`/updatenote/${stop._id}`}>Update Note</a>
	</div>
</div>

<style>
	.main {
		width: 70%;
		padding-left: 2rem;
		margin: 0.5rem 0;
		border-radius: 8px;
		background-color: white;
		box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.2);
	}
	.main p {
		font-weight: bold;
	}
	.main span {
		font-weight: normal;
	}

	.stopTitle {
		text-align: center;
		font-size: 1.5rem;
	}

	.left {
		padding: 0 1rem;
		width: 50%;
	}
	@media (max-width: 676px) {
		.left {
			width: 100%;
		}
	}

	.right {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		padding: 0 1rem;
		width: 50%;
	}
	@media (max-width: 676px) {
		.right {
			width: 100%;
		}
	}

	.signerList ul {
		list-style-type: none;
	}

	.stopData {
		display: flex;
		margin-right: 2rem;
	}
	@media (max-width: 676px) {
		.stopData {
			flex-direction: column;
		}
	}

	.linkArea {
		text-align: center;
	}

	.updateLink {
		display: inline-block;
		text-decoration: none;
		font-weight: bold;
		color: white;
		overflow: hidden;
		background-color: #767676;
		margin: 1rem 0;
		padding: 0.5rem 1rem;
		border: 1px solid #767676;
		box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.3);
		border-radius: 5px;
	}

	.addSignerBtn {
		display: inline-block;
		text-decoration: none;
		font-weight: bold;
		color: white;
		overflow: hidden;
		background-color: #767676;
		margin: 1rem 0;
		padding: 0.5rem 1rem;
		border: 1px solid #767676;
		box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.3);
		border-radius: 5px;
	}

	.addSignerText {
		padding: 0.5rem;
		margin-right: 0.5rem;
	}
</style>
