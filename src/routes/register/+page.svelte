<script lang="ts">
	import type { ActionData } from './$types';
	let user = $state({
		userName: '',
		password: '',
		confirmPassword: '',
		error: ''
	});
	let form: ActionData = $props();
	let message = $state('');

	if (form && form.form) {
		message = form.form.message;
	} else {
		message = '';
	}
</script>

<svelte:head>
	<title>Register User</title>
</svelte:head>

<div>
	<h1 class="registerTitle">Delivery Notes</h1>
	{#if message}
		<p class="error">{message}</p>
	{/if}
	<form class="registerForm" method="POST" action="/register">
		<input
			required
			name="userName"
			type="text"
			placeholder="User Name"
			bind:value={user.userName}
		/>

		<input
			required
			name="password"
			type="password"
			placeholder="Password"
			bind:value={user.password}
		/>

		<input
			required
			name="confirmPassword"
			type="password"
			placeholder="Confirm password"
			value={user.confirmPassword}
		/>

		<input type="submit" value="Submit" />

		<div>
			<p>
				Already have an account? <a class="link" href="/">Login</a>
			</p>
			<p>
				Login as a Demo User <a class="link" href="/demo">Click Here</a>
			</p>
		</div>
	</form>
</div>

<style>
	.registerTitle {
		text-align: center;
		color: red;
		margin-top: 4rem;
	}

	.error {
		text-align: center;
		color: red;
	}

	.registerForm {
		align-items: center;
		display: flex;
		justify-content: center;
		flex-direction: column;
	}

	.registerForm input {
		width: 20rem;
		margin: 0.5rem 0;
		padding: 1rem 0;
		text-align: center;
		border-radius: 8px;
		border: solid 1px #c0c6c8;
		box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.2);
	}

	.registerForm input[type='submit'] {
		width: 5rem;
		background: #767676;
		color: white;
		border: solid 1px #767676;
	}
	.link {
		text-decoration: none;
	}
</style>
