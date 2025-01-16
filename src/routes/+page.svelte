<script lang="ts">
	import type { ActionData } from './$types';

	let user = $state({
		userName: '',
		password: '',
		error: ''
	});

	let form: ActionData = $props();
	form = { message: '' };
	let message = $state('');
	if (form && form.form) {
		message = form.form.message;
	} else {
		message = '';
	}
</script>

<svelte:head>
	<title>Login</title>
</svelte:head>

<div class="main">
	<h1 class="loginTitle">Login</h1>
	{#if message}
		<p class="error">{message}</p>
	{/if}
	<form class="loginForm" method="POST" action="/">
		<input name="userName" type="text" placeholder="User Name" bind:value={user.userName} />

		<input name="password" type="password" placeholder="Password" bind:value={user.password} />

		<input type="submit" value="Submit" />
		<div class="links">
			<p>
				Don't have an account? <a class="link" href="/register">Register User</a>
			</p>
			<p>
				Login as a Demo User <a class="link" href="/demo">Click Here</a>
			</p>
		</div>
	</form>
</div>

<style>
	.main {
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.loginTitle {
		text-align: center;
		color: #5f48d9;
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
		background: #1e1f23;
		width: 40%;
		padding: 4rem 0;
		border-radius: 10px;
	}
	.loginForm input {
		width: 20rem;
		margin: 0.5rem 0;
		padding: 1rem 0.5rem;

		border-radius: 8px;
		border: solid 1px #c0c6c8;
		box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.2);
	}

	.loginForm input[type='submit'] {
		width: 5rem;
		background: #5f48d9;
		color: white;
		border: solid 1px #5f48d9;
	}

	.links p {
		color: white;
	}

	.link {
		text-decoration: none;
		color: #5f48d9;
	}
</style>
