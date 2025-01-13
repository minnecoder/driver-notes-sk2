<script lang="ts">
	import type { ActionData } from './$types';

	let user = $state({
		userName: '',
		password: '',
		error: ''
	});

	let form: ActionData = $props();
</script>

<svelte:head>
	<title>Login</title>
</svelte:head>

<div class="main">
	<h1 class="loginTitle">Delivery Notes</h1>
	{#if form?.message}
		<p class="error">{form?.message}</p>
	{/if}
	<form class="loginForm" action="?/login" method="POST">
		<input name="userName" type="text" placeholder="User Name" bind:value={user.userName} />

		<input name="password" type="password" placeholder="Password" bind:value={user.password} />

		<input type="submit" value="Submit" />
		<div>
			<p>
				Don't have an account?<a href="/register">Register User</a>
			</p>
			<p>
				Login as a Demo User <a href="/demo">Click Here</a>
			</p>
		</div>
	</form>
</div>

<style>
	.main {
		background: #c0c6c8;
	}

	.loginTitle {
		text-align: center;
		color: red;
		margin-top: 4rem;
	}

	.error {
		text-align: center;
		color: red;
		font-weight: bold;
	}

	.loginForm {
		align-items: center;
		display: flex;
		justify-content: center;
		flex-direction: column;
	}
	.loginForm input {
		width: 20rem;
		margin: 0.5rem 0;
		padding: 1rem 0;
		text-align: center;
		border-radius: 8px;
		border: solid 1px #c0c6c8;
		box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.2);
	}

	.loginForm input[type='submit'] {
		width: 5rem;
		background: #767676;
		color: white;
		border: solid 1px #767676;
	}
</style>
